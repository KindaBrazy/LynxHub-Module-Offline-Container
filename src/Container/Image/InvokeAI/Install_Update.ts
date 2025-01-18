import {CardInfoApi, CardInfoCallback, InstallationStepper} from '../../../types';
import {DescriptionManager, formatSize, isWin} from '../../../Utils/CrossUtils';
import {INSTALLED_VERSION_KEY, UPDATE_TIME_KEY} from './Utils/CrossConstants';
import {ReleaseInfo} from './Utils/CrossTypes';

export const INPUT_ID = 'install_dir';

export function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['InvokeAI', 'Get Latest', 'Download', 'Install', 'Directory', 'Finish']);
  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep();
      stepper.progressBar(true, 'Getting the latest version of InvokeAI...');
      stepper.ipc.invoke('get-latest').then((releaseInfo: ReleaseInfo) => {
        if (releaseInfo) {
          const {version, downloadUrl} = releaseInfo;
          stepper.initialSteps(['Get Latest', 'InvokeAI', `Download (v${version})`, 'Install', 'Directory', 'Finish']);
          stepper.nextStep();
          stepper.downloadFileFromUrl(downloadUrl).then(path => {
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
                            stepper.storage.set(INSTALLED_VERSION_KEY, version);
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
        } else {
          stepper.showFinalStep(
            'error',
            'Installation Failed!',
            `Unable to install at this time. Please check your internet connection and try again later.`,
          );
        }
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
  stepper.initialSteps(['Checking', 'Downloading', 'Installing', 'Finishing Up']);
  stepper.progressBar(true, 'Checking for the latest version of InvokeAI...');
  stepper.ipc.invoke('get-latest').then((releaseInfo: ReleaseInfo) => {
    if (releaseInfo) {
      stepper.initialSteps([
        'Update Available!',
        `Downloading (v${releaseInfo.version})`,
        'Installing',
        'Finishing Up',
      ]);
      stepper.nextStep();
      stepper.downloadFileFromUrl(releaseInfo.downloadUrl).then(path => {
        stepper.utils.decompressFile(path).then(folderPath => {
          stepper.nextStep();
          stepper
            .runTerminalScript(`${folderPath}/InvokeAI-Installer`, isWin ? 'install.bat' : 'install.sh')
            .then(() => {
              const currentDate = new Date();
              stepper.storage.set(UPDATE_TIME_KEY, currentDate.toLocaleString());
              stepper.storage.set(INSTALLED_VERSION_KEY, releaseInfo.version);
              stepper.setUpdated();
              stepper.showFinalStep(
                'success',
                'InvokeAI Updated Successfully',
                `InvokeAI has been successfully updated to version ${releaseInfo.version}. Enjoy!`,
              );
            });
        });
      });
    } else {
      stepper.showFinalStep(
        'error',
        'Update Failed!',
        `Unable to check for updates at this time. Please check your internet connection and try again later.`,
      );
    }
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
