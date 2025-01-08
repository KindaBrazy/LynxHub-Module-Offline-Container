import {CardMainMethods, ChosenArgument} from '../../types';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../Utils/MainUtils';
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

export async function saveArgs(cardDir: string, args: ChosenArgument[]) {
  return await utilSaveArgs(cardDir, args, BAT_FILE_NAME, parseArgsToString);
}

export async function readArgs(cardDir: string) {
  return await utilReadArgs(cardDir, BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs);
}

const comfyZludaMainMethods: CardMainMethods = {getRunCommands, readArgs, saveArgs};

export default comfyZludaMainMethods;
