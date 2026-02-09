import {ArgumentsData} from '../../../../../src/common/types/plugins/modules';

const smartGalleryArguments: ArgumentsData = [
  {
    category: 'Configuration',
    sections: [
      {
        section: 'Paths',
        items: [
          {
            name: 'BASE_OUTPUT_PATH',
            type: 'Directory',
            description: 'Path to ComfyUI output folder (e.g., C:/ComfyUI/output)',
          },
          {
            name: 'BASE_INPUT_PATH',
            type: 'Directory',
            description: 'Path to ComfyUI input folder (e.g., C:/ComfyUI/input)',
          },
          {
            name: 'BASE_SMARTGALLERY_PATH',
            type: 'Directory',
            description: 'Path to SmartGallery data folder (defaults to output path if not set)',
          },
        ],
      },
      {
        section: 'Optional Settings',
        items: [
          {
            name: 'FFPROBE_MANUAL_PATH',
            type: 'File',
            description:
              'Path to ffprobe executable (e.g., C:/ffmpeg/bin/ffprobe.exe). ' +
              'Required for extracting workflows from video files.',
          },
          {
            name: 'SERVER_PORT',
            type: 'Input',
            description: 'Port for SmartGallery server',
            defaultValue: '8189',
          },
        ],
      },
    ],
  },
];

export default smartGalleryArguments;
