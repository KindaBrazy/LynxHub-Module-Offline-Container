import {CardMainMethods, ChosenArgument} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall invoke.bat' : '#!/bin/bash\n\nbash ./invoke.sh';

async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

export async function saveArgs(cardDir: string, args: ChosenArgument[]) {
  return await utilSaveArgs(cardDir, args, BAT_FILE_NAME, parseArgsToString);
}

export async function readArgs(cardDir: string) {
  return await utilReadArgs(cardDir, BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs);
}

const invokeMainMethods: CardMainMethods = {getRunCommands};

export default invokeMainMethods;
