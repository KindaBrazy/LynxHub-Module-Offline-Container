import {platform} from 'node:os';
import path from 'node:path';

import {compare} from 'semver';

import {CardMainMethods, ChosenArgument, LynxApiInstalled, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {initBatchFile, LINE_ENDING, utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {getLatestPipPackageVersion, getPipPackageVersion} from './MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'open-webui.bat' : 'open-webui.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nopen-webui serve' : '#!/bin/bash\n\nopen-webui serve';

async function getRunCommands(dir?: string, configDir?: string): Promise<string | string[]> {
  if (!configDir) return '';

  const filePath = path.resolve(path.join(configDir, CONFIG_FILE));
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  return `${isWin ? `& "${filePath}"` : `bash ${filePath}`}${LINE_ENDING}`;
}

async function saveArgs(args: ChosenArgument[], cardDir?: string, configDir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, configDir);
}

async function readArgs(cardDir?: string, configDir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs, configDir);
}

async function checkInstalled(pty: any): Promise<boolean> {
  return new Promise(resolve => {
    const shell = platform() === 'win32' ? 'powershell.exe' : 'bash';
    const ptyProcess = pty.spawn(shell, [], {});

    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
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
  ipc.handle('isInstalled', () => checkInstalled(ipc.pty));
  ipc.handle('current-version', () => getPipPackageVersion('open-webui', ipc.pty));
}

const openWebUIMainMethods: CardMainMethods = {
  getRunCommands,
  updateAvailable,
  isInstalled,
  mainIpc,
  saveArgs,
  readArgs,
};

export default openWebUIMainMethods;
