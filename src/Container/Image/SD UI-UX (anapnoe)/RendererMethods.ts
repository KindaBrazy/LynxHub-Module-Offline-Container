import {
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  InstallationStepper,
} from '../../../../../src/common/types/plugins/modules';
import {CardInfo, catchAddress, GitInstaller} from '../../../Utils/RendererUtils';
import {fetchExtensionList, parseArgsToString, parseStringToArgs} from '../SD (AUTOMATIC1111)/SharedRenderer';

const SdAMD_URL = 'https://github.com/anapnoe/stable-diffusion-webui-ux';

function startInstall(stepper: InstallationStepper) {
  GitInstaller('SD UI-UX', SdAMD_URL, stepper);
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(SdAMD_URL, '/extensions', api, callback);
}

const SD_UIUX_RM: CardRendererMethods = {
  catchAddress,
  fetchExtensionList,
  parseArgsToString,
  parseStringToArgs,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default SD_UIUX_RM;
