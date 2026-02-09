import {AvailablePageIDs} from '../../../../src/common/consts';
import {PagesData} from '../../../../src/common/types/plugins/modules';
import {SMARTGALLERY_ID} from '../../Constants';
import smartGalleryArguments from './SmartGallery (biagiomaf)/Arguments';
import SMARTGALLERY_RM from './SmartGallery (biagiomaf)/RendererMethods';

/* eslint max-len: 0 */

// TODO: make it tools page after v 3.5 release
const routePath: AvailablePageIDs = window.LynxHub.buildNumber >= 45 ? 'tools_page' : 'others_page';

const othersPage: PagesData = {
  routePath,
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

export default othersPage;
