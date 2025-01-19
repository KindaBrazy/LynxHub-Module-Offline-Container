import {CardMainMethods, ChosenArgument} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const CONFIG_FILE = isWin ? 'webui-user.bat' : 'webui-user.sh';
const EXEC_FILE = isWin ? 'webui-user.bat' : 'webui.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall webui.bat' : '#!/bin/bash\n\n';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(EXEC_FILE, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], cardDir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, cardDir);
}

export async function readArgs(cardDir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs, cardDir);
}

const lsMainMethods: CardMainMethods = {getRunCommands, readArgs, saveArgs};

export default lsMainMethods;
