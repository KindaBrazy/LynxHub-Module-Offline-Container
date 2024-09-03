import {CardMainMethods} from '../../types';
import {isWin} from '../../Utils/CrossUtils';
import {utilRunCommands} from '../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start_tts_webui.bat' : 'start_tts_webui.sh';

async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir);
}

const rsxMainMethods: CardMainMethods = {getRunCommands};

export default rsxMainMethods;
