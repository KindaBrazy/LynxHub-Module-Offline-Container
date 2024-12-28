import {InstallationStepper} from '../../types';
import {isWin} from '../../Utils/CrossUtils';

const DOWNLOAD_URL = 'https://github.com/invoke-ai/InvokeAI/releases/download/v5.5.0/InvokeAI-installer-v5.5.0.zip';

const VERSION_NAME = '5.5.0';

const INPUT_ID = 'install_dir';

export function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['InvokeAI', 'Download', 'Install', 'Directory', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.downloadFileFromUrl(DOWNLOAD_URL).then(path => {
        stepper.utils.decompressFile(path).then(folderPath => {
          stepper.nextStep();
          stepper
            .runTerminalScript(`${folderPath}/InvokeAI-Installer`, isWin ? 'install.bat' : 'install.sh')
            .then(() => {
              stepper.nextStep();
              stepper
                .collectUserInput([
                  {
                    id: INPUT_ID,
                    type: 'directory',
                    label: 'Select the directory you chose during the terminal installation step',
                  },
                ])
                .then(result => {
                  const selectedDir = result.find(item => item.id === INPUT_ID);
                  if (selectedDir) {
                    const finalDir = selectedDir.result as string;
                    stepper.utils.verifyFilesExist(finalDir, [isWin ? 'invoke.bat' : 'invoke.sh']).then(exist => {
                      if (exist) {
                        stepper.setInstalled(finalDir);
                        stepper.showFinalStep(
                          'success',
                          'InvokeAI Installation Complete',
                          'All installation steps have been completed successfully.' +
                            ' Your InvokeAI environment is now ready for use.',
                        );
                      } else {
                        stepper.showFinalStep(
                          'error',
                          'InvokeAI Installation Failed',
                          'Unable to validate the installation directory containing InvokeAI. ' +
                            'Please close this window, reopen it, and click "Locate" to select the correct folder.',
                        );
                      }
                    });
                  }
                });
            });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.verifyFilesExist(targetDirectory, [isWin ? 'invoke.bat' : 'invoke.sh']).then(exist => {
        if (exist) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            'InvokeAI Located Successfully',
            'Pre-installed InvokeAI detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          stepper.showFinalStep(
            'error',
            'Unable to Locate InvokeAI',
            `Please ensure you have selected the correct folder containing ` +
              `InvokeAI with the ${isWin ? 'invoke.bat' : 'invoke.sh'} file.`,
          );
        }
      });
    }
  });
}

export function startUpdate(stepper: InstallationStepper) {
  stepper.initialSteps([`Download V${VERSION_NAME}`, 'Install', 'Finish']);
  stepper.downloadFileFromUrl(DOWNLOAD_URL).then(path => {
    stepper.utils.decompressFile(path).then(folderPath => {
      stepper.nextStep();
      stepper.runTerminalScript(`${folderPath}/InvokeAI-Installer`, isWin ? 'install.bat' : 'install.sh').then(() => {
        stepper.showFinalStep(
          'success',
          'InvokeAI Updated Successfully',
          `Version ${VERSION_NAME} has been installed successfully.`,
        );
      });
    });
  });
}
