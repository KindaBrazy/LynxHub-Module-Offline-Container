import path from 'node:path';

import fs from 'graceful-fs';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/cross/plugin/ModuleTypes';
import {GeminiCli_ID} from '../../../Constants';
import {getCdCommand, isWin} from '../../../Utils/CrossUtils';
import {initBatchFile, LINE_ENDING} from '../../../Utils/MainUtils';
import {
  checkNpmPackageUpdate,
  getNpmPackageVersion,
  isNpmPackageInstalled,
  uninstallNpmPackage,
} from '../../../Utils/NpmUtils';
import {parseArgsToFiles, parseFilesToArgs} from './RendererMethods';

const PACKAGE_NAME = '@google/gemini-cli';
const CONFIG_FILE = isWin ? 'geminiCli_config.bat' : 'geminiCli_config.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ngemini' : '#!/bin/bash\n\ngemini';

async function getRunCommands(configDir?: string): Promise<string | string[]> {
  if (!configDir) return '';

  const filePath = path.resolve(path.join(configDir, CONFIG_FILE));
  await initBatchFile(filePath, DEFAULT_BATCH_DATA);

  return [getCdCommand(configDir) + LINE_ENDING, `${isWin ? `& "${filePath}"` : `bash ${filePath}`}${LINE_ENDING}`];
}

async function saveArgs(args: ChosenArgument[], configDir?: string) {
  if (!configDir) return;

  const {scriptData, settingsData} = parseArgsToFiles(args);

  const scriptPath = path.join(configDir, CONFIG_FILE);
  const settingsPath = args.find(arg => arg.name === 'Settings File Location')?.value;

  await fs.promises.writeFile(scriptPath, scriptData);

  if (settingsPath) {
    try {
      await fs.promises.writeFile(settingsPath, settingsData);
    } catch (e) {
      console.error('Error saving settings.json file for gemini-cli', e);
    }
  }
}

async function readArgs(configDir?: string) {
  if (!configDir) return [];

  const scriptPath = path.join(configDir, CONFIG_FILE);

  await initBatchFile(scriptPath, DEFAULT_BATCH_DATA);

  const scriptData = await fs.promises.readFile(scriptPath, 'utf-8');

  return parseFilesToArgs(scriptData, '');
}

async function isInstalled(utils: MainModuleUtils): Promise<boolean> {
  return isNpmPackageInstalled(GeminiCli_ID, PACKAGE_NAME, utils);
}

async function updateAvailable(utils: MainModuleUtils): Promise<boolean> {
  const available = await checkNpmPackageUpdate(GeminiCli_ID, PACKAGE_NAME, utils);
  if (available) {
    utils.storage.set('update-available-version-geminiCli', available);
    return true;
  }

  utils.storage.set('update-available-version-geminiCli', undefined);
  return false;
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_geminiCli_installed', () => isNpmPackageInstalled(GeminiCli_ID, PACKAGE_NAME, utils));
  utils.ipc.handle('current_geminiCli_version', () => getNpmPackageVersion(GeminiCli_ID, PACKAGE_NAME, utils));
}

const GeminiCli_MM: CardMainMethodsInitial = utils => {
  const configDir = utils.getConfigDir();

  return {
    mainIpc: () => mainIpc(utils),
    getRunCommands: () => getRunCommands(configDir),
    isInstalled: () => isInstalled(utils),
    saveArgs: args => saveArgs(args, configDir),
    readArgs: () => readArgs(configDir),
    updateAvailable: () => updateAvailable(utils),
    uninstall: () => uninstallNpmPackage(GeminiCli_ID, PACKAGE_NAME, utils),
  };
};

export default GeminiCli_MM;
