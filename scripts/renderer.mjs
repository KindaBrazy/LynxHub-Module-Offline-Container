import { i as isWin, y as catchAddress$1, z as getArgumentType, D as lodashExports, F as isValidArg, R as RSXDALV_ID, G as GITMYLO_ID, H as gitmyloArguments, J as gitmyloRendererMethods, E as EREW123_ID, K as automatic1111Arguments, C as ComfyUI_ID, P as comfyArguments, Q as comfyRendererMethods, x as ComfyUI_Zluda_ID, T as comfyZludaArguments, U as comfyZludaRendererMethods, A as AUTOMATIC1111_ID, W as a1RendererMethods, L as LSHQQYTIGER_ID, X as lshqqytigerArguments, u as LLLYASVIEL_ID, v as LSHQQYTIGER_FORGE_ID, V as VLADMANDIC_ID, Y as vladmandicArguments, Z as vladRendererMethods, M as MCMONKEYPROJECTS_ID, _ as mcMonkeyArguments, $ as mcMonkeyRendererMethods, B as BMALTAIS_ID, a0 as bmaltaisArguments, a1 as bmaltaisRendererMethods, w as ANAPNOE_ID, N as NEROGAR_ID, I as INVOKEAI_ID, O as OOBABOOGA_ID, a2 as oobaboogaArguments, a3 as oobaRendererMethods, S as SILLYTAVERN_ID, a4 as sillyArguments, a5 as sillyRendererMethods } from './RendererMethods_DPD1ER.mjs';

const invokeArguments = [
    {
        category: 'Subset Settings',
        items: [
            {
                name: '--root',
                description: 'Specify the root directory',
                type: 'Directory',
            },
            {
                name: '--config',
                description: 'Override the default "invokeai.yaml" file location',
                type: 'File',
            },
        ],
    },
    {
        category: 'Command Line Arguments',
        items: [
            {
                name: 'host',
                description: 'IP address to bind to. Use 0.0.0.0 to serve to your local network.',
                type: 'Input',
                defaultValue: '127.0.0.1',
            },
            {
                name: 'port',
                description: 'Port to bind to.',
                type: 'Input',
                defaultValue: '9090',
            },
            {
                name: 'allow_origins',
                description: 'Allowed CORS origins.',
                type: 'Input',
            },
            {
                name: 'allow_credentials',
                description: 'Allow CORS credentials.',
                type: 'CheckBox',
            },
            {
                name: 'allow_methods',
                description: 'Methods allowed for CORS.',
                type: 'Input',
                defaultValue: "['*']",
            },
            {
                name: 'allow_headers',
                description: 'Headers allowed for CORS.',
                type: 'Input',
                defaultValue: "['*']",
            },
            {
                name: 'ssl_certfile',
                description: 'SSL certificate file for HTTPS. See https://www.uvicorn.org/settings/#https.',
                type: 'File',
            },
            {
                name: 'ssl_keyfile',
                description: 'SSL key file for HTTPS. See https://www.uvicorn.org/settings/#https.',
                type: 'File',
            },
            {
                name: 'log_tokenization',
                description: 'Enable logging of parsed prompt tokens.',
                type: 'CheckBox',
            },
            {
                name: 'patchmatch',
                description: 'Enable patchmatch inpaint code.',
                type: 'CheckBox',
            },
            {
                name: 'models_dir',
                description: 'Path to the models directory.',
                type: 'Directory',
                defaultValue: 'models',
            },
            {
                name: 'convert_cache_dir',
                description: 'Path to the converted models cache directory (DEPRECATED, but do not delete because it is' +
                    ' needed for migration from previous versions).',
                type: 'Directory',
                defaultValue: 'models/.convert_cache',
            },
            {
                name: 'download_cache_dir',
                description: 'Path to the directory that contains dynamically downloaded models.',
                type: 'Directory',
                defaultValue: 'models/.download_cache',
            },
            {
                name: 'legacy_conf_dir',
                description: 'Path to directory of legacy checkpoint config files.',
                type: 'Directory',
                defaultValue: 'configs',
            },
            {
                name: 'db_dir',
                description: 'Path to InvokeAI databases directory.',
                type: 'Directory',
                defaultValue: 'databases',
            },
            {
                name: 'outputs_dir',
                description: 'Path to directory for outputs.',
                type: 'Directory',
                defaultValue: 'outputs',
            },
            {
                name: 'custom_nodes_dir',
                description: 'Path to directory for custom nodes.',
                type: 'Directory',
                defaultValue: 'nodes',
            },
            {
                name: 'style_presets_dir',
                description: 'Path to directory for style presets.',
                type: 'Directory',
                defaultValue: 'style_presets',
            },
            {
                name: 'log_handlers',
                description: 'Log handler. Valid options are "console", "file=", "syslog=path|address:host:port", "http=".',
                type: 'Input',
                defaultValue: "['console']",
            },
            {
                name: 'log_format',
                description: 'Log format. Use "plain" for text-only, "color" for colorized output, "legacy" for 2.3-style' +
                    ' logging and "syslog" for syslog-style.',
                type: 'DropDown',
                defaultValue: 'color',
                values: ['plain', 'color', 'syslog', 'legacy'],
            },
            {
                name: 'log_level',
                description: 'Emit logging messages at this level or higher.',
                type: 'DropDown',
                defaultValue: 'info',
                values: ['debug', 'info', 'warning', 'error', 'critical'],
            },
            {
                name: 'log_level_network',
                description: "Log level for network-related messages. 'info' and 'debug' are very verbose.",
                type: 'DropDown',
                defaultValue: 'warning',
                values: ['debug', 'info', 'warning', 'error', 'critical'],
            },
            {
                name: 'log_sql',
                description: 'Log SQL queries. log_level must be debug for this to do anything. Extremely verbose.',
                type: 'CheckBox',
            },
            {
                name: 'use_memory_db',
                description: 'Use in-memory database. Useful for development.',
                type: 'CheckBox',
            },
            {
                name: 'dev_reload',
                description: 'Automatically reload when Python sources are changed. Does not reload node definitions.',
                type: 'CheckBox',
            },
            {
                name: 'profile_graphs',
                description: 'Enable graph profiling using cProfile.',
                type: 'CheckBox',
            },
            {
                name: 'profile_prefix',
                description: 'An optional prefix for profile output files.',
                type: 'Input',
            },
            {
                name: 'profiles_dir',
                description: 'Path to profiles output directory.',
                type: 'Directory',
                defaultValue: 'profiles',
            },
            {
                name: 'ram',
                description: 'Maximum memory amount used by memory model cache for rapid switching (GB).',
                type: 'Input',
            },
            {
                name: 'vram',
                description: 'Amount of VRAM reserved for model storage (GB).',
                type: 'Input',
                defaultValue: '0',
            },
            {
                name: 'lazy_offload',
                description: 'Keep models in VRAM until their space is needed.',
                type: 'CheckBox',
            },
            {
                name: 'log_memory_usage',
                description: 'If True, a memory snapshot will be captured before and after every model cache operation,' +
                    ' and the result will be logged (at debug level). There is a time cost to capturing the' +
                    ' memory snapshots, so it is recommended to only enable this feature if you are actively' +
                    " inspecting the model cache's behaviour.",
                type: 'CheckBox',
            },
            {
                name: 'device',
                description: 'Preferred execution device. auto will choose the device depending on the hardware platform' +
                    ' and the installed torch capabilities.',
                type: 'DropDown',
                defaultValue: 'auto',
                values: ['auto', 'cpu', 'cuda', 'cuda:1', 'mps'],
            },
            {
                name: 'precision',
                description: 'Floating point precision. float16 will consume half the memory of float32 but produce slightly' +
                    ' lower-quality images. The auto setting will guess the proper precision based on your video' +
                    ' card and operating system.',
                type: 'DropDown',
                defaultValue: 'auto',
                values: ['auto', 'float16', 'bfloat16', 'float32'],
            },
            {
                name: 'sequential_guidance',
                description: 'Whether to calculate guidance in serial instead of in parallel, lowering memory requirements.',
                type: 'CheckBox',
            },
            {
                name: 'attention_type',
                description: 'Attention type.',
                type: 'DropDown',
                defaultValue: 'auto',
                values: ['auto', 'normal', 'xformers', 'sliced', 'torch-sdp'],
            },
            {
                name: 'attention_slice_size',
                description: 'Slice size, valid when attention_type=="sliced".',
                type: 'DropDown',
                defaultValue: 'auto',
                values: ['auto', 'balanced', 'max', '1', '2', '3', '4', '5', '6', '7', '8'],
            },
            {
                name: 'force_tiled_decode',
                description: 'Whether to enable tiled VAE decode (reduces memory consumption with some performance penalty).',
                type: 'CheckBox',
            },
            {
                name: 'pil_compress_level',
                description: 'The compress_level setting of PIL.Image.save(), used for PNG encoding. All settings are lossless.' +
                    ' 0 = no compression, 1 = fastest with slightly larger filesize, 9 = slowest with smallest filesize.' +
                    ' 1 is typically the best setting.',
                type: 'Input',
                defaultValue: '1',
            },
            {
                name: 'max_queue_size',
                description: 'Maximum number of items in the session queue.',
                type: 'Input',
                defaultValue: '10000',
            },
            {
                name: 'clear_queue_on_startup',
                description: 'Empties session queue on startup.',
                type: 'CheckBox',
            },
            {
                name: 'allow_nodes',
                description: 'List of nodes to allow. Omit to allow all.',
                type: 'Input',
            },
            {
                name: 'deny_nodes',
                description: 'List of nodes to deny. Omit to deny none.',
                type: 'Input',
            },
            {
                name: 'node_cache_size',
                description: 'How many cached nodes to keep in memory.',
                type: 'Input',
                defaultValue: '512',
            },
            {
                name: 'hashing_algorithm',
                description: "Model hashing algorithm for model installs. 'blake3_multi' is best for SSDs. 'blake3_single'" +
                    " is best for spinning disk HDDs. 'random' disables hashing, instead assigning a UUID to models." +
                    " Useful when using a memory db to reduce model installation time, or if you don't care about " +
                    'storing stable hashes for models. Alternatively, any other hashlib algorithm is accepted, ' +
                    'though these are not nearly as performant as blake3.',
                type: 'DropDown',
                defaultValue: 'blake3_single',
                values: [
                    'blake3_multi',
                    'blake3_single',
                    'random',
                    'md5',
                    'sha1',
                    'sha224',
                    'sha256',
                    'sha384',
                    'sha512',
                    'blake2b',
                    'blake2s',
                    'sha3_224',
                    'sha3_256',
                    'sha3_384',
                    'sha3_512',
                    'shake_128',
                    'shake_256',
                ],
            },
            {
                name: 'remote_api_tokens',
                description: 'List of regular expression and token pairs used when downloading models from URLs.' +
                    ' The download URL is tested against the regex, and if it matches, the token is provided in as a Bearer token.',
                type: 'Input',
            },
            {
                name: 'scan_models_on_startup',
                description: 'Scan the models directory on startup, registering orphaned models. This is typically only used' +
                    ' in conjunction with use_memory_db for testing purposes.',
                type: 'CheckBox',
            },
        ],
    },
];

const DOWNLOAD_URL = 'https://github.com/invoke-ai/InvokeAI/releases/download/v5.5.0/InvokeAI-installer-v5.5.0.zip';
const VERSION_NAME = '5.5.0';
const INPUT_ID = 'install_dir';
function startInstall$2(stepper) {
    stepper.initialSteps(['InvokeAI', 'Download', 'Install', 'Directory', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep();
            stepper.downloadFileFromUrl(DOWNLOAD_URL).then(path => {
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
                                const finalDir = selectedDir.result;
                                stepper.utils.verifyFilesExist(finalDir, [isWin ? 'invoke.bat' : 'invoke.sh']).then(exist => {
                                    if (exist) {
                                        stepper.setInstalled(finalDir);
                                        stepper.showFinalStep('success', 'InvokeAI Installation Complete', 'All installation steps have been completed successfully.' +
                                            ' Your InvokeAI environment is now ready for use.');
                                    }
                                    else {
                                        stepper.showFinalStep('error', 'InvokeAI Installation Failed', 'Unable to validate the installation directory containing InvokeAI. ' +
                                            'Please close this window, reopen it, and click "Locate" to select the correct folder.');
                                    }
                                });
                            }
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.verifyFilesExist(targetDirectory, [isWin ? 'invoke.bat' : 'invoke.sh']).then(exist => {
                if (exist) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'InvokeAI Located Successfully', 'Pre-installed InvokeAI detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    stepper.showFinalStep('error', 'Unable to Locate InvokeAI', `Please ensure you have selected the correct folder containing ` +
                        `InvokeAI with the ${isWin ? 'invoke.bat' : 'invoke.sh'} file.`);
                }
            });
        }
    });
}
function startUpdate$2(stepper) {
    stepper.initialSteps([`Download V${VERSION_NAME}`, 'Install', 'Finish']);
    stepper.downloadFileFromUrl(DOWNLOAD_URL).then(path => {
        stepper.utils.decompressFile(path).then(folderPath => {
            stepper.nextStep();
            stepper.runTerminalScript(`${folderPath}/InvokeAI-Installer`, isWin ? 'install.bat' : 'install.sh').then(() => {
                stepper.showFinalStep('success', 'InvokeAI Updated Successfully', `Version ${VERSION_NAME} has been installed successfully.`);
            });
        });
    });
}

const shellCommand = isWin ? 'call invoke.bat' : 'bash ./invoke.sh';
function parseArgsToString(args) {
    let result = isWin ? '@echo off\n\n' : '#!/bin/bash\n\n';
    let argResult = '';
    args.forEach(arg => {
        const argType = getArgumentType(arg.name, invokeArguments);
        if (argType === 'CheckBox') {
            argResult += `${arg.name} `;
        }
        else if (argType === 'File' || argType === 'Directory') {
            argResult += `${arg.name} "${arg.value}" `;
        }
        else {
            argResult += `${arg.name} ${arg.value} `;
        }
    });
    result += lodashExports.isEmpty(argResult) ? shellCommand : `${shellCommand} ${argResult}`;
    return result;
}
function parseStringToArgs(args) {
    const argResult = [];
    const lines = args.split('\n');
    lines.forEach((line) => {
        if (!line.startsWith(shellCommand))
            return;
        // Extract the command line arguments and clear falsy values
        const clArgs = line.split(`${shellCommand} `)[1];
        if (!clArgs)
            return;
        const args = clArgs.split('--').filter(Boolean);
        // Map each argument to an object with id and value
        const result = args.map((arg) => {
            const [id, ...value] = arg.trim().split(' ');
            return {
                name: `--${id}`,
                value: value.join(' ').replace(/"/g, ''),
            };
        });
        // Process each argument
        result.forEach((value) => {
            // Check if the argument exists or valid
            if (isValidArg(value.name, invokeArguments)) {
                if (getArgumentType(value.name, invokeArguments) === 'CheckBox') {
                    argResult.push({ name: value.name, value: '' });
                }
                else {
                    argResult.push({ name: value.name, value: value.value });
                }
            }
        });
    });
    return argResult;
}
const invokeRendererMethods = {
    catchAddress: catchAddress$1,
    parseArgsToString,
    parseStringToArgs,
    manager: {
        startInstall: startInstall$2,
        updater: { updateType: 'stepper', startUpdate: startUpdate$2 },
    },
};

const AllTalk_URL = 'https://github.com/erew123/alltalk_tts';
function startInstall$1(stepper) {
    stepper.initialSteps(['AllTalk TTS', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep();
            stepper.cloneRepository(AllTalk_URL).then(dir => {
                stepper.nextStep();
                stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
                    stepper.setInstalled(dir);
                    stepper.showFinalStep('success', 'AllTalk TTS installation complete!', 'All installation steps completed successfully. Your AllTalk TTS environment is now ready for use.');
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, AllTalk_URL).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'AllTalk TTS located successfully!', 'Pre-installed AllTalk TTS detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    stepper.showFinalStep('error', 'Unable to locate AllTalk TTS!', 'Please ensure you have selected the correct folder containing the AllTalk TTS repository.');
                }
            });
        }
    });
}
function startUpdate$1(stepper, dir) {
    stepper.initialSteps(['Pull Changes', 'Update', 'Finish']);
    stepper.executeTerminalCommands('git pull', dir).then(() => {
        stepper.nextStep();
        stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
            stepper.showFinalStep('success', 'AllTalk TTS Updated Successfully!');
        });
    });
}
const erew123RendererMethods = {
    manager: {
        startInstall: startInstall$1,
        updater: { updateType: 'stepper', startUpdate: startUpdate$1 },
    },
};

function catchAddress(input) {
    if (input.toLowerCase().includes('Installed Packages'.toLowerCase())) {
        return 'http://127.0.0.1:7770';
    }
    else {
        return undefined;
    }
}
const rsxdalvRendererMethods = { catchAddress };

const audioPage = {
    routePath: '/audioGenerationPage',
    cards: [
        {
            id: RSXDALV_ID,
            title: 'Text to Speech',
            description: 'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
                ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
            repoUrl: 'https://github.com/rsxdalv/tts-generation-webui',
            type: 'audio',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0816d031-1165-44aa-9f15-df613f244942/width=300/00000-4072148758.jpeg',
            methods: rsxdalvRendererMethods,
        },
        {
            id: GITMYLO_ID,
            title: 'Audio Generation',
            description: 'A webui for different audio related Neural Networks',
            repoUrl: 'https://github.com/gitmylo/audio-webui',
            type: 'audio',
            arguments: gitmyloArguments,
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a7473108-d6fb-4c9d-97a6-b58ca82bcdfb/width=300/00002-1953665041.jpeg',
            methods: gitmyloRendererMethods,
        },
        {
            id: EREW123_ID,
            title: 'AllTalk TTS',
            description: 'AllTalk is based on the Coqui TTS engine, similar to the Coqui_tts extension for Text generation webUI, ' +
                'however supports a variety of advanced features, such as a settings page, low VRAM support, DeepSpeed, ' +
                'narrator, model finetuning, custom models, wav file maintenance. It can also be used with 3rd Party ' +
                'software via JSON calls.',
            repoUrl: 'https://github.com/erew123/alltalk_tts',
            type: 'audio',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d0f56692-50fc-4e8e-ac8b-02d8ec070417' +
                '/width=300/00006-951269360.jpeg',
            methods: erew123RendererMethods,
        },
    ],
};

const lshqqytigerForgeArguments = lodashExports.cloneDeep(automatic1111Arguments);
const lsSpecifArgs = [
    {
        description: 'Skip installation of onnxruntime; ONNX and Olive will be unavailable',
        name: '--skip-ort',
        type: 'CheckBox',
    },
    {
        description: 'use torch built with cpu',
        name: '--use-cpu-torch',
        type: 'CheckBox',
    },
    {
        description: 'use ZLUDA device as torch device',
        name: '--use-zluda',
        type: 'CheckBox',
    },
    {
        description: 'override torch version',
        name: '--override-torch',
        type: 'Input',
    },
];
const newSection = {
    section: 'AmdGPU',
    items: lsSpecifArgs,
};
const commandLineArgsIndex = lshqqytigerForgeArguments.findIndex(arg => arg.category === 'Command Line Arguments');
if (commandLineArgsIndex !== -1 && lshqqytigerForgeArguments[commandLineArgsIndex].sections) {
    lshqqytigerForgeArguments[commandLineArgsIndex].sections.unshift(newSection);
}

const ONETRAINER_URL = 'https://github.com/Nerogar/OneTrainer';
function startInstall(stepper) {
    stepper.initialSteps(['OneTrainer', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep();
            stepper.cloneRepository(ONETRAINER_URL).then(dir => {
                stepper.nextStep();
                stepper.runTerminalScript(dir, isWin ? 'install.bat' : 'install.sh').then(() => {
                    stepper.setInstalled(dir);
                    stepper.showFinalStep('success', 'OneTrainer installation complete!', 'All installation steps completed successfully. Your OneTrainer environment is now ready for use.');
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, ONETRAINER_URL).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'OneTrainer located successfully!', 'Pre-installed OneTrainer detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    stepper.showFinalStep('error', 'Unable to locate OneTrainer!', 'Please ensure you have selected the correct folder containing the OneTrainer repository.');
                }
            });
        }
    });
}
function startUpdate(stepper, dir) {
    stepper.initialSteps(['Update', 'Finish']);
    stepper.runTerminalScript(dir, isWin ? 'update.bat' : 'update.sh').then(() => {
        stepper.showFinalStep('success', 'OneTrainer Updated Successfully!');
    });
}
const nerogarRendererMethods = {
    manager: {
        startInstall,
        updater: { updateType: 'stepper', startUpdate },
    },
};

const imagePage = {
    routePath: '/imageGenerationPage',
    cards: [
        {
            id: ComfyUI_ID,
            title: 'ComfyUI',
            description: 'This ui will let you design and execute advanced stable diffusion pipelines' +
                ' using a graph/nodes/flowchart based interface.',
            repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
            extensionsDir: '/custom_nodes',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7be14a2-5e23-41df-b653-4ba5b45ad065/width=300/00008-2000176836.jpeg',
            arguments: comfyArguments,
            methods: comfyRendererMethods,
        },
        {
            id: ComfyUI_Zluda_ID,
            title: 'ComfyUI Zluda',
            description: 'The most powerful and modular stable diffusion GUI, api and backend with a graph/nodes interface.' +
                ' Now ZLUDA enhanced  for better AMD GPU performance.',
            repoUrl: 'https://github.com/patientx/ComfyUI-Zluda',
            extensionsDir: '/custom_nodes',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c660d1cf-772f-4068-9a32-3ed76c6ee9e8' +
                '/width=300/00023-3290977700.jpeg',
            arguments: comfyZludaArguments,
            methods: comfyZludaRendererMethods,
        },
        {
            id: AUTOMATIC1111_ID,
            title: 'Stable Diffusion',
            description: 'A web interface for Stable Diffusion, implemented using Gradio library.',
            repoUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9608d0fa-6010-4ff8-b149-86e440ff9254/width=300/00000-3587005815.jpeg',
            arguments: automatic1111Arguments,
            methods: a1RendererMethods,
        },
        {
            id: LSHQQYTIGER_ID,
            title: 'Stable Diffusion AMDGPU',
            description: 'A web interface for Stable Diffusion, implemented using Gradio library.',
            repoUrl: 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3eaf306e-9edc-46bd-89d0-7f7398068e01/width=300/00002-1900763417.jpeg',
            arguments: lshqqytigerArguments,
            methods: a1RendererMethods,
        },
        {
            id: LLLYASVIEL_ID,
            title: 'SD Forge',
            description: 'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
                ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
                'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
            repoUrl: 'https://github.com/lllyasviel/stable-diffusion-webui-forge',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/375d8999-a96f-4dae-98c7-968edcada7ea/width=300/00004-3953235735.jpeg',
            arguments: automatic1111Arguments,
            methods: a1RendererMethods,
        },
        {
            id: LSHQQYTIGER_FORGE_ID,
            title: 'SD Forge AMDGPU',
            description: 'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
                ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
                'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
            repoUrl: 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu-forge',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/61a9d607-08ce-409a-8d5e-e9df25c72d39/width=300/00017-2936809481.jpeg',
            arguments: lshqqytigerForgeArguments,
            methods: a1RendererMethods,
        },
        {
            id: VLADMANDIC_ID,
            title: 'SD Next',
            description: 'Advanced Implementation of Stable Diffusion and other Diffusion-based generative image models',
            repoUrl: 'https://github.com/vladmandic/automatic',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e396ff35-0cf7-4121-8e69-4dd80b2429fa/width=300/00002-1070114876.jpeg',
            arguments: vladmandicArguments,
            methods: vladRendererMethods,
        },
        {
            id: MCMONKEYPROJECTS_ID,
            title: 'SwarmUI',
            description: 'A Modular AI Image Generation Web-User-Interface, with an emphasis on making powertools ' +
                'easily accessible, high performance, and extensibility. Supports Stable Diffusion, Flux, ' +
                'etc. AI image models, with plans to support AI video, audio, and more in the future.',
            repoUrl: 'https://github.com/mcmonkeyprojects/SwarmUI',
            type: 'image',
            extensionsDir: '/src/Extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9dac48c1-20fd-4fb0-b84b-f5f533c5cdc5/width=300/00014-3815479772.jpeg',
            arguments: mcMonkeyArguments,
            methods: mcMonkeyRendererMethods,
        },
        {
            id: BMALTAIS_ID,
            title: "Kohya's GUI",
            description: "This repository primarily provides a Gradio GUI for Kohya's Stable Diffusion trainers." +
                'The GUI allows you to set the training parameters and generate and run the required CLI commands to train the model.',
            repoUrl: 'https://github.com/bmaltais/kohya_ss',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db3575cb-162a-4436-b5d0-f9fbf9ed1140/width=300/00002-4073703889.jpeg',
            arguments: bmaltaisArguments,
            methods: bmaltaisRendererMethods,
        },
        {
            id: ANAPNOE_ID,
            title: 'SD UI-UX',
            description: 'A bespoke, highly adaptable user interface for the Stable Diffusion, utilizing the powerful Gradio library.' +
                ' This cutting-edge browser interface offer an unparalleled level of customization and optimization for users,' +
                ' setting it apart from other web interfaces.',
            repoUrl: 'https://github.com/anapnoe/stable-diffusion-webui-ux',
            type: 'image',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/026dfc41-f150-4b5c-9bbd-b959b833f059/width=300/00004-1682382699.jpeg',
            arguments: automatic1111Arguments,
            methods: a1RendererMethods,
        },
        {
            id: NEROGAR_ID,
            title: 'OneTrainer',
            description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
            repoUrl: 'https://github.com/Nerogar/OneTrainer',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
                '/width=300/00005-1318253062.jpeg',
            methods: nerogarRendererMethods,
        },
        {
            id: INVOKEAI_ID,
            title: 'Invoke AI',
            description: 'Invoke is a leading creative engine built to empower professionals and enthusiasts alike. Generate and create' +
                ' stunning visual media using the latest AI-driven technologies. Invoke offers an industry leading web-based UI,' +
                ' and serves as the foundation for multiple commercial products.',
            repoUrl: 'https://github.com/invoke-ai/InvokeAI',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a5d8728-2a0f-45d9-ade4-baceb04fa023' +
                '/width=300/00002-3715244638.jpeg',
            arguments: invokeArguments,
            methods: invokeRendererMethods,
        },
    ],
};

const textPage = {
    routePath: '/textGenerationPage',
    cards: [
        {
            id: OOBABOOGA_ID,
            title: 'Text Generation',
            description: 'A Gradio web UI for Large Language Models.',
            repoUrl: 'https://github.com/oobabooga/text-generation-webui',
            type: 'text',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/width=300/00000-3546450635.jpeg',
            arguments: oobaboogaArguments,
            methods: oobaRendererMethods,
        },
        {
            id: SILLYTAVERN_ID,
            title: 'SillyTavern',
            description: 'SillyTavern provides a single unified interface for many LLM APIs (KoboldAI/CPP, Horde, NovelAI, Ooba, Tabby, OpenAI,' +
                ' OpenRouter, Claude, Mistral and more), a mobile-friendly layout, Visual Novel Mode, Automatic1111 & ComfyUI API image' +
                " generation integration, TTS, WorldInfo (lorebooks), customizable UI, auto-translate, more prompt options than you'd" +
                ' ever want or need, and endless growth potential via third-party extensions.',
            repoUrl: 'https://github.com/SillyTavern/SillyTavern',
            type: 'text',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8691d17f-0414-4280-a743-e4b840250807/width=300/00015-757708719.jpeg',
            arguments: sillyArguments,
            methods: sillyRendererMethods,
        },
    ],
};

const rendererModules = [imagePage, textPage, audioPage];
function setCurrentBuild(build) {
    console.log(build);
}

export { rendererModules as default, setCurrentBuild };
