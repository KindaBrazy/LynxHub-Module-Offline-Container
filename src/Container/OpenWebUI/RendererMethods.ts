import {CardRendererMethods, InstallationStepper} from '../../types';
import {catchAddress} from '../../Utils/RendererUtils';

function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['Getting Started', 'Detect Existing', 'Install Open WebUI', 'All Done!']);
  stepper.starterStep({disableSelectDir: true}).then(() => {
    stepper.nextStep();
    stepper.progressBar(true, 'Checking for existing Open WebUI installation...');
    stepper.ipc.invoke('isInstalled').then((isInstalled: boolean) => {
      if (isInstalled) {
        stepper.setInstalled();
        stepper.showFinalStep('success', "You're All Set!", "Open WebUI is already installed. You're good to go!");
      } else {
        stepper.nextStep();
        stepper.executeTerminalCommands('pip install open-webui').then(() => {
          stepper.setInstalled();
          stepper.showFinalStep('success', 'Installation Complete!', 'Your Open WebUI environment is ready. Enjoy!');
        });
      }
    });
  });
}

function startUpdate(stepper: InstallationStepper) {
  stepper.initialSteps(['Update Open WebUI', 'Complete Update']);
  stepper.executeTerminalCommands('pip install --upgrade open-webui').then(() => {
    stepper.showFinalStep(
      'success',
      'Open WebUI Updated Successfully!',
      `Open WebUI has been updated to the latest version. You can now enjoy the new features and improvements.`,
    );
  });
}

const openWebUIRendererMethods: CardRendererMethods = {
  catchAddress,
  manager: {startInstall, updater: {updateType: 'stepper', startUpdate}},
};

export default openWebUIRendererMethods;
