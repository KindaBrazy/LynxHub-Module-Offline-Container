import path from 'node:path';

import fs from 'graceful-fs';

import {CardMainMethodsInitial, ChosenArgument, MainModuleUtils} from '../../../../../src/common/types/plugins/modules';
import {COMFYUI_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {checkWhich, utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\npython main.py' : '#!/bin/bash\n\npython main.py';

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
    // Check if the comfy folder and main.py file exist
    const comfyFolder = path.join(dir, 'comfy');
    const mainPy = path.join(dir, 'main.py');

    const comfyFolderExists = await fs.promises
      .access(comfyFolder)
      .then(() => true)
      .catch(() => false);
    const mainPyExists = await fs.promises
      .access(mainPy)
      .then(() => true)
      .catch(() => false);

    return comfyFolderExists && mainPyExists;
  } catch (error) {
    console.error('Error checking ComfyUI installation:', error);
    return false;
  }
}

function mainIpc(ipc: MainModuleUtils['ipc']) {
  ipc.handle('Comfy_isCondaInstalled', async () => checkWhich('conda'));
}

const Comfy_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(COMFYUI_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
    isInstalled: () => isInstalled(installDir),
    mainIpc: () => mainIpc(utils.ipc),
  };
};

export default Comfy_MM;
