import path from 'node:path';

import {CardMainMethods, MainIpcTypes} from '../../../types';
import {extractGitUrl} from '../../../Utils/CrossUtils';
import {checkWhich, isVenvDirectory} from '../../../Utils/MainUtils';
import {invokeGetLatestReleases, invokeValidateInstallation} from './MainUtils';

async function getRunCommands(): Promise<string | string[]> {
  return '';
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
