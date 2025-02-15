import {CardMainMethods, ChosenArgument} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall webui.bat' : '#!/bin/bash\n\nbash ./webui.sh';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], cardDir?: string) {
  return await utilSaveArgs(args, BAT_FILE_NAME, parseArgsToString, cardDir);
}

export async function readArgs(cardDir?: string) {
  return await utilReadArgs(BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs, cardDir);
}

const Vlad_MM: CardMainMethods = {getRunCommands, readArgs, saveArgs};

export default Vlad_MM;
