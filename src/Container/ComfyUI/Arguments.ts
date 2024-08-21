import {ArgumentsData} from '../../types';

const comfyArguments: ArgumentsData = [
  {
    category: 'Command Line Arguments',
    sections: [
      {
        section: 'Network',
        items: [
          {
            name: '--listen',
            description:
              'Specify the IP address to listen on (default: 127.0.0.1). If --listen is provided' +
              ' without an argument, it defaults to 0.0.0.0. (listens on all)',
            type: 'Input',
            defaultValue: '127.0.0.1',
          },
          {
            name: '--port',
            description: 'Set the listen port.',
            type: 'Input',
            defaultValue: 8188,
          },
          {
            name: '--tls-keyfile',
            description:
              'Path to TLS (SSL) key file. Enables TLS, makes app accessible at https://...' +
              ' requires --tls-certfile to function',
            type: 'File',
          },
          {
            name: '--tls-certfile',
            description:
              'Path to TLS (SSL) certificate file. Enables TLS, makes app accessible at https://...' +
              ' requires --tls-keyfile to function',
            type: 'File',
          },
          {
            name: '--enable-cors-header',
            description:
              "Enable CORS (Cross-Origin Resource Sharing) with optional origin or allow all with default '*'.",
            type: 'Input',
          },
          {
            name: '--max-upload-size',
            description: 'Set the maximum upload size in MB.',
            type: 'Input',
            defaultValue: 100,
          },
        ],
      },
      {
        section: 'Paths',
        items: [
          {
            name: '--extra-model-paths-config',
            description: 'Load one or more extra_model_paths.yaml files.',
            type: 'File',
          },
          {
            name: '--output-directory',
            description: 'Set the ComfyUI output directory.',
            type: 'Directory',
          },
          {
            name: '--temp-directory',
            description: 'Set the ComfyUI temp directory (default is in the ComfyUI directory).',
            type: 'Directory',
          },
          {
            name: '--input-directory',
            description: 'Set the ComfyUI input directory.',
            type: 'Directory',
          },
        ],
      },
      {
        section: 'Execution',
        items: [
          {
            name: '--auto-launch',
            description: 'Automatically launch ComfyUI in the default browser.',
            type: 'CheckBox',
          },
          {
            name: '--disable-auto-launch',
            description: 'Disable auto launching the browser.',
            type: 'CheckBox',
          },
          {
            name: '--cuda-device',
            description: 'Set the id of the cuda device this instance will use.',
            type: 'Input',
          },
          {
            name: '--cuda-malloc',
            description: 'Enable cudaMallocAsync (enabled by default for torch 2.0 and up).',
            type: 'CheckBox',
          },
          {
            name: '--disable-cuda-malloc',
            description: 'Disable cudaMallocAsync.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Precision',
        items: [
          {
            name: '--force-fp32',
            description: 'Force fp32 (If this makes your GPU work better please report it).',
            type: 'CheckBox',
          },
          {
            name: '--force-fp16',
            description: 'Force fp16.',
            type: 'CheckBox',
          },
          {
            name: '--bf16-unet',
            description: 'Run the UNET in bf16. This should only be used for testing stuff.',
            type: 'CheckBox',
          },
          {
            name: '--fp16-unet',
            description: 'Store unet weights in fp16.',
            type: 'CheckBox',
          },
          {
            name: '--fp8_e4m3fn-unet',
            description: 'Store unet weights in fp8_e4m3fn.',
            type: 'CheckBox',
          },
          {
            name: '--fp8_e5m2-unet',
            description: 'Store unet weights in fp8_e5m2.',
            type: 'CheckBox',
          },
          {
            name: '--fp16-vae',
            description: 'Run the VAE in fp16, might cause black images.',
            type: 'CheckBox',
          },
          {
            name: '--fp32-vae',
            description: 'Run the VAE in full precision fp32.',
            type: 'CheckBox',
          },
          {
            name: '--bf16-vae',
            description: 'Run the VAE in bf16.',
            type: 'CheckBox',
          },
          {
            name: '--cpu-vae',
            description: 'Run the VAE on the CPU.',
            type: 'CheckBox',
          },
          {
            name: '--fp8_e4m3fn-text-enc',
            description: 'Store text encoder weights in fp8 (e4m3fn variant).',
            type: 'CheckBox',
          },
          {
            name: '--fp8_e5m2-text-enc',
            description: 'Store text encoder weights in fp8 (e5m2 variant).',
            type: 'CheckBox',
          },
          {
            name: '--fp16-text-enc',
            description: 'Store text encoder weights in fp16.',
            type: 'CheckBox',
          },
          {
            name: '--fp32-text-enc',
            description: 'Store text encoder weights in fp32.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Optimizations',
        items: [
          {
            name: '--force-channels-last',
            description: 'Force channels last format when inferencing the models.',
            type: 'CheckBox',
          },
          {
            name: '--directml',
            description: 'Use torch-directml.',
            type: 'CheckBox',
          },
          {
            name: '--disable-ipex-optimize',
            description: 'Disables ipex.optimize when loading models with Intel GPUs.',
            type: 'CheckBox',
          },
          {
            name: '--preview-method',
            description: 'Default preview method for sampler nodes.',
            type: 'Input',
            defaultValue: 'NoPreviews',
          },
          {
            name: '--use-split-cross-attention',
            description: 'Use the split cross attention optimization. Ignored when xformers is used.',
            type: 'CheckBox',
          },
          {
            name: '--use-quad-cross-attention',
            description: 'Use the sub-quadratic cross attention optimization . Ignored when xformers is used.',
            type: 'CheckBox',
          },
          {
            name: '--use-pytorch-cross-attention',
            description: 'Use the new pytorch 2.0 cross attention function.',
            type: 'CheckBox',
          },
          {
            name: '--disable-xformers',
            description: 'Disable xformers.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Memory Management',
        items: [
          {
            name: '--gpu-only',
            description: 'Store and run everything (text encoders/CLIP models, etc... on the GPU).',
            type: 'CheckBox',
          },
          {
            name: '--highvram',
            description:
              'By default models will be unloaded to CPU memory after being used.' +
              ' This option keeps them in GPU memory.',
            type: 'CheckBox',
          },
          {
            name: '--normalvram',
            description: 'Used to force normal vram use if lowvram gets automatically enabled.',
            type: 'CheckBox',
          },
          {
            name: '--lowvram',
            description: 'Split the unet in parts to use less vram.',
            type: 'CheckBox',
          },
          {
            name: '--novram',
            description: "When lowvram isn't enough.",
            type: 'CheckBox',
          },
          {
            name: '--cpu',
            description: 'To use the CPU for everything (slow).',
            type: 'CheckBox',
          },
          {
            name: '--disable-smart-memory',
            description:
              'Force ComfyUI to agressively offload to regular ram instead of keeping models in vram when it can.',
            type: 'CheckBox',
          },
        ],
      },
      {
        section: 'Miscellaneous',
        items: [
          {
            name: '--default-hashing-function',
            description:
              'Allows you to choose the hash function to use for duplicate filename /' +
              ' contents comparison. Default is sha256.',
            type: 'DropDown',
            values: ['md5', 'sha1', 'sha256', 'sha512'],
            defaultValue: 'sha256',
          },
          {
            name: '--deterministic',
            description:
              'Make pytorch use slower deterministic algorithms when it can. Note that this' +
              ' might not make images deterministic in all cases.',
            type: 'CheckBox',
          },
          {
            name: '--dont-print-server',
            description: "Don't print server output.",
            type: 'CheckBox',
          },
          {
            name: '--quick-test-for-ci',
            description: 'Quick test for CI.',
            type: 'CheckBox',
          },
          {
            name: '--windows-standalone-build',
            description:
              'Windows standalone build: Enable convenient things that most people using the' +
              ' standalone windows build will probably enjoy (like auto opening the page on startup).',
            type: 'CheckBox',
          },
          {
            name: '--disable-metadata',
            description: 'Disable saving prompt metadata in files.',
            type: 'CheckBox',
          },
          {
            name: '--disable-all-custom-nodes',
            description: 'Disable loading all custom nodes.',
            type: 'CheckBox',
          },
          {
            name: '--multi-user',
            description: 'Enables per-user storage.',
            type: 'CheckBox',
          },
          {
            name: '--verbose',
            description: 'Enables more debug prints.',
            type: 'CheckBox',
          },
          {
            name: '--front-end-version',
            description:
              'Specifies the version of the frontend to be used. This command needs internet connectivity' +
              ' to query and download available frontend implementations from GitHub releases.',
            type: 'Input',
            defaultValue: 'DEFAULT_VERSION_STRING',
          },
          {
            name: '--front-end-root',
            description:
              'The local filesystem path to the directory where the frontend is' +
              ' located. Overrides --front-end-version.',
            type: 'Directory',
          },
        ],
      },
    ],
  },
];

export default comfyArguments;
