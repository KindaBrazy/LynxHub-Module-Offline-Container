import {CardRendererMethods, InstallationStepper} from '../../types';
import {isWin} from '../../Utils/CrossUtils';

const ONETRAINER_URL = 'https://github.com/Nerogar/OneTrainer';

export function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['OneTrainer', 'Clone', 'Install', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.cloneRepository(ONETRAINER_URL).then(dir => {
        stepper.nextStep();
        stepper.runTerminalScript(dir, isWin ? 'install.bat' : 'install.sh').then(() => {
          stepper.setInstalled(dir);
          stepper.showFinalStep(
            'success',
            'OneTrainer installation complete!',
            'All installation steps completed successfully. Your OneTrainer environment is now ready for use.',
          );
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, ONETRAINER_URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            'OneTrainer located successfully!',
            'Pre-installed OneTrainer detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          stepper.showFinalStep(
            'error',
            'Unable to locate OneTrainer!',
            'Please ensure you have selected the correct folder containing the OneTrainer repository.',
          );
        }
      });
    }
  });
}

function startUpdate(stepper: InstallationStepper, dir: string) {
  stepper.initialSteps(['Update', 'Finish']);
  stepper.runTerminalScript(dir, isWin ? 'update.bat' : 'update.sh').then(() => {
    stepper.showFinalStep('success', 'OneTrainer Updated Successfully!');
  });
}

const nerogarRendererMethods: CardRendererMethods = {
  manager: {
    startInstall,
    updater: {updateType: 'stepper', startUpdate},
  },
};

export default nerogarRendererMethods;
