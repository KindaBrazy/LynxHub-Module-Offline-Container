import {LoLLMS_ID} from '../../../Constants';
import {CardMainMethodsInitial, MainModuleUtils} from '../../../types';
import {LINE_ENDING} from '../../../Utils/MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return `python app.py ${LINE_ENDING}`;
}

async function updateAvailable(utils: MainModuleUtils, installDir: string | undefined) {
  if (!installDir) return false;

  return await utils.isPullAvailable(installDir);
}

const LoLLM_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(LoLLMS_ID);

  return {getRunCommands, updateAvailable: () => updateAvailable(utils, installDir)};
};

export default LoLLM_MM;
