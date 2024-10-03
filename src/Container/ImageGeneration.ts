import {
  ANAPNOE_ID,
  AUTOMATIC1111_ID,
  BMALTAIS_ID,
  ComfyUI_ID,
  LLLYASVIEL_ID,
  LSHQQYTIGER_FORGE_ID,
  LSHQQYTIGER_ID,
  MCMONKEYPROJECTS_ID,
  VLADMANDIC_ID,
} from '../Constants';
import {PagesData} from '../types';
import automatic1111Arguments from './Automatic1111 & Forks/Automatic1111Arguments';
import lshqqytigerArguments from './Automatic1111 & Forks/LshqqytigerArguments';
import lshqqytigerForgeArguments from './Automatic1111 & Forks/LshqqytigerForgeArguments';
import a1RendererMethods from './Automatic1111 & Forks/RendererMethods';
import bmaltaisArguments from './Bmaltais/Arguments';
import bmaltaisRendererMethods from './Bmaltais/RendererMethods';
import comfyArguments from './ComfyUI/Arguments';
import comfyRendererMethods from './ComfyUI/RendererMethods';
import mcMonkeyArguments from './McMonkeyProjects/Arguments';
import mcMonkeyRendererMethods from './McMonkeyProjects/RendererMethods';
import vladmandicArguments from './Vladmandic/Arguments';
import vladRendererMethods from './Vladmandic/RendererMethods';

const imagePage: PagesData = {
  routePath: '/imageGenerationPage',
  cards: [
    {
      id: ComfyUI_ID,
      title: 'ComfyUI',
      description:
        'This ui will let you design and execute advanced stable diffusion pipelines' +
        ' using a graph/nodes/flowchart based interface.',
      repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
      extensionsDir: '/custom_nodes',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7be14a2-5e23-41df-b653-4ba5b45ad065/width=300/00008-2000176836.jpeg',
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
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9608d0fa-6010-4ff8-b149-86e440ff9254/width=300/00000-3587005815.jpeg',

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
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3eaf306e-9edc-46bd-89d0-7f7398068e01/width=300/00002-1900763417.jpeg',
      arguments: lshqqytigerArguments,
      methods: a1RendererMethods,
    },
    {
      id: LLLYASVIEL_ID,
      title: 'Stable Diffusion WebUI Forge',
      description:
        'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
        ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
        'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
      repoUrl: 'https://github.com/lllyasviel/stable-diffusion-webui-forge',
      extensionsDir: '/extensions',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/375d8999-a96f-4dae-98c7-968edcada7ea/width=300/00004-3953235735.jpeg',
      arguments: automatic1111Arguments,
      methods: a1RendererMethods,
    },
    {
      id: LSHQQYTIGER_FORGE_ID,
      title: 'Stable Diffusion WebUI AMDGPU Forge',
      description:
        'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
        ' to make development easier, optimize resource management, speed up inference, and study experimental features.' +
        'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
      repoUrl: 'https://github.com/lshqqytiger/stable-diffusion-webui-amdgpu-forge',
      extensionsDir: '/extensions',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/87d247f0-af0f-46cc-8297-67dd1595636b/width=300/00015-1911485974.jpeg',
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
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e396ff35-0cf7-4121-8e69-4dd80b2429fa/width=300/00002-1070114876.jpeg',
      arguments: vladmandicArguments,
      methods: vladRendererMethods,
    },
    {
      id: MCMONKEYPROJECTS_ID,
      title: 'SwarmUI',
      description:
        'A Modular AI Image Generation Web-User-Interface, with an emphasis on making powertools ' +
        'easily accessible, high performance, and extensibility. Supports Stable Diffusion, Flux, ' +
        'etc. AI image models, with plans to support AI video, audio, and more in the future.',
      repoUrl: 'https://github.com/mcmonkeyprojects/SwarmUI',
      type: 'image',
      extensionsDir: '/src/Extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9dac48c1-20fd-4fb0-b84b-f5f533c5cdc5/width=300/00014-3815479772.jpeg',
      arguments: mcMonkeyArguments,
      methods: mcMonkeyRendererMethods,
    },
    {
      id: BMALTAIS_ID,
      title: "Kohya's GUI",
      description:
        "This repository primarily provides a Gradio GUI for Kohya's Stable Diffusion trainers." +
        'The GUI allows you to set the training parameters and generate and run the required CLI commands to train the model.',
      repoUrl: 'https://github.com/bmaltais/kohya_ss',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db3575cb-162a-4436-b5d0-f9fbf9ed1140/width=300/00002-4073703889.jpeg',
      arguments: bmaltaisArguments,
      methods: bmaltaisRendererMethods,
    },
    {
      id: ANAPNOE_ID,
      title: 'Stable Diffusion web UI-UX',
      description:
        'A bespoke, highly adaptable user interface for the Stable Diffusion, utilizing the powerful Gradio library.' +
        ' This cutting-edge browser interface offer an unparalleled level of customization and optimization for users,' +
        ' setting it apart from other web interfaces.',
      repoUrl: 'https://github.com/anapnoe/stable-diffusion-webui-ux',
      type: 'image',
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/026dfc41-f150-4b5c-9bbd-b959b833f059/width=300/00004-1682382699.jpeg',
      arguments: automatic1111Arguments,
      methods: a1RendererMethods,
    },
  ],
};

export default imagePage;
