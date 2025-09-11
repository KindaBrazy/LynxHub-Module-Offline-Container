import path from 'node:path';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/cross/plugin/ModuleTypes';
import {FLOWISEAI_ID} from '../../../Constants';
import {getCdCommand, isWin} from '../../../Utils/CrossUtils';
import {checkWhich, initBatchFile, LINE_ENDING, utilReadArgs, utilSaveArgs} from '../../../Utils/MainUtils';
import {
  checkNpmPackageUpdate,
  getNpmPackageVersion,
  isNpmPackageInstalled,
  uninstallNpmPackage,
} from '../../../Utils/NpmUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const PACKAGE_NAME = 'flowise';
const CONFIG_FILE = isWin ? 'flowise_config.bat' : 'flowise_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\nnpx flowise start' : '#!/bin/bash\n\nnpx flowise start';

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

async function updateAvailable(utils: MainModuleUtils): Promise<boolean> {
  const available = await checkNpmPackageUpdate(FLOWISEAI_ID, PACKAGE_NAME, utils);
  if (available) {
    utils.storage.set('update-available-version-flowise', available);
    return true;
  }

  utils.storage.set('update-available-version-flowise', undefined);
  return false;
}

async function isInstalled(utils: MainModuleUtils): Promise<boolean> {
  return isNpmPackageInstalled(FLOWISEAI_ID, PACKAGE_NAME, utils);
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_flowise_installed', () => isNpmPackageInstalled(FLOWISEAI_ID, PACKAGE_NAME, utils));
  utils.ipc.handle('current_flowise_version', () => getNpmPackageVersion(FLOWISEAI_ID, PACKAGE_NAME, utils));
  utils.ipc.handle('is_npm_available', () => checkWhich('npm'));
}

const Flow_MM: CardMainMethodsInitial = utils => {
  const configDir = utils.getConfigDir();

  return {
    updateAvailable: () => updateAvailable(utils),
    getRunCommands: () => getRunCommands(configDir),
    mainIpc: () => mainIpc(utils),
    isInstalled: () => isInstalled(utils),
    saveArgs: args => saveArgs(args, configDir),
    readArgs: () => readArgs(configDir),
    uninstall: () => uninstallNpmPackage(FLOWISEAI_ID, PACKAGE_NAME, utils),
  };
};

export default Flow_MM;
