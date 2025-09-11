import path from 'node:path';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/cross/plugin/ModuleTypes';
import {N8N_ID} from '../../../Constants';
import {getCdCommand, isWin} from '../../../Utils/CrossUtils';
import {initBatchFile, LINE_ENDING, utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {
  checkNpmPackageUpdate,
  getNpmPackageVersion,
  isNpmPackageInstalled,
  uninstallNpmPackage,
} from '../../../Utils/NpmUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const PACKAGE_NAME = 'n8n';
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

async function isInstalled(utils: MainModuleUtils): Promise<boolean> {
  return isNpmPackageInstalled(N8N_ID, PACKAGE_NAME, utils);
}

async function updateAvailable(utils: MainModuleUtils): Promise<boolean> {
  const available = await checkNpmPackageUpdate(N8N_ID, PACKAGE_NAME, utils);
  if (available) {
    utils.storage.set('update-available-version-n8n', available);
    return true;
  }

  utils.storage.set('update-available-version-n8n', undefined);
  return false;
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_n8n_installed', () => isNpmPackageInstalled(N8N_ID, PACKAGE_NAME, utils));
  utils.ipc.handle('current_n8n_version', () => getNpmPackageVersion(N8N_ID, PACKAGE_NAME, utils));
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
    uninstall: () => uninstallNpmPackage(N8N_ID, PACKAGE_NAME, utils),
  };
};

export default N8N_MM;
