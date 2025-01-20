import {CardRendererMethods, InstallationStepper} from '../../../types';
import {isWin} from '../../../Utils/CrossUtils';
import {catchAddress} from '../../../Utils/RendererUtils';

const title = 'LoLLMs';
const url = 'https://github.com/ParisNeo/lollms-webui';

export function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps([title, 'Clone', 'Install', 'Requirements', 'Finish']);
  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.cloneRepository(url).then(dir => {
        stepper.nextStep();
        stepper.executeTerminalCommands('git submodule update --init --recursive', dir).then(() => {
          stepper.executeTerminalCommands('pip install -e .', `${dir}${isWin ? '\\' : '/'}lollms_core`).then(() => {
            stepper.executeTerminalCommands('pip install -r requirements.txt', dir).then(() => {
              stepper.setInstalled(dir);
              stepper.showFinalStep(
                'success',
                `${title} installation complete!`,
                `All installation steps completed successfully. Your ${title} environment is now ready for use.`,
              );
            });
          });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, url).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            `${title} located successfully!`,
            `Pre-installed ${title} detected. Installation skipped as your existing setup is ready to use.`,
          );
        } else {
          stepper.showFinalStep(
            'error',
            `Unable to locate ${title}!`,
            `Please ensure you have selected the correct folder containing the ${title} repository.`,
          );
        }
      });
    }
  });
}

const LoLLM_RM: CardRendererMethods = {
  catchAddress,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default LoLLM_RM;
