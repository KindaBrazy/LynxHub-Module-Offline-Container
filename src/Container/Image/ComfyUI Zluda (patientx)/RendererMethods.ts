import {isEmpty} from 'lodash';

import {
  ArgType,
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  ChosenArgument,
  ExtensionData,
  InstallationStepper,
} from '../../../../../src/cross/types/plugins/module';
import {CardInfo, catchAddress, getArgumentType, isValidArg} from '../../../Utils/RendererUtils';
import comfyZludaArguments from './Arguments';

const URL = 'https://github.com/patientx/ComfyUI-Zluda';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = '@echo off' + '\n\n';
  let argResult: string = '';

  args.forEach(arg => {
    if (arg.name === 'PYTHON' || arg.name === 'VENV_DIR' || arg.name === 'ZLUDA_COMGR_LOG_LEVEL') {
      result += `set ${arg.name}=${arg.value}` + `\n`;
      return;
    }
    const argType = getArgumentType(arg.name, comfyZludaArguments);
    if (argType === 'CheckBox') {
      argResult += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      argResult += `${arg.name} "${arg.value}" `;
    } else {
      argResult += `${arg.name} ${arg.value} `;
    }
  });

  result += '\n' + '.\\zluda\\zluda.exe -- ';

  result += isEmpty(argResult) ? '%PYTHON% main.py' : `%PYTHON% main.py ${argResult}`;

  result += '\n\n' + 'pause';

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (line.startsWith('set')) {
      const argName = line.split('=')[0].split(' ')[1].trim();
      const argValue = line.split('=')[1].trim();
      if (argName === 'PYTHON' || argName === 'VENV_DIR' || argName === 'ZLUDA_COMGR_LOG_LEVEL') {
        argResult.push({name: argName, value: argValue});
      }
    } else if (line.includes('%PYTHON% main.py')) {
      // Extract the command line arguments and clear falsy values
      const clArgs: string = line.split('%PYTHON% main.py ')[1];

      if (!clArgs) return;

      const args: string[] = clArgs.split('--').filter(Boolean);

      // Map each argument to an object with id and value
      const result: ArgType[] = args.map((arg: string): ArgType => {
        const [id, ...value] = arg.trim().split(' ');
        return {
          name: `--${id}`,
          value: value.join(' ').replace(/"/g, ''),
        };
      });

      // Process each argument
      result.forEach((value: ArgType): void => {
        // Check if the argument exists or valid
        if (isValidArg(value.name, comfyZludaArguments)) {
          if (getArgumentType(value.name, comfyZludaArguments) === 'CheckBox') {
            argResult.push({name: value.name, value: ''});
          } else {
            argResult.push({name: value.name, value: value.value});
          }
        }
      });
    }
  });

  return argResult;
}

async function fetchExtensionList(): Promise<ExtensionData[]> {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ltdrdata/ComfyUI-Manager/main/custom-node-list.json',
    );
    const extensions = await response.json();
    return extensions.custom_nodes.map((extension: any) => ({
      title: extension.title,
      description: extension.description,
      url: extension.reference,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

const COMFYUI_ZLUDA_URL = 'https://github.com/patientx/ComfyUI-Zluda';
const customArguments = [
  {name: 'PYTHON', value: '"%~dp0/venv/Scripts/python.exe"'},
  {name: 'VENV_DIR', value: './venv'},
  {
    name: '--use-quad-cross-attention',
    value: '',
  },
];

function startInstall(stepper: InstallationStepper) {
  stepper.initialSteps(['ComfyUI Zluda', 'Clone', 'Install', 'Finish']);

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep().then(() => {
        stepper.cloneRepository(COMFYUI_ZLUDA_URL).then(dir => {
          stepper.nextStep().then(() => {
            stepper.runTerminalScript(dir, 'install.bat').then(() => {
              stepper.setInstalled(dir);
              stepper.postInstall.config({
                customArguments: {
                  presetName: 'Zluda Config',
                  customArguments,
                },
              });
              stepper.showFinalStep(
                'success',
                'ComfyUI-Zluda installation complete!',
                'All installation steps completed successfully. Your ComfyUI-Zluda environment is now ready for use.',
              );
            });
          });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, COMFYUI_ZLUDA_URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.postInstall.config({
            customArguments: {
              presetName: 'Zluda Config',
              customArguments,
            },
          });
          stepper.showFinalStep(
            'success',
            'ComfyUI-Zluda located successfully!',
            'Pre-installed ComfyUI-Zluda detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          stepper.showFinalStep(
            'error',
            'Unable to locate ComfyUI-Zluda!',
            'Please ensure you have selected the correct folder containing the ComfyUI-Zluda repository.',
          );
        }
      });
    }
  });
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(URL, '/custom_nodes', api, callback);
}

const COMFYUI_ZLUDA_RM: CardRendererMethods = {
  catchAddress,
  fetchExtensionList,
  parseArgsToString,
  parseStringToArgs,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default COMFYUI_ZLUDA_RM;
