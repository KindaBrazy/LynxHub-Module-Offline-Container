import {RendererIpcTypes, UserInputField, UserInputResult} from '../../../../../../src/common/types/plugins/modules';
import {isWin} from '../../../../Utils/CrossUtils';

export const Invoke_Command_CreateVenv: string =
  'uv venv --relocatable --prompt invoke --python 3.12 --python-preference only-managed .venv';
export const Invoke_Command_ActivateVenv: string = isWin ? '.venv\\Scripts\\activate' : 'source .venv/bin/activate';
export const Invoke_Command_InstallPip: string = 'python -m ensurepip --upgrade';

export const Invoke_Command_InstallUV = isWin
  ? 'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"'
  : 'wget -qO- https://astral.sh/uv/install.sh | sh';

export const Invoke_PyPI = {
  cu128: 'cu128: Windows or Linux with an Nvidia GPU',
  rocm: 'rocm6.3: Linux with an AMD GPU',
  cpu: 'cpu: Linux with no GPU',
};
export const Invoke_PackageSpec = {
  invokeai: 'invokeai: Nvidia 30xx series GPU or newer, or do not have an Nvidia GPU',
  invokeaiXformers: 'invokeai[xformers]:  Nvidia 20xx series GPU or older',
};

export const INVOKEAI_INSTALL_TIME_KEY = 'install-time-invokeai';
export const INVOKEAI_INSTALL_DIR_KEY = 'install-dir-invokeai';
export const INVOKEAI_UPDATE_TIME_KEY = 'update-time-invokeai';
export const INVOKEAI_UPDATE_AVAILABLE_KEY = 'update-version-invokeai';

export const invokeGetInputFields = async (ipc: RendererIpcTypes): Promise<UserInputField[]> => {
  const releases: string[] = await ipc.invoke('invoke_latest_versions');

  return [
    {
      label: 'Installation Directory',
      id: 'install_dir',
      type: 'directory',

      isRequired: true,
    },
    {
      label: 'InvokeAI Version',
      id: 'invoke_version',
      type: 'select',
      selectOptions: releases,

      defaultValue: releases[0],
      isRequired: true,
    },
    {
      label: 'Package Specifier',
      id: 'package_spec',
      type: 'select',
      selectOptions: [Invoke_PackageSpec.invokeai, Invoke_PackageSpec.invokeaiXformers],

      defaultValue: Invoke_PackageSpec.invokeai,
      isRequired: true,
    },
    {
      label: 'Torch Backend',
      id: 'torch_backend',
      type: 'select',
      selectOptions: [Invoke_PyPI.cu128, Invoke_PyPI.rocm, Invoke_PyPI.cpu, 'others'],

      defaultValue: Invoke_PyPI.cu128,
      isRequired: true,
    },
  ];
};

export const invokeGetInputResults = (items: UserInputResult[]) => {
  let installDirResult: string = '';
  let packageSpecResult: string = '';
  let torchBackendResult: string = '';
  let version: string = '';

  items.forEach(item => {
    if (item.id === 'install_dir') {
      installDirResult = item.result as string;
    } else if (item.id === 'invoke_version') {
      version = item.result as string;
    } else if (item.id === 'package_spec') {
      switch (item.result) {
        case Invoke_PackageSpec.invokeaiXformers:
          packageSpecResult = 'invokeai[xformers]';
          break;
        case Invoke_PackageSpec.invokeai:
        default:
          packageSpecResult = 'invokeai';
      }
    } else if (item.id === 'torch_backend') {
      switch (item.result) {
        case Invoke_PyPI.rocm:
          torchBackendResult = 'rocm6.3';
          break;
        case Invoke_PyPI.cu128:
          torchBackendResult = 'cu128';
          break;
        case Invoke_PyPI.cpu:
          torchBackendResult = 'cpu';
          break;
        default:
        case 'others':
          torchBackendResult = '';
          break;
      }
    }
  });

  return {installDirResult, version, packageSpecResult, torchBackendResult};
};

export const invokeGetInstallCommand = (items: UserInputResult[]) => {
  const {version, torchBackendResult, packageSpecResult} = invokeGetInputResults(items);
  const torchBackend = torchBackendResult ? ` --torch-backend=${torchBackendResult}` : '';
  return (
    `uv pip install ${packageSpecResult}==${version} --python 3.12 ` +
    `--python-preference only-managed${torchBackend} --force-reinstall`
  );
};
