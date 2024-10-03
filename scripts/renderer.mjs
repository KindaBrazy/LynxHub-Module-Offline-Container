import { R as RSXDALV_ID, v as catchAddress, G as GITMYLO_ID, w as gitmyloArguments, x as gitmyloRendererMethods, y as lodashExports, z as automatic1111Arguments, C as ComfyUI_ID, D as comfyArguments, E as comfyRendererMethods, A as AUTOMATIC1111_ID, F as a1RendererMethods, L as LSHQQYTIGER_ID, H as lshqqytigerArguments, s as LLLYASVIEL_ID, t as LSHQQYTIGER_FORGE_ID, V as VLADMANDIC_ID, I as vladmandicArguments, J as vladRendererMethods, M as MCMONKEYPROJECTS_ID, K as mcMonkeyArguments, P as mcMonkeyRendererMethods, B as BMALTAIS_ID, Q as bmaltaisArguments, T as bmaltaisRendererMethods, u as ANAPNOE_ID, i as isWin, O as OOBABOOGA_ID, U as oobaboogaArguments, W as oobaRendererMethods, S as SILLYTAVERN_ID, X as sillyArguments, Y as sillyRendererMethods, N as NEROGAR_ID } from './RendererMethods_CxV-tR.mjs';

const audioPage = {
    routePath: '/audioGenerationPage',
    cards: [
        {
            id: RSXDALV_ID,
            title: 'TTS Generation WebUI',
            description: 'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
                ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
            repoUrl: 'https://github.com/rsxdalv/tts-generation-webui',
            type: 'audio',
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0816d031-1165-44aa-9f15-df613f244942/width=300/00000-4072148758.jpeg',
            methods: { catchAddress },
        },
        {
            id: GITMYLO_ID,
            title: 'Audio Webui',
            description: 'A webui for different audio related Neural Networks',
            repoUrl: 'https://github.com/gitmylo/audio-webui',
            type: 'audio',
            arguments: gitmyloArguments,
            extensionsDir: '/extensions',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a7473108-d6fb-4c9d-97a6-b58ca82bcdfb/width=300/00002-1953665041.jpeg',
            methods: gitmyloRendererMethods,
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
            id: AUTOMATIC1111_ID,
            title: 'Stable Diffusion web UI',
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
            title: 'Stable Diffusion web UI for AMDGPUs',
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
            title: 'Stable Diffusion WebUI Forge',
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
            title: 'Stable Diffusion WebUI AMDGPU Forge',
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
            title: 'SD.Next',
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
            title: 'Stable Diffusion web UI-UX',
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
    ],
};

const ONETRAINER_URL = 'https://github.com/Nerogar/OneTrainer';
function startInstall(stepper) {
    stepper.initialSteps(['One Trainer', 'Clone', 'Install', 'Done']);
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
                    stepper.showFinalStep('error', 'Unable to locate OneTrainer!', 'Please ensure you have selected the correct folder containing the OneTrainer repository clone.');
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
function updateAvailable() {
    return false;
}
const nerogarRendererMethods = {
    manager: {
        startInstall,
        updater: { updateType: 'stepper', startUpdate, updateAvailable },
    },
};

const textPage = {
    routePath: '/textGenerationPage',
    cards: [
        {
            id: OOBABOOGA_ID,
            title: 'Text generation web UI',
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
    if (build > 10) {
        rendererModules.forEach(page => {
            if (page.routePath === '/imageGenerationPage') {
                page.cards.push({
                    id: NEROGAR_ID,
                    title: 'OneTrainer',
                    description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
                    repoUrl: 'https://github.com/Nerogar/OneTrainer',
                    type: 'image',
                    bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
                        '/width=300/00005-1318253062.jpeg',
                    methods: nerogarRendererMethods,
                });
            }
        });
    }
}

export { rendererModules as default, setCurrentBuild };
