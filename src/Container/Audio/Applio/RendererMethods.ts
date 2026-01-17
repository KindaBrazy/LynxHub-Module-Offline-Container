import {
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  InstallationStepper,
} from '../../../../../src/cross/types/plugins/module';
import {isWin} from '../../../Utils/CrossUtils';
import {CardInfo, catchAddress} from '../../../Utils/RendererUtils';

const URL: string = 'https://github.com/IAHispano/Applio';

function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['Applio', 'Clone', 'Install', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep().then(() => {
        stepper.cloneRepository(URL).then(dir => {
          stepper.nextStep().then(() => {
            const installCmd = isWin ? '.\\run-install.bat' : 'sh run-install.sh';
            stepper.executeTerminalCommands(installCmd, dir).then(() => {
              stepper.setInstalled(dir);
              stepper.showFinalStep(
                'success',
                'Applio Installation Complete!',
                'Applio has been successfully installed. You can now start generating audio.',
              );
            });
          });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep('success', 'Applio Found!', 'Existing Applio installation located.');
        } else {
          stepper.showFinalStep(
            'error',
            'Invalid Applio Directory',
            'The selected directory does not appear to contain a valid Applio installation.',
          );
        }
      });
    }
  });
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(URL, undefined, api, callback);
}

const APPLIO_RM: CardRendererMethods = {
  catchAddress,
  cardInfo,
  manager: {
    startInstall,
    updater: {updateType: 'git'},
  },
};

export default APPLIO_RM;
