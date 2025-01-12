import {CardInfoApi, CardInfoCallback, CardRendererMethods, InstallationStepper} from '../../../types';
import {DescriptionManager} from '../../../Utils/CrossUtils';
import {catchAddress} from '../../../Utils/RendererUtils';

const INSTALL_TIME_KEY = 'install-time-openwebui';
const UPDATE_TIME_KEY = 'update-time-openwebui';

function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['Getting Started', 'Detect Existing', 'Install Open WebUI', 'All Done!']);
  stepper.starterStep({disableSelectDir: true}).then(() => {
    stepper.nextStep();
    stepper.progressBar(true, 'Checking for existing Open WebUI installation...');
    stepper.ipc.invoke('isInstalled').then((isInstalled: boolean) => {
      if (isInstalled) {
        stepper.setInstalled();
        const currentDate = new Date();
        stepper.storage.set(INSTALL_TIME_KEY, currentDate.toLocaleString());
        stepper.showFinalStep('success', "You're All Set!", "Open WebUI is already installed. You're good to go!");
      } else {
        stepper.nextStep();
        stepper.executeTerminalCommands('pip install open-webui').then(() => {
          stepper.setInstalled();
          const currentDate = new Date();
          stepper.storage.set(INSTALL_TIME_KEY, currentDate.toLocaleString());
          stepper.showFinalStep('success', 'Installation Complete!', 'Your Open WebUI environment is ready. Enjoy!');
        });
      }
    });
  });
}

function startUpdate(stepper: InstallationStepper) {
  stepper.initialSteps(['Update Open WebUI', 'Complete Update']);
  stepper.executeTerminalCommands('pip install --upgrade open-webui').then(() => {
    const currentDate = new Date();
    stepper.storage.set(UPDATE_TIME_KEY, currentDate.toLocaleString());
    stepper.showFinalStep(
      'success',
      'Open WebUI Updated Successfully!',
      `Open WebUI has been updated to the latest version. You can now enjoy the new features and improvements.`,
    );
  });
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  callback.setOpenFolders(undefined);

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
    ],
    callback,
  );

  api.storage.get(INSTALL_TIME_KEY).then(result => {
    descManager.updateItem(0, 0, result);
  });
  api.storage.get(UPDATE_TIME_KEY).then(result => {
    descManager.updateItem(0, 1, result);
  });
  api.ipc.invoke('current-version').then(result => {
    descManager.updateItem(0, 2, result);
  });
}

const OPEN_WEBUI_RM: CardRendererMethods = {
  catchAddress,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'stepper', startUpdate}},
};

export default OPEN_WEBUI_RM;
