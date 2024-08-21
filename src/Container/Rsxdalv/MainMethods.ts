import {CardMainMethods} from '../../types';
import {utilRunCommands} from '../../Utils/MainUtils';

const BAT_FILE_NAME = 'start_tts_webui.bat';

async function getRunCommands(dir: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir);
}

const rsxMainMethods: CardMainMethods = {getRunCommands};

export default rsxMainMethods;
