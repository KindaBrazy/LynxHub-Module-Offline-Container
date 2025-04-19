import path from 'node:path';

import {compare} from 'semver';
import treeKill from 'tree-kill';

import {CardMainMethods, ChosenArgument, LynxApiUninstall, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {getCdCommand, isWin, removeAnsi} from '../../../Utils/CrossUtils';
import {
  checkWhich,
  determineShell,
  initBatchFile,
  LINE_ENDING,
  utilReadArgs,
  utilSaveArgs,
} from '../../../Utils/MainUtils';
import {getLatestPipPackageVersion, getPipPackageVersion} from './MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'open-webui_config.bat' : 'open-webui_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nopen-webui serve' : '#!/bin/bash\n\nopen-webui serve';

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

const isInstalled = () => checkWhich('open-webui');

async function updateAvailable(lynxApi: LynxApiUpdate): Promise<boolean> {
  try {
    const currentVersion = await getPipPackageVersion('open-webui', lynxApi.pty);
    const latestVersion = await getLatestPipPackageVersion('open-webui');
    if (currentVersion && latestVersion && compare(currentVersion, latestVersion) === -1) {
      lynxApi.storage.set('update-available-version-openwebui', latestVersion);
      return true;
    }
  } catch (err) {
    console.error('Error checking update for open-webui', err);
    lynxApi.storage.set('update-available-version-openwebui', undefined);
    return false;
  }

  lynxApi.storage.set('update-available-version-openwebui', undefined);
  return false;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_openwebui_installed', () => isInstalled());
  ipc.handle('current_openwebui_version', () => getPipPackageVersion('open-webui', ipc.pty));
}

async function uninstall(api: LynxApiUninstall): Promise<void> {
  return new Promise((resolve, reject) => {
    const ptyProcess = api.pty.spawn(determineShell(), [], {});
    let output = '';

    ptyProcess.onData((data: any) => {
      output += data;
    });

    ptyProcess.onExit(() => {
      if (ptyProcess.pid) {
        treeKill(ptyProcess.pid);
        ptyProcess.kill();
      }

      const cleanOutput = removeAnsi(output);
      const lines = cleanOutput.split(LINE_ENDING);

      const successRegex = /Successfully\s+uninstalled\s+open-webui/i;
      const proceedRegex = /Proceed\s+\(Y\/n\)\?\s*$/i;
      const uninstallingRegex = /Uninstalling\s+open-webui/i;

      const hasSuccess =
        lines.some(line => successRegex.test(line)) ||
        (lines.some(line => uninstallingRegex.test(line)) && lines.some(line => proceedRegex.test(line)));

      if (hasSuccess) {
        resolve();
      } else {
        reject(new Error(`Error uninstalling open-webui.`));
      }
    });

    ptyProcess.write(`pip uninstall -y open-webui${LINE_ENDING}`);
    ptyProcess.write(`exit${LINE_ENDING}`);
  });
}

const OpenWebUI_MM: CardMainMethods = {
  getRunCommands,
  updateAvailable,
  isInstalled,
  mainIpc,
  saveArgs,
  readArgs,
  uninstall,
};

export default OpenWebUI_MM;
