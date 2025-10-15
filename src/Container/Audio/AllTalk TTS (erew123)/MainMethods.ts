import {CardMainMethodsInitial} from '../../../../../src/cross/plugin/ModuleTypes';
import {isWin} from '../../../Utils/CrossUtils';
import {utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start_alltalk.bat' : 'start_alltalk.sh';

export async function getRunCommands(): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME);
}

const Rrew123_MM: CardMainMethodsInitial = () => {
  return {
    getRunCommands: () => getRunCommands(),
  };
};

export default Rrew123_MM;
