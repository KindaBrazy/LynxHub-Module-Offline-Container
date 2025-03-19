import {platform} from 'node:os';
import path from 'node:path';

import treeKill from 'tree-kill';

import {CardMainMethods, ChosenArgument, LynxApiInstalled, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {isWin, removeAnsi} from '../../../Utils/CrossUtils';
import {
  checkWhich,
  determineShell,
  initBatchFile,
  LINE_ENDING,
  utilReadArgs,
  utilSaveArgs,
} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'flowise_config.bat' : 'flowise_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nnpx flowise start' : '#!/bin/bash\n\nnpx flowise start';

function getCdCommand(dirPath: string): string {
  const escapedPath = dirPath.replace(/ /g, '\\ ');
  const quotedPath = `"${dirPath}"`;

  if (platform() === 'win32') {
    return `cd ${quotedPath}`;
  } else if (platform() === 'linux' || platform() === 'darwin') {
    return `cd ${escapedPath}`;
  } else {
    throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function getRunCommands(_?: string, configDir?: string): Promise<string | string[]> {
  if (!configDir) return '';

  const filePath = path.resolve(path.join(configDir, CONFIG_FILE));
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  return [getCdCommand(configDir) + LINE_ENDING, `${isWin ? `& "${filePath}"` : `bash ${filePath}`}${LINE_ENDING}`];
}

async function saveArgs(args: ChosenArgument[], _?: string, configDir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, configDir);
}

async function readArgs(_?: string, configDir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs, configDir);
}

async function checkInstalled(pty: any): Promise<boolean> {
  return new Promise(resolve => {
    const ptyProcess = pty.spawn(determineShell(), [], {env: process.env});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const cleanOutput = removeAnsi(output).trim().replace('npm list -g flowise', '');

      const isInstalled = /flowise@.+/.test(cleanOutput);

      resolve(isInstalled);
    });

    ptyProcess.write(`npm list -g flowise${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function getVersion(pty: any): Promise<string> {
  return new Promise(resolve => {
    const ptyProcess = pty.spawn(determineShell(), [], {});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const match = output.match(/flowise@([\d.]+)/i);
      if (match && match[1]) {
        resolve(match[1]);
      } else {
        resolve('');
      }
    });

    ptyProcess.write(`npm list -g flowise${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function checkUpdate(pty: any): Promise<string | null> {
  return new Promise(resolve => {
    const ptyProcess = pty.spawn(determineShell(), [], {});
    let output = '';

    ptyProcess.onData((data: any) => {
      output += data.toString();
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const lines = removeAnsi(output).split(LINE_ENDING);
      for (const line of lines) {
        const match = line.match(/flowise\s+([\d.]+)\s+[\d.]+\s+([\d.]+)/i);
        if (match) {
          resolve(match[2]);
        }
      }

      resolve(null);
    });

    ptyProcess.write(`npm -g outdated flowise${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function updateAvailable(lynxApi: LynxApiUpdate): Promise<boolean> {
  const available = await checkUpdate(lynxApi.pty);
  if (available) {
    lynxApi.storage.set('update-available-version-flowise', available);
    return true;
  }

  lynxApi.storage.set('update-available-version-flowise', undefined);
  return false;
}

async function isInstalled(lynxApi: LynxApiInstalled): Promise<boolean> {
  return checkInstalled(lynxApi.pty);
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_flowise_installed', () => checkInstalled(ipc.pty));
  ipc.handle('current_flowise_version', () => getVersion(ipc.pty));
  ipc.handle('is_npm_available', () => checkWhich('npm'));
}

const Flow_MM: CardMainMethods = {updateAvailable, getRunCommands, mainIpc, isInstalled, saveArgs, readArgs};

export default Flow_MM;
