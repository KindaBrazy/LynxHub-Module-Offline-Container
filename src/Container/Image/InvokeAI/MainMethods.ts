import {compare} from 'semver';

import {CardMainMethods, ChosenArgument, LynxApiUpdate, MainIpcTypes} from '../../../types';
import {extractGitUrl, isWin} from '../../../Utils/CrossUtils';
import {getLatestNonRCReleaseAndAsset, utilReadArgs, utilRunCommands, utilSaveArgs} from '../../../Utils/MainUtils';
import {parseArgsToString, parseStringToArgs} from './RendererMethods';
import {INSTALLED_VERSION_KEY} from './Utils/CrossConstants';
import {ReleaseInfo} from './Utils/CrossTypes';

const BAT_FILE_NAME = isWin ? 'lynx-user.bat' : 'lynx-user.sh';
const DEFAULT_BATCH_DATA: string = isWin ? '@echo off\n\ncall invoke.bat' : '#!/bin/bash\n\nbash ./invoke.sh';

async function getRunCommands(dir?: string): Promise<string | string[]> {
  return await utilRunCommands(BAT_FILE_NAME, dir, DEFAULT_BATCH_DATA);
}

export async function saveArgs(args: ChosenArgument[], cardDir?: string) {
  return await utilSaveArgs(args, BAT_FILE_NAME, parseArgsToString, cardDir);
}

export async function readArgs(cardDir?: string) {
  return await utilReadArgs(BAT_FILE_NAME, DEFAULT_BATCH_DATA, parseStringToArgs, cardDir);
}

async function getLatest(): Promise<ReleaseInfo | null> {
  const {owner, repo} = extractGitUrl('https://github.com/invoke-ai/InvokeAI');
  return await getLatestNonRCReleaseAndAsset(owner, repo, 'InvokeAI-installer');
}

async function updateAvailable(lynxApi: LynxApiUpdate) {
  const installedVersion: string | undefined = lynxApi.storage.get(INSTALLED_VERSION_KEY);
  if (!installedVersion) return false;

  const latestVersion = await getLatest();

  if (!latestVersion) return false;

  return compare(installedVersion, latestVersion.version) === -1;
}

function mainIpc(ipc: MainIpcTypes) {
  ipc.handle('get-latest', getLatest);
}

const invokeMainMethods: CardMainMethods = {getRunCommands, updateAvailable, mainIpc, saveArgs, readArgs};

export default invokeMainMethods;
