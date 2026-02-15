import {
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  ChosenArgument,
  InstallationStepper,
} from '../../../../../src/common/types/plugins/modules';
import {getPythonCommandByOs, isWin} from '../../../Utils/CrossUtils';
import {CardInfo, catchAddress, getArgumentType} from '../../../Utils/RendererUtils';
import smartGalleryArguments from './Arguments';

const SMARTGALLERY_URL = 'https://github.com/biagiomaf/smart-comfyui-gallery';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
  let envVars: string = '';

  args.forEach(arg => {
    const argType = getArgumentType(arg.name, smartGalleryArguments);
    // Include Input, Directory, and File types
    if ((argType === 'Input' || argType === 'Directory' || argType === 'File') && arg.value) {
      // Environment variables
      if (isWin) {
        envVars += `set ${arg.name}=${arg.value}\n`;
      } else {
        envVars += `export ${arg.name}="${arg.value}"\n`;
      }
    }
  });

  if (envVars) {
    result += envVars + '\n';
  }

  const pythonCmd = getPythonCommandByOs().python;
  result += `${pythonCmd} smartgallery.py`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    line = line.trim();

    // Parse Windows environment variables (set VAR=value)
    if (line.startsWith('set ')) {
      const envLine = line.substring(4);
      const [name, ...valueParts] = envLine.split('=');
      const value = valueParts.join('=').trim();
      if (name && value) {
        argResult.push({name: name.trim(), value});
      }
    }

    // Parse Unix environment variables (export VAR="value" or export VAR=value)
    if (line.startsWith('export ')) {
      const envLine = line.substring(7);
      const [name, ...valueParts] = envLine.split('=');
      let value = valueParts.join('=').trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (name && value) {
        argResult.push({name: name.trim(), value});
      }
    }
  });

  return argResult;
}

function startInstall(stepper: InstallationStepper) {
  const pipCommand = getPythonCommandByOs().pip;

  stepper.initialSteps(['SmartGallery', 'Clone', 'Dependencies', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep().then(() => {
        stepper.cloneRepository(SMARTGALLERY_URL).then(dir => {
          stepper.nextStep().then(() => {
            stepper
              .executeTerminalCommands(`${pipCommand} install -r requirements.txt`, dir)
              .then(() => {
                stepper.setInstalled(dir);
                stepper.showFinalStep(
                  'success',
                  'SmartGallery installation complete!',
                  'SmartGallery is ready to use. Configure your paths in the launch arguments and start the gallery.',
                );
              })
              .catch(() => {
                stepper.showFinalStep('error', 'Installation failed', 'Failed to install dependencies.');
              });
          });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, SMARTGALLERY_URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            'ComfyUI LoRA Manager located successfully!',
            'Pre-installed LoRA Manager detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          // Validate by checking for key files
          stepper.utils.verifyFilesExist(targetDirectory, ['smartgallery.py', 'requirements.txt']).then(filesExist => {
            if (filesExist) {
              stepper.setInstalled(targetDirectory);
              stepper.showFinalStep(
                'success',
                `SmartGallery located successfully!`,
                `Detected a manual installation of SmartGallery. Note: Because this is not a Git repository,` +
                  ' automatic updates and certain version-dependent features may not work as expected.',
              );
            } else {
              stepper.showFinalStep(
                'error',
                'Unable to locate SmartGallery!',
                'Please ensure you have selected the correct folder containing the SmartGallery installation.',
              );
            }
          });
        }
      });
    }
  });
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(SMARTGALLERY_URL, undefined, api, callback);
}

const SMARTGALLERY_RM: CardRendererMethods = {
  catchAddress,
  parseArgsToString,
  parseStringToArgs,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default SMARTGALLERY_RM;
