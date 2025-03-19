import {CardMainMethods, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {checkWhich, LINE_ENDING} from '../../../Utils/MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return `npm run dev ${LINE_ENDING}`;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_nodejs_installed', () => checkWhich('node'));
}

async function updateAvailable(lynxApi: LynxApiUpdate) {
  return await lynxApi.isPullAvailable;
}

const BOLT_DIY_MM: CardMainMethods = {getRunCommands, mainIpc, updateAvailable};

export default BOLT_DIY_MM;
