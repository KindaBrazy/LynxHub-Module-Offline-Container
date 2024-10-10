import {GITMYLO_ID, RSXDALV_ID} from '../Constants';
import {PagesData} from '../types';
import gitmyloArguments from './Gitmylo/Arguments';
import gitmyloRendererMethods from './Gitmylo/RendererMethods';
import rsxdalvRendererMethods from './Rsxdalv/RendererMethods';

const audioPage: PagesData = {
  routePath: '/audioGenerationPage',
  cards: [
    {
      id: RSXDALV_ID,
      title: 'Text to Speech',
      description:
        'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
        ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
      repoUrl: 'https://github.com/rsxdalv/tts-generation-webui',
      type: 'audio',
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0816d031-1165-44aa-9f15-df613f244942/width=300/00000-4072148758.jpeg',
      methods: rsxdalvRendererMethods,
    },
    {
      id: GITMYLO_ID,
      title: 'Audio Generation',
      description: 'A webui for different audio related Neural Networks',
      repoUrl: 'https://github.com/gitmylo/audio-webui',
      type: 'audio',
      arguments: gitmyloArguments,
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a7473108-d6fb-4c9d-97a6-b58ca82bcdfb/width=300/00002-1953665041.jpeg',
      methods: gitmyloRendererMethods,
    },
  ],
};

export default audioPage;
