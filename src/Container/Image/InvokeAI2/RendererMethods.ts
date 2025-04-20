import {CardRendererMethods, InstallationStepper} from '../../../types';
import {
  Invoke_Command_ActivateVenv,
  Invoke_Command_CreateVenv,
  Invoke_Command_InstallPip,
  Invoke_Command_InstallUV,
  invokeGetInputFields,
  invokeGetInputResults,
  invokeGetInstallCommand,
} from './Utils_Constants';

function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['InvokeAI', 'UV', 'Config', 'Install', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.progressBar(true, 'Detecting UV installation...');
      stepper.ipc.invoke('is_uv_installed').then(isUvInstalled => {
        if (!isUvInstalled) {
          stepper.executeTerminalCommands(Invoke_Command_InstallUV).then(() => {
            stepper.showFinalStep(
              'success',
              'UV Package Manager Installation Complete.',
              'Restart your computer and run the installer again to continue installation.',
            );
          });
        } else {
          stepper.nextStep();
          stepper.progressBar(true, 'Fetching the latest InvokeAI versions...');
          invokeGetInputFields(stepper.ipc).then(fields => {
            stepper.collectUserInput(fields).then(result => {
              const {installDirResult} = invokeGetInputResults(result);
              const installCommand = invokeGetInstallCommand(result);

              stepper.nextStep();
              stepper
                .executeTerminalCommands(
                  [Invoke_Command_CreateVenv, Invoke_Command_ActivateVenv, Invoke_Command_InstallPip, installCommand],
                  installDirResult,
                )
                .then(() => {
                  stepper.setInstalled(installDirResult);
                  stepper.showFinalStep(
                    'success',
                    'InvokeAI Installation Complete.',
                    'Your InvokeAI environment is ready. Enjoy!',
                  );
                });
            });
          });
        }
      });
    } else {
      stepper.ipc.invoke('validate_install_dir', targetDirectory).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep('success', 'InvokeAI Environment Found.', 'Location validated successfully.');
        } else {
          stepper.showFinalStep(
            'error',
            'Invalid Environment!',
            'Could not find InvokeAI installation in the selected directory.',
          );
        }
      });
    }
  });
}

const INVOKE_RM: CardRendererMethods = {manager: {startInstall, updater: {updateType: 'stepper'}}};

export default INVOKE_RM;
