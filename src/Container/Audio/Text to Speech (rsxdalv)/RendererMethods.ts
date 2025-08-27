import {
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  InstallationStepper,
} from '../../../../../src/cross/plugin/ModuleTypes';
import {CardInfo, GitInstaller} from '../../../Utils/RendererUtils';

const URL = 'https://github.com/rsxdalv/tts-generation-webui';

function catchAddress(input: string): string | undefined {
  if (input.toLowerCase().includes('Installed Packages'.toLowerCase())) {
    return 'http://127.0.0.1:7770';
  } else {
    return undefined;
  }
}

function startInstall(stepper: InstallationStepper) {
  GitInstaller('Text to Speech', URL, stepper);
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(URL, '/extensions', api, callback);
}

const TTS_RM: CardRendererMethods = {
  catchAddress,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};
export default TTS_RM;
