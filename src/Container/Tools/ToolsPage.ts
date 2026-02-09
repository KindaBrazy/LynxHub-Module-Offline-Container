import {PagesData} from '../../../../src/common/types/plugins/modules';
import {SMARTGALLERY_ID} from '../../Constants';
import smartGalleryArguments from '../Tools/SmartGallery (biagiomaf)/Arguments';
import SMARTGALLERY_RM from '../Tools/SmartGallery (biagiomaf)/RendererMethods';

/* eslint max-len: 0 */

const toolsPage: PagesData = {
  routePath: 'tools_page',
  cards: [
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
  ],
};

export default toolsPage;
