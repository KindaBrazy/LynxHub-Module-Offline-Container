import { ap as flowiseArguments, aq as Flow_RM, ak as FLOWISEAI_ID, ar as GeminiCli_RM, as as geminiCliArguments, am as GeminiCli_ID, at as ClaudeCode_RM, au as claudeCodeArguments, an as CLAUDE_CODE_ID, av as n8nArguments, aw as N8N_RM, al as N8N_ID, i as isWin, ax as CardInfo, ay as catchAddress$3, az as GitInstaller, T as TTS_ID, aA as AG_RM, aB as gitmyloArguments, m as AG_ID, A as ALLTALK_ID, ao as APPLIO_ID, v as isValidArg, u as getArgumentType, w as comfyuizludaArguments, H as parseStringToArgs$1, G as parseArgsToString$1, aC as fetchExtensionList$1, aD as lodashExports, aE as automatic1111Arguments, aF as COMFYUI_RM, aG as comfyuiArguments, C as COMFYUI_ID, ah as SD_FORGE_ID, aH as INVOKE_RM, x as INVOKE_ID, aI as SD_NEXT_RM, aJ as vladmandicArguments, L as SD_NEXT_ID, F as A1_ID, t as COMFYUI_ZLUDA_ID, aK as SD_AMD_RM, aL as lshqqytigerArguments, S as SD_AMD_ID, ai as SD_FORGE_AMD_ID, aM as SWARM_RM, aN as mcMonkeyArguments, O as SWARM_ID, aj as SD_UIUX_ID, aO as isPagesFixed, ad as ONETRAINER_ID, aP as KOHYA_GUI_RM, aQ as bmaltaisArguments, aa as KOHYA_ID, aR as AITOOLKIT_RM, aS as aiToolkitArguments, a4 as AITOOLKIT_ID, aT as SMARTGALLERY_RM, aU as smartGalleryArguments, ae as SMARTGALLERY_ID, aV as LORA_MANAGER_RM, aW as loraManagerArguments, a7 as LORA_MANAGER_ID, aX as TG_RM, aY as oobaboogaArguments, a0 as TG_ID, aZ as openArguments, a_ as OPEN_WEBUI_RM, W as OPEN_WEBUI_ID, R as BOLT_DIY_ID, a$ as SILLYTAVERN_RM, b0 as sillyArguments, Z as SILLYTAVERN_ID, U as LoLLMS_ID } from './RendererMethods_zfrDft.mjs';

const agentsPage = {
    routePath: 'agents_page',
    cards: [
        {
            id: FLOWISEAI_ID,
            title: 'Flowise',
            description: 'Drag & drop UI to build your customized LLM flow',
            repoUrl: 'https://github.com/FlowiseAI/Flowise',
            type: 'text',
            methods: Flow_RM,
            arguments: flowiseArguments,
            installationType: 'others',
        },
        {
            id: GeminiCli_ID,
            title: 'Gemini CLI',
            description: 'An open-source AI agent that brings the power of Gemini directly into your terminal.',
            repoUrl: 'https://github.com/google-gemini/gemini-cli',
            type: 'text',
            arguments: geminiCliArguments,
            methods: GeminiCli_RM,
            installationType: 'others',
        },
        {
            id: CLAUDE_CODE_ID,
            title: 'Claude Code',
            description: `Anthropic's agentic coding tool for your terminal, integrated as an AI agent.`,
            repoUrl: 'https://github.com/anthropics/claude-code',
            type: 'text',
            arguments: claudeCodeArguments,
            methods: ClaudeCode_RM,
            installationType: 'others',
        },
        {
            id: N8N_ID,
            title: 'N8N',
            description: 'Fair-code workflow automation platform with native AI capabilities. ' +
                'Combine visual building with custom code, self-host or cloud, 400+ integrations.',
            repoUrl: 'https://github.com/n8n-io/n8n',
            type: 'text',
            methods: N8N_RM,
            installationType: 'others',
            arguments: n8nArguments,
        },
    ],
};

const URL$4 = 'https://github.com/erew123/alltalk_tts';
function startInstall$a(stepper) {
    stepper.initialSteps(['AllTalk TTS', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep().then(() => {
                stepper.cloneRepository(URL$4).then(dir => {
                    stepper.nextStep().then(() => {
                        stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
                            stepper.setInstalled(dir);
                            stepper.showFinalStep('success', 'AllTalk TTS installation complete!', 'All installation steps completed successfully. Your AllTalk TTS environment is now ready for use.');
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, URL$4).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'AllTalk TTS located successfully!', 'Pre-installed AllTalk TTS detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    stepper.utils
                        .verifyFilesExist(targetDirectory, [isWin ? 'start_alltalk.bat' : 'start_alltalk.sh'])
                        .then(isExist => {
                        if (isExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.showFinalStep('success', 'AllTalk TTS located successfully!', 'Detected a manual installation of AllTalk TTS. Note: Because this is not a Git repository,' +
                                ' automatic updates and certain version-dependent features may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', 'Unable to locate AllTalk TTS!', 'Please ensure you have selected the correct folder containing the AllTalk TTS repository.');
                        }
                    });
                }
            });
        }
    });
}
function startUpdate$2(stepper, dir) {
    stepper.initialSteps(['Pull Changes', 'Update', 'Finish']);
    if (dir) {
        stepper.executeTerminalCommands('git pull', dir).then(() => {
            stepper.nextStep().then(() => {
                stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
                    stepper.setUpdated();
                    stepper.showFinalStep('success', 'AllTalk TTS Updated Successfully!');
                });
            });
        });
    }
    else {
        stepper.showFinalStep('error', 'Unable to update AllTalk TTS');
    }
}
async function cardInfo$a(api, callback) {
    return CardInfo(URL$4, undefined, api, callback);
}
function catchAddress$2(input) {
    const gradioDarkPattern = /Gradio Dark.*?:\s*.*?(https?:\/\/.*?)(?=\s|\u001b|$)/i;
    const match = input.match(gradioDarkPattern);
    if (match) {
        return match[1];
    }
    return undefined;
}
const ALLTALK_RM = {
    cardInfo: cardInfo$a,
    catchAddress: catchAddress$2,
    manager: {
        startInstall: startInstall$a,
        updater: { updateType: 'stepper', startUpdate: startUpdate$2 },
    },
};

const URL$3 = 'https://github.com/IAHispano/Applio';
function startInstall$9(stepper) {
    stepper.initialSteps(['Applio', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep().then(() => {
                stepper.cloneRepository(URL$3).then(dir => {
                    stepper.nextStep().then(() => {
                        const installCmd = isWin ? '.\\run-install.bat' : 'sh run-install.sh';
                        stepper.executeTerminalCommands(installCmd, dir).then(() => {
                            stepper.setInstalled(dir);
                            stepper.showFinalStep('success', 'Applio Installation Complete!', 'Applio has been successfully installed. You can now start generating audio.');
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, URL$3).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'Applio Found!', 'Existing Applio installation located.');
                }
                else {
                    stepper.utils
                        .verifyFilesExist(targetDirectory, [isWin ? 'run-applio.bat' : 'run-applio.sh'])
                        .then(isExist => {
                        if (isExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.showFinalStep('success', 'Applio located successfully!', 'Detected a manual installation of Applio. Note: Because this is not a Git repository,' +
                                ' automatic updates and certain version-dependent features may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', 'Invalid Applio Directory', 'The selected directory does not appear to contain a valid Applio installation.');
                        }
                    });
                }
            });
        }
    });
}
async function cardInfo$9(api, callback) {
    return CardInfo(URL$3, undefined, api, callback);
}
const APPLIO_RM = {
    catchAddress: catchAddress$3,
    cardInfo: cardInfo$9,
    manager: {
        startInstall: startInstall$9,
        updater: { updateType: 'git' },
    },
};

const URL$2 = 'https://github.com/rsxdalv/TTS-WebUI';
function catchAddress$1(input) {
    if (input.toLowerCase().includes('Installed Packages'.toLowerCase())) {
        return 'http://127.0.0.1:7770';
    }
    else {
        return undefined;
    }
}
function startInstall$8(stepper) {
    GitInstaller('Text to Speech', URL$2, stepper, [isWin ? 'start_tts_webui.bat' : 'start_tts_webui.sh']);
}
async function cardInfo$8(api, callback) {
    return CardInfo(URL$2, '/extensions', api, callback);
}
const TTS_RM = {
    catchAddress: catchAddress$1,
    cardInfo: cardInfo$8,
    manager: { startInstall: startInstall$8, updater: { updateType: 'git' } },
};

const audioPage = {
    routePath: 'audioGen_page',
    cards: [
        {
            id: TTS_ID,
            title: 'Text to Speech',
            description: 'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
                ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
            repoUrl: 'https://github.com/rsxdalv/TTS-WebUI',
            type: 'audio',
            extensionsDir: '/extensions',
            methods: TTS_RM,
            installationType: 'git',
        },
        {
            id: AG_ID,
            title: 'Audio Generation',
            description: 'A webui for different audio related Neural Networks',
            repoUrl: 'https://github.com/gitmylo/audio-webui',
            type: 'audio',
            arguments: gitmyloArguments,
            extensionsDir: '/extensions',
            methods: AG_RM,
            installationType: 'git',
        },
        {
            id: ALLTALK_ID,
            title: 'AllTalk TTS',
            description: 'AllTalk is based on the Coqui TTS engine, similar to the Coqui_tts extension for Text generation webUI, ' +
                'however supports a variety of advanced features, such as a settings page, low VRAM support, DeepSpeed, ' +
                'narrator, model finetuning, custom models, wav file maintenance. It can also be used with 3rd Party ' +
                'software via JSON calls.',
            repoUrl: 'https://github.com/erew123/alltalk_tts',
            type: 'audio',
            methods: ALLTALK_RM,
            installationType: 'git',
        },
        {
            id: APPLIO_ID,
            title: 'Applio',
            description: 'A simple, high-quality voice conversion tool focused on ease of use and performance.',
            repoUrl: 'https://github.com/IAHispano/Applio',
            type: 'audio',
            methods: APPLIO_RM,
            installationType: 'git',
        },
    ],
};

const URL$1 = 'https://github.com/Nerogar/OneTrainer';
function startInstall$7(stepper) {
    stepper.initialSteps(['OneTrainer', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep().then(() => {
                stepper.cloneRepository(URL$1).then(dir => {
                    stepper.nextStep().then(() => {
                        stepper.runTerminalScript(dir, isWin ? 'install.bat' : 'install.sh').then(() => {
                            stepper.setInstalled(dir);
                            stepper.showFinalStep('success', 'OneTrainer installation complete!', 'All installation steps completed successfully. Your OneTrainer environment is now ready for use.');
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, URL$1).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', 'OneTrainer located successfully!', 'Pre-installed OneTrainer detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    stepper.utils.verifyFilesExist(targetDirectory, [isWin ? 'start-ui.bat' : 'start-ui.sh']).then(isExist => {
                        if (isExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.showFinalStep('success', `OneTrainer located successfully!`, `Detected a manual installation of OneTrainer. Note: Because this is not a Git repository,` +
                                ' automatic updates and certain version-dependent features may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', 'Unable to locate OneTrainer!', 'Please ensure you have selected the correct folder containing the OneTrainer repository.');
                        }
                    });
                }
            });
        }
    });
}
function startUpdate$1(stepper, dir) {
    stepper.initialSteps(['Update', 'Finish']);
    if (dir) {
        stepper.runTerminalScript(dir, isWin ? 'update.bat' : 'update.sh').then(() => {
            stepper.setUpdated();
            stepper.showFinalStep('success', 'OneTrainer Updated Successfully!');
        });
    }
    else {
        stepper.showFinalStep('error', 'Unable to update OneTrainer');
    }
}
async function cardInfo$7(api, callback) {
    return CardInfo(URL$1, undefined, api, callback);
}
const ONETRAINER_RM = {
    cardInfo: cardInfo$7,
    manager: {
        startInstall: startInstall$7,
        updater: { updateType: 'stepper', startUpdate: startUpdate$1 },
    },
};

const URL = 'https://github.com/patientx/ComfyUI-Zluda';
function parseArgsToString(args) {
    let result = '';
    let commandLineArgs = '';
    const envVars = {};
    // Separate environment variables from command line arguments
    args.forEach(arg => {
        if (arg.name === 'PYTHON' ||
            arg.name === 'GIT' ||
            arg.name === 'VENV_DIR' ||
            arg.name === 'MIOPEN_FIND_MODE' ||
            arg.name === 'MIOPEN_LOG_LEVEL' ||
            arg.name === 'ZLUDA_COMGR_LOG_LEVEL' ||
            arg.name === 'TRITON_OVERRIDE_ARCH') {
            envVars[arg.name] = arg.value;
            return;
        }
        // Build command line arguments
        const argType = getArgumentType(arg.name, comfyuizludaArguments);
        if (argType === 'CheckBox') {
            commandLineArgs += `${arg.name} `;
        }
        else if (argType === 'File' || argType === 'Directory') {
            commandLineArgs += `${arg.name} "${arg.value}" `;
        }
        else {
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
function parseStringToArgs(args) {
    const argResult = [];
    const lines = args.split('\n');
    lines.forEach((line) => {
        if (line.startsWith('set')) {
            const argName = line.split('=')[0].split(' ')[1].trim();
            const argValue = line.split('=')[1].trim();
            if (argName === 'PYTHON' || argName === 'VENV_DIR' || argName === 'ZLUDA_COMGR_LOG_LEVEL') {
                argResult.push({ name: argName, value: argValue });
            }
        }
        else if (line.includes('%PYTHON% main.py')) {
            // Extract the command line arguments and clear falsy values
            const clArgs = line.split('%PYTHON% main.py ')[1];
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
                if (isValidArg(value.name, comfyuizludaArguments)) {
                    if (getArgumentType(value.name, comfyuizludaArguments) === 'CheckBox') {
                        argResult.push({ name: value.name, value: '' });
                    }
                    else {
                        argResult.push({ name: value.name, value: value.value });
                    }
                }
            });
        }
    });
    return argResult;
}
async function fetchExtensionList() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ltdrdata/ComfyUI-Manager/main/custom-node-list.json');
        const extensions = await response.json();
        return extensions.custom_nodes.map((extension) => ({
            title: extension.title,
            description: extension.description,
            url: extension.reference,
        }));
    }
    catch (e) {
        console.error(e);
        return [];
    }
}
const COMFYUI_ZLUDA_URL = 'https://github.com/patientx/ComfyUI-Zluda';
const customArguments = [
    { name: 'PYTHON', value: '%~dp0venv\\Scripts\\python.exe' },
    { name: 'VENV_DIR', value: './venv' },
    {
        name: '--disable-auto-launch',
        value: '',
    },
    {
        name: '--use-quad-cross-attention',
        value: '',
    },
    {
        name: '--reserve-vram',
        value: '0.9',
    },
    {
        name: '--disable-async-offload',
        value: '',
    },
    {
        name: '--disable-pinned-memory',
        value: '',
    },
];
function startInstall$6(stepper) {
    stepper.initialSteps(['ComfyUI Zluda', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep().then(() => {
                stepper.cloneRepository(COMFYUI_ZLUDA_URL).then(dir => {
                    stepper.nextStep().then(() => {
                        stepper.runTerminalScript(dir, 'install-n.bat').then(() => {
                            stepper.setInstalled(dir);
                            stepper.postInstall.config({
                                customArguments: {
                                    presetName: 'Zluda Config',
                                    customArguments,
                                },
                            });
                            stepper.showFinalStep('success', 'ComfyUI-Zluda installation complete!', 'All installation steps completed successfully. Your ComfyUI-Zluda environment is now ready for use.');
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            // First try git validation
            stepper.utils.validateGitRepository(targetDirectory, COMFYUI_ZLUDA_URL).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.postInstall.config({
                        customArguments: {
                            presetName: 'Zluda Config',
                            customArguments,
                        },
                    });
                    stepper.showFinalStep('success', 'ComfyUI-Zluda located successfully!', 'Pre-installed ComfyUI-Zluda detected. Installation skipped as your existing setup is ready to use.');
                }
                else {
                    // Fallback to file-based detection if git validation fails
                    stepper.utils.verifyFilesExist(targetDirectory, ['comfyui-n.bat', 'comfyui-user.bat']).then(filesExist => {
                        if (filesExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.postInstall.config({
                                customArguments: {
                                    presetName: 'Zluda Config',
                                    customArguments,
                                },
                            });
                            stepper.showFinalStep('success', 'ComfyUI-Zluda located successfully!', 'Pre-installed ComfyUI-Zluda detected. Installation skipped as your existing setup is ready to use.' +
                                ' Note: Git repository not detected - updating may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', 'Unable to locate ComfyUI-Zluda!', 'Please ensure you have selected the correct folder containing the ComfyUI-Zluda repository.');
                        }
                    });
                }
            });
        }
    });
}
async function cardInfo$6(api, callback) {
    return CardInfo(URL, '/custom_nodes', api, callback);
}
const COMFYUI_ZLUDA_RM = {
    catchAddress: catchAddress$3,
    fetchExtensionList,
    parseArgsToString,
    parseStringToArgs,
    cardInfo: cardInfo$6,
    manager: { startInstall: startInstall$6, updater: { updateType: 'git' } },
};

const invokeArguments = [
    {
        category: 'Command Line Arguments',
        sections: [
            {
                section: 'Network & Server',
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
                ],
            },
            {
                section: 'Directories',
                items: [
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
                        name: 'workflow_thumbnails_dir',
                        description: 'Path to directory for workflow thumbnails.',
                        type: 'Directory',
                    },
                ],
            },
            {
                section: 'Logging',
                items: [
                    {
                        name: 'log_tokenization',
                        description: 'Enable logging of parsed prompt tokens.',
                        type: 'CheckBox',
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
                ],
            },
            {
                section: 'Development & Profiling',
                items: [
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
                ],
            },
            {
                section: 'Memory & Performance',
                items: [
                    {
                        name: 'max_cache_ram_gb',
                        description: 'The maximum amount of CPU RAM to use for model caching in GB. If unset,' +
                            ' the limit will be configured based on the available RAM. It is recommended to leave this unset.',
                        type: 'Input',
                    },
                    {
                        name: 'max_cache_vram_gb',
                        description: 'The amount of VRAM to use for model caching in GB. If unset, the limit' +
                            ' will be configured based on the available VRAM and device_working_mem_gb.' +
                            ' It is recommended to leave this unset.',
                        type: 'Input',
                    },
                    {
                        name: 'device_working_mem_gb',
                        description: 'The amount of working memory to keep available on the compute device (in GB).' +
                            ' Has no effect if running on CPU. If you are experiencing OOM errors, try increasing this value.',
                        type: 'Input',
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
                        name: 'model_cache_keep_alive_min',
                        description: 'How long to keep models in cache after last use, in minutes. A value of 0 (the default)' +
                            ' means models are kept in cache indefinitely. If no model generations occur within the timeout' +
                            ' period, the model cache is cleared using the same logic as the "Clear Model Cache" button.',
                        type: 'Input',
                        defaultValue: '0',
                    },
                    {
                        name: 'enable_partial_loading',
                        description: 'Enable partial loading of models. Reduces VRAM requirements (at the cost of slower speed)' +
                            ' by streaming the model from RAM to VRAM as needed.',
                        type: 'CheckBox',
                    },
                    {
                        name: 'keep_ram_copy_of_weights',
                        description: "Whether to keep a full RAM copy of a model's weights when loaded in VRAM." +
                            ' Increases RAM usage but speeds up model switching and LoRA patching.',
                        type: 'CheckBox',
                    },
                    {
                        name: 'pytorch_cuda_alloc_conf',
                        description: 'Configure the Torch CUDA memory allocator (e.g., "backend:cudaMallocAsync").' +
                            ' Impacts peak VRAM and performance. Requires experimentation.',
                        type: 'Input',
                    },
                    {
                        name: 'device',
                        description: 'Preferred execution device. auto will choose the device depending on the hardware platform,' +
                            ' installed torch capabilities, and supports cuda:N device numbers.',
                        type: 'DropDown',
                        defaultValue: 'auto',
                        values: ['auto', 'cpu', 'cuda', 'mps', 'cuda:N'],
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
                ],
            },
            {
                section: 'Features & Misc',
                items: [
                    {
                        name: 'patchmatch',
                        description: 'Enable patchmatch inpaint code.',
                        type: 'CheckBox',
                    },
                    {
                        name: 'pil_compress_level',
                        description: 'The compress_level setting of PIL.Image.save(), used for PNG encoding. All settings are lossless.' +
                            ' 0 = no compression, 1 = fastest (slightly larger file), 9 = slowest (smallest file). 1 is recommended.',
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
                        description: "Model hashing algorithm for model installs. 'blake3_multi' (SSD), 'blake3_single'" +
                            " (HDD). 'random' disables hashing (UUID). Other hashlib algos supported but slower.",
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
                        description: 'List of regex/token pairs for model downloads. If URL matches regex, token is used as Bearer token.',
                        type: 'Input',
                    },
                    {
                        name: 'scan_models_on_startup',
                        description: 'Scan models directory on startup to register orphaned models. Typically only used with' +
                            ' use_memory_db for testing.',
                        type: 'CheckBox',
                    },
                    {
                        name: 'unsafe_disable_picklescan',
                        description: 'UNSAFE. Disable the picklescan security check during model installation.' +
                            ' Recommended only for development and testing purposes.',
                        type: 'CheckBox',
                    },
                    {
                        name: 'allow_unknown_models',
                        description: 'Allow installation of models that cannot be identified. If enabled, models will be marked as' +
                            ' unknown in the database with no metadata. If disabled, unknown models' +
                            ' will be rejected during installation.',
                        type: 'CheckBox',
                    },
                ],
            },
        ],
    },
];

const A1_URL = 'https://github.com/AUTOMATIC1111/stable-diffusion-webui';
function startInstall$5(stepper) {
    GitInstaller('Automatic1111', A1_URL, stepper, [isWin ? 'webui-user.bat' : 'webui.sh']);
}
async function cardInfo$5(api, callback) {
    return CardInfo(A1_URL, '/extensions', api, callback);
}
const A1_RM = {
    catchAddress: catchAddress$3,
    fetchExtensionList: fetchExtensionList$1,
    parseArgsToString: parseArgsToString$1,
    parseStringToArgs: parseStringToArgs$1,
    cardInfo: cardInfo$5,
    manager: { startInstall: startInstall$5, updater: { updateType: 'git' } },
};

const SD_FORGE_URL = 'https://github.com/lllyasviel/stable-diffusion-webui-forge';
function startInstall$4(stepper) {
    GitInstaller('SD Forge', SD_FORGE_URL, stepper, [isWin ? 'webui-user.bat' : 'webui.sh']);
}
async function cardInfo$4(api, callback) {
    return CardInfo(SD_FORGE_URL, '/extensions', api, callback);
}
const SD_FORGE_RM = {
    catchAddress: catchAddress$3,
    fetchExtensionList: fetchExtensionList$1,
    parseArgsToString: parseArgsToString$1,
    parseStringToArgs: parseStringToArgs$1,
    cardInfo: cardInfo$4,
    manager: { startInstall: startInstall$4, updater: { updateType: 'git' } },
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

const SdAMD_URL$1 = 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu-forge';
function startInstall$3(stepper) {
    GitInstaller('SD Forge AMDGPU', SdAMD_URL$1, stepper, [isWin ? 'webui-user.bat' : 'webui.sh']);
}
async function cardInfo$3(api, callback) {
    return CardInfo(SdAMD_URL$1, 'RendererMethods', api, callback);
}
const SD_FORGE_AMD_RM = {
    catchAddress: catchAddress$3,
    fetchExtensionList: fetchExtensionList$1,
    parseArgsToString: parseArgsToString$1,
    parseStringToArgs: parseStringToArgs$1,
    cardInfo: cardInfo$3,
    manager: { startInstall: startInstall$3, updater: { updateType: 'git' } },
};

const SdAMD_URL = 'https://github.com/anapnoe/stable-diffusion-webui-ux';
function startInstall$2(stepper) {
    GitInstaller('SD UI-UX', SdAMD_URL, stepper, [isWin ? 'webui-user.bat' : 'webui.sh']);
}
async function cardInfo$2(api, callback) {
    return CardInfo(SdAMD_URL, '/extensions', api, callback);
}
const SD_UIUX_RM = {
    catchAddress: catchAddress$3,
    fetchExtensionList: fetchExtensionList$1,
    parseArgsToString: parseArgsToString$1,
    parseStringToArgs: parseStringToArgs$1,
    cardInfo: cardInfo$2,
    manager: { startInstall: startInstall$2, updater: { updateType: 'git' } },
};

/* eslint max-len: 0 */
const imagePage = {
    routePath: 'imageGen_page',
    cards: [
        {
            id: COMFYUI_ID,
            title: 'ComfyUI',
            description: 'This ui will let you design and execute advanced stable diffusion pipelines' +
                ' using a graph/nodes/flowchart based interface.',
            repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
            extensionsDir: '/custom_nodes',
            type: 'image',
            arguments: comfyuiArguments,
            methods: COMFYUI_RM,
            installationType: 'git',
        },
        {
            id: SD_FORGE_ID,
            title: 'SD Forge',
            description: 'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
                ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
                'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
            repoUrl: 'https://github.com/lllyasviel/stable-diffusion-webui-forge',
            extensionsDir: '/extensions',
            type: 'image',
            arguments: automatic1111Arguments,
            methods: SD_FORGE_RM,
            installationType: 'git',
        },
        {
            id: INVOKE_ID,
            title: 'InvokeAI',
            description: 'Invoke is a leading creative engine built to empower professionals and enthusiasts alike. Generate and create' +
                ' stunning visual media using the latest AI-driven technologies. Invoke offers an industry leading web-based UI,' +
                ' and serves as the foundation for multiple commercial products.',
            repoUrl: 'https://github.com/invoke-ai/InvokeAI',
            type: 'image',
            methods: INVOKE_RM,
            arguments: invokeArguments,
            installationType: 'others',
        },
        {
            id: SD_NEXT_ID,
            title: 'SD Next',
            description: 'Advanced Implementation of Stable Diffusion and other Diffusion-based generative image models',
            repoUrl: 'https://github.com/vladmandic/sdnext',
            extensionsDir: '/extensions',
            type: 'image',
            arguments: vladmandicArguments,
            methods: SD_NEXT_RM,
            installationType: 'git',
        },
        {
            id: A1_ID,
            title: 'Stable Diffusion',
            description: 'A web interface for Stable Diffusion, implemented using Gradio library.',
            repoUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
            extensionsDir: '/extensions',
            type: 'image',
            arguments: automatic1111Arguments,
            methods: A1_RM,
            installationType: 'git',
        },
        {
            id: COMFYUI_ZLUDA_ID,
            title: 'ComfyUI Zluda',
            description: 'The most powerful and modular stable diffusion GUI, api and backend with a graph/nodes interface.' +
                ' Now ZLUDA enhanced  for better AMD GPU performance.',
            repoUrl: 'https://github.com/patientx/ComfyUI-Zluda',
            extensionsDir: '/custom_nodes',
            type: 'image',
            arguments: comfyuizludaArguments,
            methods: COMFYUI_ZLUDA_RM,
            installationType: 'git',
        },
        {
            id: SD_AMD_ID,
            title: 'Stable Diffusion AMDGPU',
            description: 'A web interface for Stable Diffusion, implemented using Gradio library.',
            repoUrl: 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu',
            extensionsDir: '/extensions',
            type: 'image',
            arguments: lshqqytigerArguments,
            methods: SD_AMD_RM,
            installationType: 'git',
        },
        {
            id: SD_FORGE_AMD_ID,
            title: 'SD Forge AMDGPU',
            description: 'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
                ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
                'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
            repoUrl: 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu-forge',
            extensionsDir: '/extensions',
            type: 'image',
            arguments: lshqqytigerForgeArguments,
            methods: SD_FORGE_AMD_RM,
            installationType: 'git',
        },
        {
            id: SWARM_ID,
            title: 'SwarmUI',
            description: 'A Modular AI Image Generation Web-User-Interface, with an emphasis on making powertools ' +
                'easily accessible, high performance, and extensibility. Supports Stable Diffusion, Flux, ' +
                'etc. AI image models, with plans to support AI video, audio, and more in the future.',
            repoUrl: 'https://github.com/mcmonkeyprojects/SwarmUI',
            type: 'image',
            extensionsDir: '/src/Extensions',
            arguments: mcMonkeyArguments,
            methods: SWARM_RM,
            installationType: 'git',
        },
        {
            id: SD_UIUX_ID,
            title: 'SD UI-UX',
            description: 'A bespoke, highly adaptable user interface for the Stable Diffusion, utilizing the powerful Gradio library.' +
                ' This cutting-edge browser interface offer an unparalleled level of customization and optimization for users,' +
                ' setting it apart from other web interfaces.',
            repoUrl: 'https://github.com/anapnoe/stable-diffusion-webui-ux',
            type: 'image',
            extensionsDir: '/extensions',
            arguments: automatic1111Arguments,
            methods: SD_UIUX_RM,
            installationType: 'git',
        },
    ],
};
if (!isPagesFixed) {
    imagePage.cards.push({
        id: ONETRAINER_ID,
        title: 'OneTrainer',
        description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
        repoUrl: 'https://github.com/Nerogar/OneTrainer',
        type: 'image',
        methods: ONETRAINER_RM,
        installationType: 'git',
    }, {
        id: KOHYA_ID,
        title: "Kohya's GUI",
        description: "This repository primarily provides a Gradio GUI for Kohya's Stable Diffusion trainers." +
            'The GUI allows you to set the training parameters and generate and run the required CLI commands to train the model.',
        repoUrl: 'https://github.com/bmaltais/kohya_ss',
        type: 'image',
        arguments: bmaltaisArguments,
        methods: KOHYA_GUI_RM,
        installationType: 'git',
    }, {
        id: AITOOLKIT_ID,
        title: 'AI Toolkit',
        description: 'AI Toolkit is an all-in-one training suite for diffusion models. Supports training LoRA models for FLUX.1, ' +
            'Stable Diffusion, and other diffusion models on consumer-grade hardware. Features a web-based UI for easy ' +
            'configuration and monitoring of training jobs.',
        repoUrl: 'https://github.com/ostris/ai-toolkit',
        type: 'image',
        arguments: aiToolkitArguments,
        methods: AITOOLKIT_RM,
        installationType: 'git',
    }, {
        id: SMARTGALLERY_ID,
        title: 'SmartGallery',
        description: 'A fast, offline-capable gallery for ComfyUI outputs with workflow extraction. Browse and manage your ' +
            'generated images and videos with automatic thumbnail generation, workflow metadata extraction, and ' +
            'advanced filtering. Works independently of ComfyUI.',
        repoUrl: 'https://github.com/biagiomaf/smart-comfyui-gallery',
        type: 'image',
        arguments: smartGalleryArguments,
        methods: SMARTGALLERY_RM,
        installationType: 'git',
    }, {
        id: LORA_MANAGER_ID,
        title: 'ComfyUI LoRA Manager',
        description: 'A comprehensive toolset that streamlines organizing, downloading, and applying LoRA models in ComfyUI. ' +
            'Features recipe management, checkpoint organization, one-click workflow integration, and a browser extension ' +
            'for Civitai. Access the interface at http://localhost:8188/loras',
        repoUrl: 'https://github.com/willmiao/ComfyUI-Lora-Manager',
        type: 'image',
        arguments: loraManagerArguments,
        methods: LORA_MANAGER_RM,
        installationType: 'git',
    });
}

const REPO_URL = 'https://github.com/stackblitz-labs/bolt.diy';
const StarterSteps = ['Start', 'Check NodeJS', 'Bolt.Diy', 'Packages', 'Done!'];
function startInstall$1(stepper) {
    const next = () => stepper.nextStep();
    const progress = (message) => stepper.progressBar(true, message);
    const checkNode = () => stepper.ipc.invoke('is_nodejs_installed');
    const installPackages = (dir) => stepper.executeTerminalCommands('npm i', dir);
    const installBolt = () => {
        stepper.cloneRepository(REPO_URL).then(dir => {
            next().then(() => {
                installPackages(dir).then(() => {
                    stepper.setInstalled(dir);
                    stepper.showFinalStep('success', 'Installation Complete!', 'Your Bolt.Diy environment is ready. Enjoy!');
                });
            });
        });
    };
    stepper.initialSteps(StarterSteps);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            next().then(() => {
                progress('Checking for NodeJS availability...');
                checkNode().then(isNodeAvailable => {
                    if (isNodeAvailable) {
                        next().then(() => installBolt());
                    }
                    else {
                        stepper.showFinalStep('error', 'NodeJS is not installed!', 'Please install NodeJS LTS and try again.');
                    }
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, REPO_URL).then(isValid => {
                const title = 'Bolt.Diy';
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', `${title} located successfully!`, `Pre-installed ${title} detected. Installation skipped as your existing setup is ready to use.`);
                }
                else {
                    stepper.utils.verifyFilesExist(targetDirectory, ['package.json']).then(isExist => {
                        if (isExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.showFinalStep('success', `${title} located successfully!`, `Detected a manual installation of ${title}. Note: Because this is not a Git repository,` +
                                ' automatic updates and certain version-dependent features may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', `Unable to locate ${title}!`, `Please ensure you have selected the correct folder containing the ${title} repository.`);
                        }
                    });
                }
            });
        }
    });
}
async function cardInfo$1(api, callback) {
    return CardInfo(REPO_URL, undefined, api, callback);
}
function catchAddress(line) {
    const addressRegex = 
    // eslint-disable-next-line max-len
    /https?:\/\/(?:localhost|\[?[\da-fA-F:]+]?)(?:\s*\x1b\[[0-9;]*m\s*)*(:?\s*(?:\x1b\[[0-9;]*m\s*)*\d+\s*(?:\x1b\[[0-9;]*m\s*)*)?\/?/;
    const match = line.match(addressRegex);
    if (match) {
        let address = match[0];
        if (address.endsWith('/') && address.length > 8 && address !== 'http://' && address !== 'https://') {
            address = address.slice(0, -1);
        }
        address = address.replace(/\x1b\[[0-9;]*m/g, '');
        address = address.replace(/\s/g, '');
        return address;
    }
    return undefined;
}
function startUpdate(stepper, dir) {
    stepper.initialSteps(['Updating', 'Completed']);
    stepper.executeTerminalCommands('git pull && npm i', dir).then(() => {
        stepper.setUpdated();
        stepper.showFinalStep('success', 'Bolt.Diy Updated Successfully!', `Bolt.Diy has been updated to the latest version. You can now enjoy the new features and improvements.`);
    });
}
const BOLT_DIY_RM = {
    catchAddress,
    cardInfo: cardInfo$1,
    manager: { startInstall: startInstall$1, updater: { updateType: 'stepper', startUpdate } },
};

const title = 'LoLLMs';
const url = 'https://github.com/ParisNeo/lollms-webui';
function startInstall(stepper) {
    stepper.initialSteps([title, 'Clone', 'Install', 'Requirements', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep().then(() => {
                stepper.cloneRepository(url).then(dir => {
                    stepper.nextStep().then(() => {
                        stepper.executeTerminalCommands('git submodule update --init --recursive', dir).then(() => {
                            stepper
                                .executeTerminalCommands([
                                'pip install -r requirements.txt',
                                'pip install -e .',
                                `${dir}${isWin ? '\\' : '/'}lollms_core`,
                            ])
                                .then(() => {
                                stepper.setInstalled(dir);
                                stepper.showFinalStep('success', `${title} installation complete!`, `All installation steps completed successfully. Your ${title} environment is now ready for use.`);
                            });
                        });
                    });
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, url).then(isValid => {
                if (isValid) {
                    stepper.setInstalled(targetDirectory);
                    stepper.showFinalStep('success', `${title} located successfully!`, `Pre-installed ${title} detected. Installation skipped as your existing setup is ready to use.`);
                }
                else {
                    stepper.utils.verifyFilesExist(targetDirectory, ['app.py']).then(isExist => {
                        if (isExist) {
                            stepper.setInstalled(targetDirectory);
                            stepper.showFinalStep('success', `${title} located successfully!`, `Detected a manual installation of ${title}. Note: Because this is not a Git repository,` +
                                ' automatic updates and certain version-dependent features may not work as expected.');
                        }
                        else {
                            stepper.showFinalStep('error', `Unable to locate ${title}!`, `Please ensure you have selected the correct folder containing the ${title} repository.`);
                        }
                    });
                }
            });
        }
    });
}
async function cardInfo(api, callback) {
    return CardInfo(url, undefined, api, callback);
}
const LoLLM_RM = {
    catchAddress: catchAddress$3,
    cardInfo,
    manager: { startInstall, updater: { updateType: 'git' } },
};

const textPage = {
    routePath: 'textGen_page',
    cards: [
        {
            id: TG_ID,
            title: 'Text Generation',
            description: 'A Gradio web UI for Large Language Models.',
            repoUrl: 'https://github.com/oobabooga/text-generation-webui',
            type: 'text',
            extensionsDir: '/extensions',
            arguments: oobaboogaArguments,
            methods: TG_RM,
            installationType: 'git',
        },
        {
            id: OPEN_WEBUI_ID,
            title: 'Open WebUI',
            description: 'Open WebUI is an extensible, feature-rich, and user-friendly self-hosted ' +
                'WebUI designed to operate entirely offline. It supports various LLM runners,' +
                ' including Ollama and OpenAI-compatible APIs. ',
            repoUrl: 'https://github.com/open-webui/open-webui',
            type: 'text',
            methods: OPEN_WEBUI_RM,
            installationType: 'others',
            uninstallType: 'others',
            arguments: openArguments,
        },
        {
            id: BOLT_DIY_ID,
            title: 'Bolt.Diy',
            description: 'Prompt, run, edit, and deploy full-stack web applications using any LLM you want!',
            repoUrl: 'https://github.com/stackblitz-labs/bolt.diy',
            type: 'text',
            methods: BOLT_DIY_RM,
            installationType: 'others',
            uninstallType: 'removeFolder',
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
            arguments: sillyArguments,
            methods: SILLYTAVERN_RM,
            installationType: 'git',
        },
        {
            id: LoLLMS_ID,
            title: 'LoLLMs',
            description: 'Lord of Large Language and Multi modal Systems Web User Interface',
            repoUrl: 'https://github.com/ParisNeo/lollms-webui',
            type: 'text',
            methods: LoLLM_RM,
            installationType: 'git',
        },
    ],
};

/* eslint max-len: 0 */
const toolsPage = {
    routePath: 'tools_page',
    cards: [
        {
            id: ONETRAINER_ID,
            title: 'OneTrainer',
            description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
            repoUrl: 'https://github.com/Nerogar/OneTrainer',
            type: 'image',
            methods: ONETRAINER_RM,
            installationType: 'git',
        },
        {
            id: KOHYA_ID,
            title: "Kohya's GUI",
            description: "This repository primarily provides a Gradio GUI for Kohya's Stable Diffusion trainers." +
                'The GUI allows you to set the training parameters and generate and run the required CLI commands to train the model.',
            repoUrl: 'https://github.com/bmaltais/kohya_ss',
            type: 'image',
            arguments: bmaltaisArguments,
            methods: KOHYA_GUI_RM,
            installationType: 'git',
        },
        {
            id: AITOOLKIT_ID,
            title: 'AI Toolkit',
            description: 'AI Toolkit is an all-in-one training suite for diffusion models. Supports training LoRA models for FLUX.1, ' +
                'Stable Diffusion, and other diffusion models on consumer-grade hardware. Features a web-based UI for easy ' +
                'configuration and monitoring of training jobs.',
            repoUrl: 'https://github.com/ostris/ai-toolkit',
            type: 'image',
            arguments: aiToolkitArguments,
            methods: AITOOLKIT_RM,
            installationType: 'git',
        },
        {
            id: SMARTGALLERY_ID,
            title: 'SmartGallery',
            description: 'A fast, offline-capable gallery for ComfyUI outputs with workflow extraction. Browse and manage your ' +
                'generated images and videos with automatic thumbnail generation, workflow metadata extraction, and ' +
                'advanced filtering. Works independently of ComfyUI.',
            repoUrl: 'https://github.com/biagiomaf/smart-comfyui-gallery',
            type: 'image',
            arguments: smartGalleryArguments,
            methods: SMARTGALLERY_RM,
            installationType: 'git',
        },
        {
            id: LORA_MANAGER_ID,
            title: 'ComfyUI LoRA Manager',
            description: 'A comprehensive toolset that streamlines organizing, downloading, and applying LoRA models in ComfyUI. ' +
                'Features recipe management, checkpoint organization, one-click workflow integration, and a browser extension ' +
                'for Civitai. Access the interface at http://localhost:8188/loras',
            repoUrl: 'https://github.com/willmiao/ComfyUI-Lora-Manager',
            type: 'image',
            arguments: loraManagerArguments,
            methods: LORA_MANAGER_RM,
            installationType: 'git',
        },
    ],
};

const rendererModules = [imagePage, textPage, audioPage, agentsPage];
if (isPagesFixed)
    rendererModules.push(toolsPage);

export { rendererModules as default };
