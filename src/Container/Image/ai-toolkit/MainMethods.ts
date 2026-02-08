import path from 'node:path';

import fs from 'graceful-fs';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/common/types/plugins/modules';
import {AITOOLKIT_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {checkWhich, utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin
  ? '@echo off\n\nset NODE_ENV=\n\ncd ui\nnpm run build_and_start'
  : '#!/bin/bash\n\nexport NODE_ENV=""\n\ncd ui\nnpm run build_and_start';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], dir?: string) {
  return await utilSaveArgs(args, BAT_FILE_NAME, parseArgsToString, dir);
}

export async function readArgs(dir?: string) {
  return await utilReadArgs(BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs, dir);
}

export async function isInstalled(dir?: string): Promise<boolean> {
  if (!dir) return false;

  try {
    // Check if the ui folder and run.py file exist
    const uiFolder = path.join(dir, 'ui');
    const runPy = path.join(dir, 'run.py');
    const toolkitFolder = path.join(dir, 'toolkit');

    const uiFolderExists = await fs.promises
      .access(uiFolder)
      .then(() => true)
      .catch(() => false);
    const runPyExists = await fs.promises
      .access(runPy)
      .then(() => true)
      .catch(() => false);
    const toolkitFolderExists = await fs.promises
      .access(toolkitFolder)
      .then(() => true)
      .catch(() => false);

    return uiFolderExists && runPyExists && toolkitFolderExists;
  } catch (error) {
    console.error('Error checking AI Toolkit installation:', error);
    return false;
  }
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_npm_available_at', () => checkWhich('npm'));
}

const AIToolkit_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(AITOOLKIT_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
    isInstalled: () => isInstalled(installDir),
    mainIpc: () => mainIpc(utils),
  };
};

export default AIToolkit_MM;
