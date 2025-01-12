import {CardInfoApi, CardInfoCallback, CardRendererMethods, InstallationStepper} from '../../../types';
import {CardInfo, catchAddress, GitInstaller} from '../../../Utils/RendererUtils';
import {fetchExtensionList, parseArgsToString, parseStringToArgs} from '../SD (AUTOMATIC1111)/SharedRenderer';

const SdAMD_URL = 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu';

function startInstall(stepper: InstallationStepper) {
  GitInstaller('Stable Diffusion AMDGPU', SdAMD_URL, stepper);
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(SdAMD_URL, '/extensions', api, callback);
}

const SD_AMD_RM: CardRendererMethods = {
  catchAddress,
  fetchExtensionList,
  parseArgsToString,
  parseStringToArgs,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default SD_AMD_RM;
