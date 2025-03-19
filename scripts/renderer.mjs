import { i as isWin, $ as CardInfo, a0 as GitInstaller, N as TTS_ID, a1 as AG_RM, a2 as gitmyloArguments, O as AG_ID, W as ALLTALK_ID, a3 as lodashExports, a4 as automatic1111Arguments, o as parseStringToArgs, n as parseArgsToString, a5 as fetchExtensionList, a6 as catchAddress$2, a7 as COMFYUI_RM, a8 as comfyArguments, F as COMFYUI_ID, H as SD_FORGE_ID, a9 as INVOKE_RM, aa as invokeArguments, V as INVOKE_ID, ab as SD_NEXT_RM, ac as vladmandicArguments, K as SD_NEXT_ID, G as A1_ID, U as ONETRAINER_ID, ad as KOHYA_GUI_RM, ae as bmaltaisArguments, M as KOHYA_ID, af as COMFYUI_ZLUDA_RM, ag as comfyZludaArguments, R as COMFYUI_ZLUDA_ID, ah as SD_AMD_RM, ai as lshqqytigerArguments, S as SD_AMD_ID, J as SD_FORGE_AMD_ID, aj as SWARM_RM, ak as mcMonkeyArguments, L as SWARM_ID, Q as SD_UIUX_ID, al as TG_RM, am as oobaboogaArguments, T as TG_ID, an as flowiseArguments, ao as Flow_RM, Y as FLOWISEAI_ID, ap as openArguments, aq as OPEN_WEBUI_RM, X as OPEN_WEBUI_ID, _ as BOLT_DIY_ID, ar as SILLYTAVERN_RM, as as sillyArguments, P as SILLYTAVERN_ID, Z as LoLLMS_ID } from './RendererMethods_B6FpBD.mjs';

const URL$2 = 'https://github.com/erew123/alltalk_tts';
function startInstall$8(stepper) {
    stepper.initialSteps(['AllTalk TTS', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep();
            stepper.cloneRepository(URL$2).then(dir => {
                stepper.nextStep();
                stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
                    stepper.setInstalled(dir);
                    stepper.showFinalStep('success', 'AllTalk TTS installation complete!', 'All installation steps completed successfully. Your AllTalk TTS environment is now ready for use.');
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, URL$2).then(isValid => {
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
function startUpdate$2(stepper, dir) {
    stepper.initialSteps(['Pull Changes', 'Update', 'Finish']);
    if (dir) {
        stepper.executeTerminalCommands('git pull', dir).then(() => {
            stepper.nextStep();
            stepper.runTerminalScript(dir, isWin ? 'atsetup.bat' : 'atsetup.sh').then(() => {
                stepper.setUpdated();
                stepper.showFinalStep('success', 'AllTalk TTS Updated Successfully!');
            });
        });
    }
    else {
        stepper.showFinalStep('error', 'Unable to update AllTalk TTS');
    }
}
async function cardInfo$8(api, callback) {
    return CardInfo(URL$2, undefined, api, callback);
}
const ALLTALK_RM = {
    cardInfo: cardInfo$8,
    manager: {
        startInstall: startInstall$8,
        updater: { updateType: 'stepper', startUpdate: startUpdate$2 },
    },
};

const URL$1 = 'https://github.com/rsxdalv/tts-generation-webui';
function catchAddress$1(input) {
    if (input.toLowerCase().includes('Installed Packages'.toLowerCase())) {
        return 'http://127.0.0.1:7770';
    }
    else {
        return undefined;
    }
}
function startInstall$7(stepper) {
    GitInstaller('Text to Speech', URL$1, stepper);
}
async function cardInfo$7(api, callback) {
    return CardInfo(URL$1, '/extensions', api, callback);
}
const TTS_RM = {
    catchAddress: catchAddress$1,
    cardInfo: cardInfo$7,
    manager: { startInstall: startInstall$7, updater: { updateType: 'git' } },
};

const audioPage = {
    routePath: '/audioGenerationPage',
    cards: [
        {
            id: TTS_ID,
            title: 'Text to Speech',
            description: 'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
                ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
            repoUrl: 'https://github.com/rsxdalv/tts-generation-webui',
            type: 'audio',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0816d031-1165-44aa-9f15-df613f244942/width=300/00000-4072148758.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a7473108-d6fb-4c9d-97a6-b58ca82bcdfb/width=300/00002-1953665041.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d0f56692-50fc-4e8e-ac8b-02d8ec070417' +
                '/width=300/00006-951269360.jpeg',
            methods: ALLTALK_RM,
            installationType: 'git',
        },
    ],
};

const URL = 'https://github.com/Nerogar/OneTrainer';
function startInstall$6(stepper) {
    stepper.initialSteps(['OneTrainer', 'Clone', 'Install', 'Finish']);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            stepper.nextStep();
            stepper.cloneRepository(URL).then(dir => {
                stepper.nextStep();
                stepper.runTerminalScript(dir, isWin ? 'install.bat' : 'install.sh').then(() => {
                    stepper.setInstalled(dir);
                    stepper.showFinalStep('success', 'OneTrainer installation complete!', 'All installation steps completed successfully. Your OneTrainer environment is now ready for use.');
                });
            });
        }
        else if (targetDirectory) {
            stepper.utils.validateGitRepository(targetDirectory, URL).then(isValid => {
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
async function cardInfo$6(api, callback) {
    return CardInfo(URL, undefined, api, callback);
}
const ONETRAINER_RM = {
    cardInfo: cardInfo$6,
    manager: {
        startInstall: startInstall$6,
        updater: { updateType: 'stepper', startUpdate: startUpdate$1 },
    },
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

const A1_URL = 'https://github.com/AUTOMATIC1111/stable-diffusion-webui';
function startInstall$5(stepper) {
    GitInstaller('Automatic1111', A1_URL, stepper);
}
async function cardInfo$5(api, callback) {
    return CardInfo(A1_URL, '/extensions', api, callback);
}
const A1_RM = {
    catchAddress: catchAddress$2,
    fetchExtensionList,
    parseArgsToString,
    parseStringToArgs,
    cardInfo: cardInfo$5,
    manager: { startInstall: startInstall$5, updater: { updateType: 'git' } },
};

const SD_FORGE_URL = 'https://github.com/lllyasviel/stable-diffusion-webui-forge';
function startInstall$4(stepper) {
    GitInstaller('SD Forge', SD_FORGE_URL, stepper);
}
async function cardInfo$4(api, callback) {
    return CardInfo(SD_FORGE_URL, '/extensions', api, callback);
}
const SD_FORGE_RM = {
    catchAddress: catchAddress$2,
    fetchExtensionList,
    parseArgsToString,
    parseStringToArgs,
    cardInfo: cardInfo$4,
    manager: { startInstall: startInstall$4, updater: { updateType: 'git' } },
};

const SdAMD_URL$1 = 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu-forge';
function startInstall$3(stepper) {
    GitInstaller('SD Forge AMDGPU', SdAMD_URL$1, stepper);
}
async function cardInfo$3(api, callback) {
    return CardInfo(SdAMD_URL$1, 'RendererMethods', api, callback);
}
const SD_FORGE_AMD_RM = {
    catchAddress: catchAddress$2,
    fetchExtensionList,
    parseArgsToString,
    parseStringToArgs,
    cardInfo: cardInfo$3,
    manager: { startInstall: startInstall$3, updater: { updateType: 'git' } },
};

const SdAMD_URL = 'https://github.com/anapnoe/stable-diffusion-webui-ux';
function startInstall$2(stepper) {
    GitInstaller('SD UI-UX', SdAMD_URL, stepper);
}
async function cardInfo$2(api, callback) {
    return CardInfo(SdAMD_URL, '/extensions', api, callback);
}
const SD_UIUX_RM = {
    catchAddress: catchAddress$2,
    fetchExtensionList,
    parseArgsToString,
    parseStringToArgs,
    cardInfo: cardInfo$2,
    manager: { startInstall: startInstall$2, updater: { updateType: 'git' } },
};

const imagePage = {
    routePath: '/imageGenerationPage',
    cards: [
        {
            id: COMFYUI_ID,
            title: 'ComfyUI',
            description: 'This ui will let you design and execute advanced stable diffusion pipelines' +
                ' using a graph/nodes/flowchart based interface.',
            repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
            extensionsDir: '/custom_nodes',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7be14a2-5e23-41df-b653-4ba5b45ad065/width=300/00008-2000176836.jpeg',
            arguments: comfyArguments,
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/375d8999-a96f-4dae-98c7-968edcada7ea/width=300/00004-3953235735.jpeg',
            arguments: automatic1111Arguments,
            methods: SD_FORGE_RM,
            installationType: 'git',
        },
        {
            id: INVOKE_ID,
            title: 'Invoke AI',
            description: 'Invoke is a leading creative engine built to empower professionals and enthusiasts alike. Generate and create' +
                ' stunning visual media using the latest AI-driven technologies. Invoke offers an industry leading web-based UI,' +
                ' and serves as the foundation for multiple commercial products.',
            repoUrl: 'https://github.com/invoke-ai/InvokeAI',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a5d8728-2a0f-45d9-ade4-baceb04fa023' +
                '/width=300/00002-3715244638.jpeg',
            arguments: invokeArguments,
            methods: INVOKE_RM,
            installationType: 'others',
        },
        {
            id: SD_NEXT_ID,
            title: 'SD Next',
            description: 'Advanced Implementation of Stable Diffusion and other Diffusion-based generative image models',
            repoUrl: 'https://github.com/vladmandic/automatic',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e396ff35-0cf7-4121-8e69-4dd80b2429fa/width=300/00002-1070114876.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9608d0fa-6010-4ff8-b149-86e440ff9254/width=300/00000-3587005815.jpeg',
            arguments: automatic1111Arguments,
            methods: A1_RM,
            installationType: 'git',
        },
        {
            id: ONETRAINER_ID,
            title: 'OneTrainer',
            description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
            repoUrl: 'https://github.com/Nerogar/OneTrainer',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
                '/width=300/00005-1318253062.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db3575cb-162a-4436-b5d0-f9fbf9ed1140/width=300/00002-4073703889.jpeg',
            arguments: bmaltaisArguments,
            methods: KOHYA_GUI_RM,
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c660d1cf-772f-4068-9a32-3ed76c6ee9e8' +
                '/width=300/00023-3290977700.jpeg',
            arguments: comfyZludaArguments,
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3eaf306e-9edc-46bd-89d0-7f7398068e01/width=300/00002-1900763417.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/61a9d607-08ce-409a-8d5e-e9df25c72d39/width=300/00017-2936809481.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9dac48c1-20fd-4fb0-b84b-f5f533c5cdc5/width=300/00014-3815479772.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/026dfc41-f150-4b5c-9bbd-b959b833f059/width=300/00004-1682382699.jpeg',
            arguments: automatic1111Arguments,
            methods: SD_UIUX_RM,
            installationType: 'git',
        },
    ],
};

const REPO_URL = 'https://github.com/stackblitz-labs/bolt.diy';
const StarterSteps = ['Start', 'Check NodeJS', 'Bolt.Diy', 'Packages', 'Done!'];
function startInstall$1(stepper) {
    const next = () => stepper.nextStep();
    const progress = (message) => stepper.progressBar(true, message);
    const checkNode = () => stepper.ipc.invoke('is_nodejs_installed');
    const installPackages = (dir) => stepper.executeTerminalCommands('npm i', dir);
    const installBolt = () => {
        stepper.cloneRepository(REPO_URL).then(dir => {
            next();
            installPackages(dir).then(() => {
                stepper.setInstalled(dir);
                stepper.showFinalStep('success', 'Installation Complete!', 'Your Bolt.Diy environment is ready. Enjoy!');
            });
        });
    };
    stepper.initialSteps(StarterSteps);
    stepper.starterStep().then(({ targetDirectory, chosen }) => {
        if (chosen === 'install') {
            next();
            progress('Checking for NodeJS availability...');
            checkNode().then(isNodeAvailable => {
                if (isNodeAvailable) {
                    next();
                    installBolt();
                }
                else {
                    stepper.showFinalStep('error', 'NodeJS is not installed!', 'Please install NodeJS LTS and try again.');
                }
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
                    stepper.showFinalStep('error', `Unable to locate ${title}!`, `Please ensure you have selected the correct folder containing the ${title} repository.`);
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
            stepper.nextStep();
            stepper.cloneRepository(url).then(dir => {
                stepper.nextStep();
                stepper.executeTerminalCommands('git submodule update --init --recursive', dir).then(() => {
                    stepper.executeTerminalCommands('pip install -e .', `${dir}${isWin ? '\\' : '/'}lollms_core`).then(() => {
                        stepper.executeTerminalCommands('pip install -r requirements.txt', dir).then(() => {
                            stepper.setInstalled(dir);
                            stepper.showFinalStep('success', `${title} installation complete!`, `All installation steps completed successfully. Your ${title} environment is now ready for use.`);
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
                    stepper.showFinalStep('error', `Unable to locate ${title}!`, `Please ensure you have selected the correct folder containing the ${title} repository.`);
                }
            });
        }
    });
}
async function cardInfo(api, callback) {
    return CardInfo(url, undefined, api, callback);
}
const LoLLM_RM = {
    catchAddress: catchAddress$2,
    cardInfo,
    manager: { startInstall, updater: { updateType: 'git' } },
};

const textPage = {
    routePath: '/textGenerationPage',
    cards: [
        {
            id: TG_ID,
            title: 'Text Generation',
            description: 'A Gradio web UI for Large Language Models.',
            repoUrl: 'https://github.com/oobabooga/text-generation-webui',
            type: 'text',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/width=300/00000-3546450635.jpeg',
            arguments: oobaboogaArguments,
            methods: TG_RM,
            installationType: 'git',
        },
        {
            id: FLOWISEAI_ID,
            title: 'Flowise',
            description: 'Drag & drop UI to build your customized LLM flow',
            repoUrl: 'https://github.com/FlowiseAI/Flowise',
            type: 'text',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/96d813cd-91e6-41ca-95b3-ea619d6c462c/' +
                'width=300/00008-112793962.jpeg',
            methods: Flow_RM,
            arguments: flowiseArguments,
            installationType: 'others',
        },
        {
            id: OPEN_WEBUI_ID,
            title: 'Open WebUI',
            description: 'Open WebUI is an extensible, feature-rich, and user-friendly self-hosted ' +
                'WebUI designed to operate entirely offline. It supports various LLM runners,' +
                ' including Ollama and OpenAI-compatible APIs. ',
            repoUrl: 'https://github.com/open-webui/open-webui',
            type: 'text',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/223520d9-9071-4b73-9171-9628a804f89f/' +
                'width=300/00025-4013828223.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1c1750b6-e8be-4373-a303-b54b1825f268/' +
                'width=300/00021-2487204806.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8691d17f-0414-4280-a743-e4b840250807/width=300/00015-757708719.jpeg',
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
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9129f22d-70d1-4584-a7af-9aa96713debc/' +
                'width=300/00007-1103515559.jpeg',
            methods: LoLLM_RM,
            installationType: 'git',
        },
    ],
};

const rendererModules = [imagePage, textPage, audioPage];

export { rendererModules as default };
