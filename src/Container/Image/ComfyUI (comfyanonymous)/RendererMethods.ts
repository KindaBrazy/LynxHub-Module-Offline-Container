import {isEmpty} from 'lodash';

import {
  ArgType,
  CardInfoApi,
  CardInfoCallback,
  CardRendererMethods,
  ChosenArgument,
  ExtensionData,
  InstallationStepper,
} from '../../../../../src/cross/plugin/ModuleTypes';
import {isWin} from '../../../Utils/CrossUtils';
import {CardInfo, catchAddress, getArgumentType, isValidArg} from '../../../Utils/RendererUtils';
import comfyArguments from './Arguments';

const COMFYUI_URL = 'https://github.com/comfyanonymous/ComfyUI';

export function parseArgsToString(args: ChosenArgument[]): string {
  let result: string = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
  let argResult: string = '';

  args.forEach(arg => {
    const argType = getArgumentType(arg.name, comfyArguments);
    if (argType === 'CheckBox') {
      argResult += `${arg.name} `;
    } else if (argType === 'File' || argType === 'Directory') {
      argResult += `${arg.name} "${arg.value}" `;
    } else {
      argResult += `${arg.name} ${arg.value} `;
    }
  });

  result += isEmpty(argResult) ? 'python main.py' : `python main.py ${argResult}`;

  return result;
}

export function parseStringToArgs(args: string): ChosenArgument[] {
  const argResult: ChosenArgument[] = [];
  const lines: string[] = args.split('\n');

  lines.forEach((line: string): void => {
    if (!line.startsWith('python main.py')) return;

    // Extract the command line arguments and clear falsy values
    const clArgs: string = line.split('python main.py ')[1];

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
      if (isValidArg(value.name, comfyArguments)) {
        if (getArgumentType(value.name, comfyArguments) === 'CheckBox') {
          argResult.push({name: value.name, value: ''});
        } else {
          argResult.push({name: value.name, value: value.value});
        }
      }
    });
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

function startInstall(stepper: InstallationStepper) {
  const selectOptions = [
    'NONE',
    'NVIDIA CU130',
    'NVIDIA CU130 Nightly',
    'AMD GPUs (Windows and Linux) RDNA 3 (RX 7000 series)',
    'AMD GPUs (Windows and Linux) RDNA 3.5 (Strix halo/Ryzen AI Max+ 365)',
    'RDNA 4 (RX 9000 series)',
    'AMD GPUs (Linux only) ROCm 6.2',
    'AMD GPUs (Linux only) ROCm 7.1 Nightly',
    'Apple Mac silicon',
    'Apple Mac silicon (Conda)',
    'Intel GPUs (Windows and Linux)',
    'Intel GPUs Nightly (Windows and Linux)',
  ];

  const getPyTorchInstallCommand = (selectedOption: string) => {
    switch (selectedOption) {
      case 'Apple Mac silicon':
        return (
          'pip3 install --pre torch torchvision torchaudio --extra-index-url ' +
          'https://download.pytorch.org/whl/nightly/cpu'
        );
      case 'Apple Mac silicon (Conda)':
        return 'conda install pytorch torchvision torchaudio -c pytorch-nightly';

      case 'AMD GPUs (Linux only) ROCm 6.2':
        return 'pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.4';
      case 'AMD GPUs (Linux only) ROCm 7.1 Nightly':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://download.pytorch.org/whl/nightly/rocm7.1'
        );

      case 'AMD GPUs (Windows and Linux) RDNA 3 (RX 7000 series)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://rocm.nightlies.amd.com/v2/gfx110X-dgpu/'
        );
      case 'AMD GPUs (Windows and Linux) RDNA 3.5 (Strix halo/Ryzen AI Max+ 365)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' + 'https://rocm.nightlies.amd.com/v2/gfx1151/'
        );
      case 'RDNA 4 (RX 9000 series)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://rocm.nightlies.amd.com/v2/gfx120X-all/'
        );

      case 'Intel GPUs (Windows and Linux)':
        return 'pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/xpu';
      case 'Intel GPUs Nightly (Windows and Linux)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' + 'https://download.pytorch.org/whl/nightly/xpu'
        );

      default:
      case 'NVIDIA CU130':
        return 'pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu130';
      case 'NVIDIA CU130 Nightly':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://download.pytorch.org/whl/nightly/cu130'
        );
    }
  };

  stepper.initialSteps(['ComfyUI', 'Clone', 'PyTorch Version', 'Install PyTorch', 'Install Dependencies', 'Finish']);

  const installReqs = (dir: string) => {
    stepper.nextStep().then(() => {
      stepper.executeTerminalCommands('pip install -r requirements.txt', dir).then(() => {
        stepper.setInstalled(dir);
        stepper.showFinalStep(
          'success',
          'ComfyUI installation complete!',
          'All installation steps completed successfully. ' + 'Your ComfyUI environment is now ready for use.',
        );
      });
    });
  };

  stepper.starterStep().then(({targetDirectory, chosen}) => {
    if (chosen === 'install') {
      stepper.nextStep().then(() => {
        stepper.cloneRepository(COMFYUI_URL).then(dir => {
          stepper.nextStep().then(() => {
            stepper
              .collectUserInput([
                {
                  id: 'gpu_type',
                  type: 'select',
                  label: 'Please Select PyTorch Version (Gpu)',
                  selectOptions,
                  defaultValue: selectOptions[0],
                  isRequired: true,
                },
              ])
              .then(result => {
                stepper.nextStep().then(() => {
                  if (result[0].result === 'NONE') {
                    installReqs(dir);
                  } else {
                    stepper.executeTerminalCommands(result[0].result as string).then(() => {
                      installReqs(dir);
                    });
                  }
                });
              });
          });
        });
      });
    } else if (targetDirectory) {
      stepper.utils.validateGitRepository(targetDirectory, COMFYUI_URL).then(isValid => {
        if (isValid) {
          stepper.setInstalled(targetDirectory);
          stepper.showFinalStep(
            'success',
            'ComfyUI located successfully!',
            'Pre-installed ComfyUI detected. Installation skipped as your existing setup is ready to use.',
          );
        } else {
          stepper.showFinalStep(
            'error',
            'Unable to locate ComfyUI!',
            'Please ensure you have selected the correct folder containing the ComfyUI repository.',
          );
        }
      });
    }
  });
}

async function cardInfo(api: CardInfoApi, callback: CardInfoCallback) {
  return CardInfo(COMFYUI_URL, '/custom_nodes', api, callback);
}

const COMFYUI_RM: CardRendererMethods = {
  catchAddress,
  fetchExtensionList,
  parseArgsToString,
  parseStringToArgs,
  cardInfo,
  manager: {startInstall, updater: {updateType: 'git'}},
};

export default COMFYUI_RM;
