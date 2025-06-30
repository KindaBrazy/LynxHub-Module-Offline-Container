import {ALLTALK_ID} from '../../../Constants';
import {CardMainMethodsInitial} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\npython script.py' : '#!/bin/bash\n\npython script.py';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

const Rrew123_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(ALLTALK_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
  };
};

export default Rrew123_MM;
