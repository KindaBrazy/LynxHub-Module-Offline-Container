import {CardMainMethodsInitial} from '../../../../../src/common/types/plugins/modules';
import {ALLTALK_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {checkFilesExist, isGitRoot, utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start_alltalk.bat' : 'start_alltalk.sh';

export async function getRunCommands(): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME);
}

async function isInstalled(dir: string | undefined) {
  if (!dir) return false;

  const isRepo = await isGitRoot(dir, 'https://github.com/erew123/alltalk_tts');
  if (isRepo) return true;

  return checkFilesExist(dir, [BAT_FILE_NAME]);
}

const Rrew123_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(ALLTALK_ID);

  return {
    getRunCommands: () => getRunCommands(),
    isInstalled: () => isInstalled(installDir),
  };
};

export default Rrew123_MM;
