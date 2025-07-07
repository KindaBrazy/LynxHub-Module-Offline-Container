import {COMFYUI_ZLUDA_ID} from '../../../Constants';
import {CardMainMethodsInitial, ChosenArgument} from '../../../types';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = 'lynx-user.bat';
const DEFAULT_BATCH_DATA: string =
  '@echo off\n' +
  '\n' +
  'set PYTHON="%~dp0/venv/Scripts/python.exe"\n' +
  'set VENV_DIR=./venv\n' +
  '\n' +
  'set ZLUDA_COMGR_LOG_LEVEL=1\n' +
  '\n' +
  '.\\zluda\\zluda.exe -- %PYTHON% main.py ' +
  '\npause';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], dir?: string) {
  return await utilSaveArgs(args, BAT_FILE_NAME, parseArgsToString, dir);
}

export async function readArgs(dir?: string) {
  return await utilReadArgs(BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs, dir);
}

const ComfyZluda_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(COMFYUI_ZLUDA_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
  };
};

export default ComfyZluda_MM;
