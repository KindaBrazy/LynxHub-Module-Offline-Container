import {CardMainMethods, LynxApiUpdate} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {utilRunCommands} from '../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start-ui.bat' : 'start-ui.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir);
}

async function updateAvailable(lynxApi: LynxApiUpdate) {
  return await lynxApi.isPullAvailable;
}

const nerogarMainMethods: CardMainMethods = {getRunCommands, updateAvailable};

export default nerogarMainMethods;
