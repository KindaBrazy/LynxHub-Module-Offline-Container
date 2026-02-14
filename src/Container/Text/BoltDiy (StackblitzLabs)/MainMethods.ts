import {CardMainMethodsInitial, MainModuleUtils} from '../../../../../src/common/types/plugins/modules';
import {BOLT_DIY_ID} from '../../../Constants';
import {checkWhich, isGitTypeInstalled, LINE_ENDING} from '../../../Utils/MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return `npm run dev ${LINE_ENDING}`;
}

function mainIpc(utils: MainModuleUtils) {
  utils.ipc.handle('is_nodejs_installed', () => checkWhich('node'));
}

async function updateAvailable(utils: MainModuleUtils, dir?: string) {
  if (!dir) return false;
  return await utils.isPullAvailable(dir);
}

const BOLT_DIY_MM: CardMainMethodsInitial = utils => {
  const installDir = utils.getInstallDir(BOLT_DIY_ID);

  return {
    getRunCommands,
    mainIpc: () => mainIpc(utils),
    updateAvailable: () => updateAvailable(utils, installDir),
    isInstalled: () => isGitTypeInstalled(installDir, 'https://github.com/stackblitz-labs/bolt.diy', ['package.json']),
  };
};

export default BOLT_DIY_MM;
