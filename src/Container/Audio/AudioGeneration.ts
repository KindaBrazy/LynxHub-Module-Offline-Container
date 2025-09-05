import {PagesData} from '../../../../src/cross/plugin/ModuleTypes';
import {AG_ID, ALLTALK_ID, TTS_ID} from '../../Constants';
import ALLTALK_RM from './AllTalk TTS (erew123)/RendererMethods';
import gitmyloArguments from './Audio Generation (gitmylo)/Arguments';
import AG_RM from './Audio Generation (gitmylo)/RendererMethods';
import TTS_RM from './Text to Speech (rsxdalv)/RendererMethods';

const audioPage: PagesData = {
  routePath: '/audioGenerationPage',
  cards: [
    {
      id: TTS_ID,
      title: 'Text to Speech',
      description:
        'TTS Generation Web UI (Bark, MusicGen + AudioGen, Tortoise, RVC, Vocos,' +
        ' Demucs, SeamlessM4T, MAGNet, StyleTTS2, MMS)',
      repoUrl: 'https://github.com/rsxdalv/TTS-WebUI',
      type: 'audio',
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0816d031-1165-44aa-9f15-df613f244942/width=300/00000-4072148758.jpeg',
      methods: TTS_RM,
      installationType: 'git',
    },
    {
      id: AG_ID,
      title: 'Audio Generation',
      description: 'A webui for different audio related Neural Networks',
      repoUrl: 'https://github.com/gitmylo/audio-webui',
      type: 'audio',
      arguments: gitmyloArguments,
      extensionsDir: '/extensions',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a7473108-d6fb-4c9d-97a6-b58ca82bcdfb/width=300/00002-1953665041.jpeg',
      methods: AG_RM,
      installationType: 'git',
    },
    {
      id: ALLTALK_ID,
      title: 'AllTalk TTS',
      description:
        'AllTalk is based on the Coqui TTS engine, similar to the Coqui_tts extension for Text generation webUI, ' +
        'however supports a variety of advanced features, such as a settings page, low VRAM support, DeepSpeed, ' +
        'narrator, model finetuning, custom models, wav file maintenance. It can also be used with 3rd Party ' +
        'software via JSON calls.',
      repoUrl: 'https://github.com/erew123/alltalk_tts',
      type: 'audio',
      bgUrl:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d0f56692-50fc-4e8e-ac8b-02d8ec070417' +
        '/width=300/00006-951269360.jpeg',
      methods: ALLTALK_RM,
      installationType: 'git',
    },
  ],
};

export default audioPage;
