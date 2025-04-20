import path from 'node:path';

import {CardMainMethods, MainIpcTypes} from '../../../types';
import {extractGitUrl} from '../../../Utils/CrossUtils';
import {checkWhich, isVenvDirectory, LINE_ENDING} from '../../../Utils/MainUtils';
import {invokeGetLatestReleases, invokeValidateInstallation} from './MainUtils';
import {Invoke_Command_ActivateVenv} from './Utils_Constants';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return [`${Invoke_Command_ActivateVenv}${LINE_ENDING}`, `invokeai-web --root ${dir}${LINE_ENDING}`];
}

async function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('is_uv_installed', () => {
    return checkWhich('uv');
  });
  ipc.handle('invoke_latest_versions', () => {
    const {owner, repo} = extractGitUrl('https://github.com/invoke-ai/InvokeAI');
    return invokeGetLatestReleases(owner, repo);
  });
  ipc.handle('validate_install_dir', (_, dir: string) => {
    const venvDir = path.join(dir, '.venv');

    const isDir = isVenvDirectory(dir);
    const isVenvDir = isVenvDirectory(venvDir);

    if (isDir) {
      return invokeValidateInstallation(dir);
    } else if (isVenvDir) {
      return invokeValidateInstallation(venvDir);
    }

    return false;
  });
}

const Invoke_MM: CardMainMethods = {getRunCommands, mainIpc};

export default Invoke_MM;
