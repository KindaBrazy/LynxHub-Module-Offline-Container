import {PagesData} from '../../../../src/cross/plugin/ModuleTypes';
import {
  A1_ID,
  COMFYUI_ID,
  COMFYUI_ZLUDA_ID,
  INVOKE_ID,
  KOHYA_ID,
  ONETRAINER_ID,
  SD_AMD_ID,
  SD_FORGE_AMD_ID,
  SD_FORGE_ID,
  SD_NEXT_ID,
  SD_UIUX_ID,
  SWARM_ID,
} from '../../Constants';
import comfyArguments from './ComfyUI (comfyanonymous)/Arguments';
import COMFYUI_RM from './ComfyUI (comfyanonymous)/RendererMethods';
import comfyZludaArguments from './ComfyUI Zluda (patientx)/Arguments';
import COMFYUI_ZLUDA_RM from './ComfyUI Zluda (patientx)/RendererMethods';
import invokeArguments from './InvokeAI/Arguments';
import INVOKE_RM from './InvokeAI/RendererMethods';
import bmaltaisArguments from './Kohyas GUI (bmaltais)/Arguments';
import KOHYA_GUI_RM from './Kohyas GUI (bmaltais)/RendererMethods';
import ONETRAINER_RM from './OneTrainer (Nerogar)/RendererMethods';
import automatic1111Arguments from './SD (AUTOMATIC1111)/Arguments';
import A1_RM from './SD (AUTOMATIC1111)/RendererMethods';
import lshqqytigerArguments from './SD AMDGPU (lshqqytiger)/Arguments';
import SD_AMD_RM from './SD AMDGPU (lshqqytiger)/RendererMethods';
import SD_FORGE_RM from './SD Forge (lllyasviel)/RendererMethods';
import lshqqytigerForgeArguments from './SD Forge AMDGPU (lshqqytiger)/Arguments';
import SD_FORGE_AMD_RM from './SD Forge AMDGPU (lshqqytiger)/RendererMethods';
import vladmandicArguments from './SD Next (vladmandic)/Arguments';
import SD_NEXT_RM from './SD Next (vladmandic)/RendererMethods';
import SD_UIUX_RM from './SD UI-UX (anapnoe)/RendererMethods';
import mcMonkeyArguments from './SwarmUI (mcmonkeyprojects)/Arguments';
import SWARM_RM from './SwarmUI (mcmonkeyprojects)/RendererMethods';

const imagePage: PagesData = {
  routePath: 'imageGen_page',
  cards: [
    {
      id: COMFYUI_ID,
      title: 'ComfyUI',
      description:
        'This ui will let you design and execute advanced stable diffusion pipelines' +
        ' using a graph/nodes/flowchart based interface.',
      repoUrl: 'https://github.com/comfyanonymous/ComfyUI',
      extensionsDir: '/custom_nodes',
      type: 'image',
      arguments: comfyArguments,
      methods: COMFYUI_RM,
      installationType: 'git',
    },
    {
      id: SD_FORGE_ID,
      title: 'SD Forge',
      description:
        'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
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
      description:
        'Invoke is a leading creative engine built to empower professionals and enthusiasts alike. Generate and create' +
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
      description:
        "This repository primarily provides a Gradio GUI for Kohya's Stable Diffusion trainers." +
        'The GUI allows you to set the training parameters and generate and run the required CLI commands to train the model.',
      repoUrl: 'https://github.com/bmaltais/kohya_ss',
      type: 'image',
      arguments: bmaltaisArguments,
      methods: KOHYA_GUI_RM,
      installationType: 'git',
    },
    {
      id: COMFYUI_ZLUDA_ID,
      title: 'ComfyUI Zluda',
      description:
        'The most powerful and modular stable diffusion GUI, api and backend with a graph/nodes interface.' +
        ' Now ZLUDA enhanced  for better AMD GPU performance.',
      repoUrl: 'https://github.com/patientx/ComfyUI-Zluda',
      extensionsDir: '/custom_nodes',
      type: 'image',
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
      arguments: lshqqytigerArguments,
      methods: SD_AMD_RM,
      installationType: 'git',
    },
    {
      id: SD_FORGE_AMD_ID,
      title: 'SD Forge AMDGPU',
      description:
        'Stable Diffusion WebUI Forge is a platform on top of Stable Diffusion WebUI (based on Gradio)' +
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
      description:
        'A Modular AI Image Generation Web-User-Interface, with an emphasis on making powertools ' +
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
      description:
        'A bespoke, highly adaptable user interface for the Stable Diffusion, utilizing the powerful Gradio library.' +
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

export default imagePage;
