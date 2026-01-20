import {CardMainMethodsInitial, MainModuleUtils} from '../../../../../src/cross/types/plugins/modules';
import {LoLLMS_ID} from '../../../Constants';
import {LINE_ENDING} from '../../../Utils/MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return `python app.py ${LINE_ENDING}`;
}

async function updateAvailable(utils: MainModuleUtils, dir?: string) {
  if (!dir) return false;

  return await utils.isPullAvailable(dir);
}

const LoLLM_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(LoLLMS_ID);

  return {getRunCommands, updateAvailable: () => updateAvailable(utils, installDir)};
};

export default LoLLM_MM;
