import {CardMainMethodsInitial} from '../../../../../src/cross/types/plugins/module';
import {AG_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE = isWin ? 'run-applio.bat' : 'run-applio.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE, dir);
}

const Applio_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(AG_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
  };
};

export default Applio_MM;
