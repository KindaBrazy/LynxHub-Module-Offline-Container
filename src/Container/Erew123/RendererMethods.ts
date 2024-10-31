import {CardRendererMethods, InstallationStepper} from '../../types';
import {isWin} from '../../Utils/CrossUtils';

const AllTalk_URL = 'https://github.com/erew123/alltalk_tts';

export function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['AllTalk TTS', 'Clone', 'Install', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.cloneRepository(AllTalk_URL).then(dir => {
        stepper.nextStep();
        stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
          stepper.setInstalled(dir);
          stepper.showFinalStep(
            'success',
            'AllTalk TTS installation complete!',
            'All installation steps completed successfully. Your AllTalk TTS environment is now ready for use.',
          );
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, AllTalk_URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            'AllTalk TTS located successfully!',
            'Pre-installed AllTalk TTS detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          stepper.showFinalStep(
            'error',
            'Unable to locate AllTalk TTS!',
            'Please ensure you have selected the correct folder containing the AllTalk TTS repository.',
          );
        }
      });
    }
  });
}

function startUpdate(stepper: InstallationStepper, dir: string) {
  stepper.initialSteps(['Pull Changes', 'Update', 'Finish']);
  stepper.executeTerminalCommands('git pull', dir).then(() => {
    stepper.nextStep();
    stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
      stepper.showFinalStep('success', 'AllTalk TTS Updated Successfully!');
    });
  });
}

const erew123RendererMethods: CardRendererMethods = {
  manager: {
    startInstall,
    updater: {updateType: 'stepper', startUpdate},
  },
};

export default erew123RendererMethods;
