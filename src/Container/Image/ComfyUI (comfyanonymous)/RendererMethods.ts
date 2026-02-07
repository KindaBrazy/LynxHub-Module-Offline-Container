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
    'AMD GPUs (Windows and Linux) RDNA 4 (RX 9000 series)',
    'AMD GPUs (Linux only) ROCm 6.4',
    'AMD GPUs (Linux only) ROCm 7.1 Nightly',
    'Mac Apple silicon',
    'Mac Apple silicon (Conda)',
    'Mac x86 (Conda)',
    'Intel GPUs (Windows and Linux)',
    'Intel GPUs Nightly (Windows and Linux)',
  ];

  const getPyTorchInstallCommand = (selectedOption: string) => {
    switch (selectedOption) {
      case 'Mac Apple silicon':
        return (
          'pip3 install --pre torch torchvision torchaudio --extra-index-url ' +
          'https://download.pytorch.org/whl/nightly/cpu'
        );
      case 'Mac Apple silicon (Conda)':
        return 'conda install pytorch torchvision torchaudio -c pytorch-nightly';
      case 'Mac x86 (Conda)':
        return 'conda install pytorch torchvision torchaudio -c pytorch-nightly';

      case 'AMD GPUs (Linux only) ROCm 6.4':
        return 'pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.4';
      case 'AMD GPUs (Linux only) ROCm 7.1 Nightly':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://download.pytorch.org/whl/nightly/rocm7.1'
        );

      case 'AMD GPUs (Windows and Linux) RDNA 3 (RX 7000 series)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' +
          'https://rocm.nightlies.amd.com/v2/gfx110X-all/'
        );
      case 'AMD GPUs (Windows and Linux) RDNA 3.5 (Strix halo/Ryzen AI Max+ 365)':
        return (
          'pip install --pre torch torchvision torchaudio --index-url ' + 'https://rocm.nightlies.amd.com/v2/gfx1151/'
        );
      case 'AMD GPUs (Windows and Linux) RDNA 4 (RX 9000 series)':
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

  const installReqs = (dir: string) => {
    stepper.executeTerminalCommands('pip install -r requirements.txt', dir).then(() => {
      stepper.setInstalled(dir);
      stepper.showFinalStep(
        'success',
        'ComfyUI installation complete!',
        'All installation steps completed successfully. ' + 'Your ComfyUI environment is now ready for use.',
      );
    });
  };

  const getMacCondaInstallCommand = (selectedOption: string) => {
    switch (selectedOption) {
      case 'Mac x86 (Conda)':
        return [
          'curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh',
          'sh Miniconda3-latest-MacOSX-x86_64.sh',
        ];
      case 'Mac Apple silicon (Conda)':
      default:
        return [
          'curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh',
          'sh Miniconda3-latest-MacOSX-arm64.sh',
        ];
    }
  };

  stepper.initialSteps(['ComfyUI', 'Clone', 'PyTorch Version', 'Install PyTorch', 'Install Dependencies', 'Finish']);

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
                const selectedOption = result[0].result as string;
                if (selectedOption === 'NONE') {
                  // Skip PyTorch install, go directly to dependencies
                  stepper.nextStep().then(() => {
                    stepper.nextStep().then(() => {
                      installReqs(dir);
                    });
                  });
                } else if (selectedOption === 'Mac x86 (Conda)' || selectedOption === 'Mac Apple silicon (Conda)') {
                  stepper.ipc.invoke('Comfy_isCondaInstalled').then((isInstalled: boolean) => {
                    if (isInstalled) {
                      stepper.nextStep().then(() => {
                        stepper.executeTerminalCommands(getPyTorchInstallCommand(selectedOption), dir).then(() => {
                          stepper.nextStep().then(() => {
                            installReqs(dir);
                          });
                        });
                      });
                    } else {
                      stepper.initialSteps([
                        'ComfyUI',
                        'Clone',
                        'PyTorch Version',
                        'Conda',
                        'Install PyTorch',
                        'Dependencies',
                        'Finish',
                      ]);
                      stepper.nextStep().then(() => {
                        stepper.executeTerminalCommands(getMacCondaInstallCommand(selectedOption), dir).then(() => {
                          stepper.nextStep().then(() => {
                            stepper.executeTerminalCommands(getPyTorchInstallCommand(selectedOption), dir).then(() => {
                              stepper.nextStep().then(() => {
                                installReqs(dir);
                              });
                            });
                          });
                        });
                      });
                    }
                  });
                } else {
                  stepper.nextStep().then(() => {
                    stepper.executeTerminalCommands(getPyTorchInstallCommand(selectedOption), dir).then(() => {
                      stepper.nextStep().then(() => {
                        installReqs(dir);
                      });
                    });
                  });
                }
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
