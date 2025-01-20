import {CardMainMethods, LynxApiUpdate} from '../../../types';
import {LINE_ENDING} from '../../../Utils/MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return `python app.py ${LINE_ENDING}`;
}

async function updateAvailable(lynxApi: LynxApiUpdate) {
  return await lynxApi.isPullAvailable;
}

const LoLLM_MM: CardMainMethods = {getRunCommands, updateAvailable};

export default LoLLM_MM;
