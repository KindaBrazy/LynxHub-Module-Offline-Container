import {TG_ID} from '../../../Constants';
import {CardMainMethodsInitial, ChosenArgument} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin
  ? '@echo off\n\ncall start_windows.bat'
  : '#!/bin/bash\n\nbash ./start_linux.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], dir?: string) {
  return await utilSaveArgs(args, BAT_FILE_NAME, parseArgsToString, dir);
}

async function readArgs(dir?: string) {
  return await utilReadArgs(BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs, dir);
}

const Ooba_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(TG_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
  };
};

export default Ooba_MM;
