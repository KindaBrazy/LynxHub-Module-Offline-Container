import {isEmpty} from 'lodash';

import {
  ArgType,
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  ChosenArgument,
  ExtensionData,
  InstallationStepper,
} from '../../../../../src/common/types/plugins/modules';
import {CardInfo, catchAddress, getArgumentType, isValidArg} from '../../../Utils/RendererUtils';
import comfyZludaArguments from './Arguments';

const URL = 'https://github.com/patientx/ComfyUI-Zluda';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result = '';
  let commandLineArgs = '';
  const envVars: Record<string, string> = {};

  // Separate environment variables from command line arguments
  args.forEach(arg => {
    if (
      arg.name === 'PYTHON' ||
      arg.name === 'GIT' ||
      arg.name === 'VENV_DIR' ||
      arg.name === 'MIOPEN_FIND_MODE' ||
      arg.name === 'MIOPEN_LOG_LEVEL' ||
      arg.name === 'ZLUDA_COMGR_LOG_LEVEL' ||
      arg.name === 'TRITON_OVERRIDE_ARCH'
    ) {
      envVars[arg.name] = arg.value;
      return;
    }

    // Build command line arguments
    const argType = getArgumentType(arg.name, comfyZludaArguments);
    if (argType === 'CheckBox') {
      commandLineArgs += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      commandLineArgs += `${arg.name} "${arg.value}" `;
    } else {
      commandLineArgs += `${arg.name} ${arg.value} `;
    }
  });

  // Add environment variables in proper order
  if (envVars.MIOPEN_FIND_MODE !== undefined) {
    result += `set "MIOPEN_FIND_MODE=${envVars.MIOPEN_FIND_MODE}"\n`;
  }
  if (envVars.MIOPEN_LOG_LEVEL !== undefined) {
    result += `set "MIOPEN_LOG_LEVEL=${envVars.MIOPEN_LOG_LEVEL}"\n`;
  }
  if (Object.keys(envVars).some(k => k === 'MIOPEN_FIND_MODE' || k === 'MIOPEN_LOG_LEVEL')) {
    result += '\n';
  }

  if (envVars.PYTHON !== undefined) {
    result += `set "PYTHON=${envVars.PYTHON}"\n`;
  }
  if (envVars.GIT !== undefined) {
    result += `set "GIT=${envVars.GIT}"\n`;
  }
  if (envVars.VENV_DIR !== undefined) {
    result += `set "VENV_DIR=${envVars.VENV_DIR}"\n`;
  }
  if (Object.keys(envVars).some(k => k === 'PYTHON' || k === 'GIT' || k === 'VENV_DIR')) {
    result += '\n';
  }

  result += `set "COMMANDLINE_ARGS=${commandLineArgs.trim()}"\n\n`;

  if (envVars.TRITON_OVERRIDE_ARCH !== undefined) {
    result += `set "TRITON_OVERRIDE_ARCH=${envVars.TRITON_OVERRIDE_ARCH}"\n\n`;
  }

  if (envVars.ZLUDA_COMGR_LOG_LEVEL !== undefined) {
    result += `set "ZLUDA_COMGR_LOG_LEVEL=${envVars.ZLUDA_COMGR_LOG_LEVEL}"\n\n`;
  }

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
