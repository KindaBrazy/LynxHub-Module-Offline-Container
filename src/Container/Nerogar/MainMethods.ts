import {CardMainMethods} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {utilRunCommands} from '../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start-ui.bat' : 'start-ui.sh';

export async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir);
}

const nerogarMethods: CardMainMethods = {getRunCommands};

export default nerogarMethods;
