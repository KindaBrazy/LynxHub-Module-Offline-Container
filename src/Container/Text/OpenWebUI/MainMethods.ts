import {platform} from 'node:os';
import path from 'node:path';

import {compare} from 'semver';
import treeKill from 'tree-kill';

import {CardMainMethods, ChosenArgument, LynxApiInstalled, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {determineShell, initBatchFile, LINE_ENDING, utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {getLatestPipPackageVersion, getPipPackageVersion} from './MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'open-webui_config.bat' : 'open-webui_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nopen-webui serve' : '#!/bin/bash\n\nopen-webui serve';

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
    const ptyProcess = pty.spawn(determineShell(), [], {});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (pty.pid) {
        treeKill(pty.pid);
        if (platform() === 'darwin') pty.kill();
      }
      resolve(output.toLowerCase().includes('version:'));
    });

    ptyProcess.write(`pip show open-webui${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function isInstalled(lynxApi: LynxApiInstalled): Promise<boolean> {
  return checkInstalled(lynxApi.pty);
}

async function updateAvailable(lynxApi: LynxApiUpdate): Promise<boolean> {
  try {
    const currentVersion = await getPipPackageVersion('open-webui', lynxApi.pty);
    const latestVersion = await getLatestPipPackageVersion('open-webui');
    if (currentVersion && latestVersion) return compare(currentVersion, latestVersion) === -1;
  } catch (err) {
    console.error('Error checking update for open-webui', err);
    return false;
  }

  return false;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_openwebui_installed', () => checkInstalled(ipc.pty));
  ipc.handle('current_openwebui_version', () => getPipPackageVersion('open-webui', ipc.pty));
}

const OpenWebUI_MM: CardMainMethods = {
  getRunCommands,
  updateAvailable,
  isInstalled,
  mainIpc,
  saveArgs,
  readArgs,
};

export default OpenWebUI_MM;
