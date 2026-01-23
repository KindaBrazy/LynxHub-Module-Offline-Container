import {CardMainMethodsInitial} from '../../../../../src/common/types/plugins/modules';
import {TTS_ID} from '../../../Constants';
import {isWin} from '../../../Utils/CrossUtils';
import {utilRunCommands} from '../../../Utils/MainUtils';

const BAT_FILE_NAME = isWin ? 'start_tts_webui.bat' : 'start_tts_webui.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir);
}

const Rsx_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(TTS_ID);

  return {
    getRunCommands: () => getRunCommands(installDir),
  };
};

export default Rsx_MM;
