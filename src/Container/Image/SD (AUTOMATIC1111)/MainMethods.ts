import {CardMainMethodsInitial, ChosenArgument} from '../../../../../src/cross/types/plugins/modules';
import {A1_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './SharedRenderer';

const CONFIG_FILE = isWin ? 'webui-user.bat' : 'webui-user.sh';
const EXEC_FILE = isWin ? 'webui-user.bat' : 'webui.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall webui.bat' : '#!/bin/bash\n\n';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(EXEC_FILE, dir, DEFAULT_BATCH_DATA);
}

async function saveArgs(args: ChosenArgument[], dir?: string) {
  return await utilSaveArgs(args, CONFIG_FILE, parseArgsToString, dir);
}

export async function readArgs(dir?: string) {
  return await utilReadArgs(CONFIG_FILE, DEFAULT_BATCH_DATA, parseStringToArgs, dir);
}

const A1_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(A1_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
    readArgs: () => readArgs(installDir),
    saveArgs: args => saveArgs(args, installDir),
  };
};

export default A1_MM;
