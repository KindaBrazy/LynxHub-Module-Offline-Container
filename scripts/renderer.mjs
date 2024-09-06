import { R as RSXDALV_ID, r as catchAddress, G as GITMYLO_ID, s as gitmyloArguments, t as gitmyloRendererMethods, C as ComfyUI_ID, u as comfyArguments, v as comfyRendererMethods, A as AUTOMATIC1111_ID, w as automatic1111Arguments, x as a1RendererMethods, L as LSHQQYTIGER_ID, y as lshqqytigerArguments, q as LLLYASVIEL_ID, V as VLADMANDIC_ID, z as vladmandicArguments, D as vladRendererMethods, M as MCMONKEYPROJECTS_ID, E as mcMonkeyArguments, F as mcMonkeyRendererMethods, B as BMALTAIS_ID, H as bmaltaisArguments, I as bmaltaisRendererMethods, O as OOBABOOGA_ID, J as oobaboogaArguments, K as oobaRendererMethods } from './RendererMethods_Bw2r-n.mjs';

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
                ' to make development easier, optimize resource management, speed up inference, and study experimental features.\n' +
                'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
            repoUrl: 'https://github.com/lllyasviel/stable-diffusion-webui-forge',
            extensionsDir: '/extensions',
            type: 'image',
            bgUrl: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/375d8999-a96f-4dae-98c7-968edcada7ea/width=300/00004-3953235735.jpeg',
            arguments: automatic1111Arguments,
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
    ],
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
    ],
};

const rendererModules = [imagePage, textPage, audioPage];

export { rendererModules as default };
