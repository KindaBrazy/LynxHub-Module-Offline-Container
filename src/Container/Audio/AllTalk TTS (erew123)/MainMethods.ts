import {CardMainMethods} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\npython script.py' : '#!/bin/bash\n\npython script.py';

export async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

const erew123MainMethods: CardMainMethods = {getRunCommands};

export default erew123MainMethods;
