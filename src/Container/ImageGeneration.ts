import {AUTOMATIC1111_ID, ComfyUI_ID, LLLYASVIEL_ID, LSHQQYTIGER_ID, STABILITYAI_ID, VLADMANDIC_ID} from '../Constants';
import {PagesData} from '../types';
import automatic1111Arguments from './Automatic1111 & Forks/Automatic1111Arguments';
import lshqqytigerArguments from './Automatic1111 & Forks/LshqqytigerArguments';
import a1RendererMethods from './Automatic1111 & Forks/RendererMethods';
import comfyArguments from './ComfyUI/Arguments';
import comfyRendererMethods from './ComfyUI/RendererMethods';
import stabilityaiArguments from './StabilityAI/Arguments';
import stabilityRendererMethods from './StabilityAI/RendererMethods';
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
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e7be14a2-5e23-41df-b653-4ba5b45ad065/' +
        'width=832,quality=90/00008-2000176836.jpeg',
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
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9608d0fa-6010-4ff8-b149-86e440ff9254/' +
        'width=832,quality=90/00000-3587005815.jpeg',

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
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3eaf306e-9edc-46bd-89d0-7f7398068e01/' +
        'width=832,quality=90/00002-1900763417.jpeg',
      arguments: lshqqytigerArguments,
      methods: a1RendererMethods,
    },
    {
      id: LLLYASVIEL_ID,
      title: 'Stable Diffusion WebUI Forge',
      description:
        'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
        ' to make development easier, optimize resource management, speed up inference, and study experimental features.\n' +
        'The name "Forge" is inspired from "Minecraft Forge". This project is aimed at becoming SD WebUI\'s Forge.',
      repoUrl: 'https://github.com/lllyasviel/stable-diffusion-webui-forge',
      extensionsDir: '/extensions',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/375d8999-a96f-4dae-98c7-968edcada7ea/' +
        'original=true,quality=90/00004-3953235735.jpeg',
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
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e396ff35-0cf7-4121-8e69-4dd80b2429fa/' +
        'width=832,quality=90/00002-1070114876.jpeg',
      arguments: vladmandicArguments,
      methods: vladRendererMethods,
    },
    {
      id: STABILITYAI_ID,
      title: 'Stable Swarm UI',
      description:
        'A Modular Stable Diffusion Web-User-Interface, with an emphasis on making powertools' +
        ' easily accessible, high performance, and extensibility.',
      repoUrl: 'https://github.com/Stability-AI/StableSwarmUI',
      type: 'image',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9dac48c1-20fd-4fb0-b84b-f5f533c5cdc5/' +
        'width=832,quality=90/00014-3815479772.jpeg',
      arguments: stabilityaiArguments,
      methods: stabilityRendererMethods,
    },
  ],
};

export default imagePage;
