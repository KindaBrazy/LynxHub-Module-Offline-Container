import path from 'node:path';

import treeKill from 'tree-kill';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/cross/plugin/ModuleTypes';
import {FLOWISEAI_ID, N8N_ID} from '../../../Constants';
import {getCdCommand, isWin, removeAnsi} from '../../../Utils/CrossUtils';
import {determineShell, initBatchFile, LINE_ENDING, utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'n8n_config.bat' : 'n8n_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nn8n start' : '#!/bin/bash\n\nn8n start';

async function getRunCommands(configDir?: string): Promise<string | string[]> {
  if (!configDir) return '';

  const filePath = path.resolve(path.join(configDir, CONFIG_FILE));
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  return [getCdCommand(configDir) + LINE_ENDING, `${isWin ? `& "${filePath}"` : `bash ${filePath}`}${LINE_ENDING}`];
}

async function saveArgs(args: ChosenArgument[], configDir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, configDir);
}

async function readArgs(configDir?: string) {
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

      const cleanOutput = removeAnsi(output).trim().replace('npm list -g n8n', '');

      const isInstalled = /n8n@.+/.test(cleanOutput);

      resolve(isInstalled);
    });

    ptyProcess.write(`npm list -g n8n${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function isInstalled(utils: MainModuleUtils): Promise<boolean> {
  return checkInstalled(utils.pty);
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

      const match = output.match(/n8n@([\d.]+)/i);
      if (match && match[1]) {
        resolve(match[1]);
      } else {
        resolve('');
      }
    });

    ptyProcess.write(`npm list -g n8n${LINE_ENDING}`);
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
        const match = line.match(/n8n\s+([\d.]+)\s+[\d.]+\s+([\d.]+)/i);
        if (match) {
          resolve(match[2]);
        }
      }

      resolve(null);
    });

    ptyProcess.write(`npm -g outdated n8n${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

async function updateAvailable(utils: MainModuleUtils): Promise<boolean> {
  const available = await checkUpdate(utils.pty);
  if (available) {
    utils.storage.set('update-available-version-n8n', available);
    return true;
  }

  utils.storage.set('update-available-version-n8n', undefined);
  return false;
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_n8n_installed', () => checkInstalled(utils.pty));
  utils.ipc.handle('current_n8n_version', () => getVersion(utils.pty));
}

async function uninstall(utils: MainModuleUtils): Promise<void> {
  return new Promise((resolve, reject) => {
    const ptyProcess = utils.pty.spawn(determineShell(), [], {});
    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(({exitCode}: {exitCode: number}) => {
      if (exitCode === 0) {
        resolve();
      } else {
        reject(new Error(`Error uninstalling n8n. Exit Code: ${exitCode}\nOutput:\n${output}`));
      }
    });

    utils.getExtensions_TerminalPreCommands(N8N_ID).forEach(command => ptyProcess.write(command));

    ptyProcess.write(`npm -g rm n8n${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

const N8N_MM: CardMainMethodsInitial = utils => {
  const configDir = utils.getConfigDir();

  return {
    mainIpc: () => mainIpc(utils),
    getRunCommands: () => getRunCommands(configDir),
    isInstalled: () => isInstalled(utils),
    saveArgs: args => saveArgs(args, configDir),
    readArgs: () => readArgs(configDir),
    updateAvailable: () => updateAvailable(utils),
    uninstall: () => uninstall(utils),
  };
};

export default N8N_MM;
