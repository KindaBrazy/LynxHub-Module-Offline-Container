import {CardInfoApi, CardInfoCallback, InstallationStepper} from '../../../types';
import {DescriptionManager, formatSize, isWin} from '../../../Utils/CrossUtils';
import {DOWNLOAD_URL, INPUT_ID, INSTALLED_VERSION_KEY, UPDATE_TIME_KEY, VERSION_NAME} from './CrossConstants';

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
                        stepper.storage.set(INSTALLED_VERSION_KEY, VERSION_NAME);
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
        const currentDate = new Date();
        stepper.storage.set(UPDATE_TIME_KEY, currentDate.toLocaleString());
        stepper.storage.set(INSTALLED_VERSION_KEY, VERSION_NAME);
        stepper.showFinalStep(
          'success',
          'InvokeAI Updated Successfully',
          `Version ${VERSION_NAME} has been installed successfully.`,
        );
      });
    });
  });
}

export async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  const dir = api.installationFolder;
  if (!dir) return;
  callback.setOpenFolders([dir]);

  const descManager = new DescriptionManager(
    [
      {
        title: 'Installation Data',
        items: [
          {label: 'Install Date', result: 'loading'},
          {label: 'Update Date', result: 'loading'},
          {label: 'Current Version', result: 'loading'},
        ],
      },
      {
        title: 'Disk Usage',
        items: [{label: 'Total', result: 'loading'}],
      },
    ],
    callback,
  );

  api.getFolderCreationTime(dir).then(result => {
    descManager.updateItem(0, 0, result);
  });
  api.storage.get(UPDATE_TIME_KEY).then(result => {
    descManager.updateItem(0, 1, result);
  });
  api.storage.get(INSTALLED_VERSION_KEY).then(result => {
    descManager.updateItem(0, 2, result);
  });
  api.getFolderSize(dir).then(result => {
    descManager.updateItem(1, 0, formatSize(result));
  });
}
