import {PagesData} from '../../../../src/common/types/plugins/modules';
import {AITOOLKIT_ID, LORA_MANAGER_ID, SMARTGALLERY_ID} from '../../Constants';
import aiToolkitArguments from './AI Toolkit (ostris)/Arguments';
import AITOOLKIT_RM from './AI Toolkit (ostris)/RendererMethods';
import loraManagerArguments from './ComfyUI-Lora-Manager (willmiao)/Arguments';
import LORA_MANAGER_RM from './ComfyUI-Lora-Manager (willmiao)/RendererMethods';
import smartGalleryArguments from './SmartGallery (biagiomaf)/Arguments';
import SMARTGALLERY_RM from './SmartGallery (biagiomaf)/RendererMethods';

/* eslint max-len: 0 */

const toolsPage: PagesData = {
  routePath: 'tools_page',
  cards: [
    {
      id: AITOOLKIT_ID,
      title: 'AI Toolkit',
      description:
        'AI Toolkit is an all-in-one training suite for diffusion models. Supports training LoRA models for FLUX.1, ' +
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
      description:
        'A fast, offline-capable gallery for ComfyUI outputs with workflow extraction. Browse and manage your ' +
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
      description:
        'A comprehensive toolset that streamlines organizing, downloading, and applying LoRA models in ComfyUI. ' +
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

export default toolsPage;
