import {CardMainMethods, ChosenArgument} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'webui-user.bat' : 'webui-user.sh';
const EXEC_FILE = isWin ? 'webui-user.bat' : 'webui.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall webui.bat' : '#!/bin/bash\n\n';

export async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(EXEC_FILE, dir, DEFAULT_BATCH_DATA);
}

export async function saveArgs(cardDir: string, args: ChosenArgument[]) {
  return await utilSaveArgs(cardDir, args, CONFIG_FILE, parseArgsToString);
}

export async function readArgs(cardDir: string) {
  return await utilReadArgs(cardDir, CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs);
}

const a1MainMethods: CardMainMethods = {getRunCommands, readArgs, saveArgs};

export default a1MainMethods;
