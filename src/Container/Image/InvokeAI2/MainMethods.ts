import path from 'node:path';

import {compare} from 'semver';

import {CardMainMethods, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {extractGitUrl} from '../../../Utils/CrossUtils';
import {
  checkWhich,
  getLatestPipPackageVersion,
  getPipPackageVersionCustom,
  getVenvPythonPath,
  isVenvDirectory,
  LINE_ENDING,
} from '../../../Utils/MainUtils';
import {invokeGetLatestReleases, invokeValidateInstallation} from './MainUtils';
import {Invoke_Command_ActivateVenv, INVOKEAI_INSTALL_DIR_KEY, INVOKEAI_UPDATE_AVAILABLE_KEY} from './Utils_Constants';

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

async function updateAvailable(lynxApi: LynxApiUpdate): Promise<boolean> {
  const dir = lynxApi.storage.get(INVOKEAI_INSTALL_DIR_KEY) as string | undefined;
  if (!dir) return false;

  const venvDir = path.join(dir, '.venv');

  const isDir = isVenvDirectory(dir);
  const isVenvDir = isVenvDirectory(venvDir);

  if (!isDir && !isVenvDir) return false;

  const pythonExe = getVenvPythonPath(isDir ? dir : venvDir);

  const currentVersion = await getPipPackageVersionCustom(pythonExe, 'invokeai');
  const latestVersion = await getLatestPipPackageVersion('invokeai');

  if (currentVersion && latestVersion && compare(currentVersion, latestVersion) === -1) {
    lynxApi.storage.set(INVOKEAI_UPDATE_AVAILABLE_KEY, latestVersion);
    return true;
  }

  lynxApi.storage.set(INVOKEAI_UPDATE_AVAILABLE_KEY, undefined);
  return false;
}

const Invoke_MM: CardMainMethods = {getRunCommands, updateAvailable, mainIpc};

export default Invoke_MM;
