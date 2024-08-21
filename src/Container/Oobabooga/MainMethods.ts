import {CardMainMethods, ChosenArgument} from '../../types';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = 'lynx-user.bat';
const DEFAULT_BATCH_DATA: string = '@echo off\n\ncall start_windows.bat';

async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(cardDir: string, args: ChosenArgument[]) {
  return await utilSaveArgs(cardDir, args, BAT_FILE_NAME, parseArgsToString);
}

async function readArgs(cardDir: string) {
  return await utilReadArgs(cardDir, BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs);
}

const oobaMainMethods: CardMainMethods = {getRunCommands, readArgs, saveArgs};

export default oobaMainMethods;
