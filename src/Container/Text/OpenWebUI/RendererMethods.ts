import {
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  ChosenArgument,
  DataSection,
  InstallationStepper,
} from '../../../types';
import {DescriptionManager, isWin} from '../../../Utils/CrossUtils';
import {catchAddress, isValidArg, removeEscapes} from '../../../Utils/RendererUtils';
import openArguments from './Arguments';

const INSTALL_TIME_KEY = 'install-time-openwebui';
const UPDATE_TIME_KEY = 'update-time-openwebui';

function checkLinuxArgLine(line: string): 'set' | 'export' | 'var' | undefined {
  if (isWin && line.startsWith('set ')) return 'set';

  if (line.startsWith('export ')) return 'export';

  for (const arg of openArguments) {
    if (arg.category === 'Environment') {
      if ((arg as DataSection).sections[0].items.find(item => item.name === line.split('=')[0])) {
        return 'var';
      } else {
        return undefined;
      }
    }
  }

  return undefined;
}

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
  args.forEach(arg => {
    const eWinResult: string = `set ${arg.name}=${arg.value}\n`;
    const eResult: string = `export ${arg.name}="${arg.value}"\n`;
    result += isWin ? eWinResult : eResult;
  });
  result += isWin ? `\nopen-webui serve` : `open-webui serve`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (line.startsWith('#')) {
      return;
    } else {
      const lineType = checkLinuxArgLine(line);
      if (lineType === 'export' || lineType === 'set') {
        let [name, value] = line.replace(`${lineType} `, '').split('=');
        name = removeEscapes(name.trim());
        value = removeEscapes(value.trim());
        if (isValidArg(name, openArguments)) {
          argResult.push({name, value});
        }
      } else if (checkLinuxArgLine(line) === 'var') {
        let [name, value] = line.split('=');
        name = removeEscapes(name.trim());
        value = removeEscapes(value.trim());
        if (isValidArg(name, openArguments)) {
          argResult.push({name, value});
        }
      }
    }
  });

  return argResult;
}

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
    stepper.setUpdated();
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
