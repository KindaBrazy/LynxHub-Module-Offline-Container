import {exec} from 'node:child_process';
import {platform} from 'node:os';

import {compare} from 'semver';

import {CardMainMethods, ChosenArgument, MainIpcTypes} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {getLatestPipPackageVersion, getPipPackageVersion} from './MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const LINE_ENDING = platform() === 'win32' ? '\r' : '\n';
const CONFIG_FILE = isWin ? 'open-webui.bat' : 'open-webui.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nopen-webui serve' : '#!/bin/bash\n\nopen-webui serve';

async function getRunCommands(): Promise<string | string[]> {
  return `open-webui serve ${LINE_ENDING}`;
}

async function saveArgs(args: ChosenArgument[], cardDir?: string, configDir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, configDir);
}

async function readArgs(cardDir?: string, configDir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs, configDir);
}

async function isInstalled(): Promise<boolean> {
  return new Promise(resolve => {
    exec('pip show open-webui', (error, stdout, stderr) => {
      if (error) {
        resolve(false);
      } else if (stderr) {
        resolve(false);
      } else if (stdout) {
        resolve(stdout.includes('Version:'));
      } else {
        resolve(false);
      }
    });
  });
}

async function updateAvailable(): Promise<boolean> {
  try {
    const currentVersion = await getPipPackageVersion('open-webui');
    const latestVersion = await getLatestPipPackageVersion('open-webui');
    if (currentVersion && latestVersion) return compare(currentVersion, latestVersion) === -1;
  } catch (err) {
    console.error('Error checking update for open-webui', err);
    return false;
  }

  return false;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('isInstalled', isInstalled);
  ipc.handle('current-version', () => getPipPackageVersion('open-webui'));
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
