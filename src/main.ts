import {
  A1_ID,
  AG_ID,
  ALLTALK_ID,
  COMFYUI_ID,
  COMFYUI_ZLUDA_ID,
  INVOKE_ID,
  KOHYA_ID,
  ONETRAINER_ID,
  OPEN_WEBUI_ID,
  SD_AMD_ID,
  SD_FORGE_AMD_ID,
  SD_FORGE_ID,
  SD_NEXT_ID,
  SD_UIUX_ID,
  SILLYTAVERN_ID,
  SWARM_ID,
  TG_ID,
  TTS_ID,
} from './Constants';
import erew123MainMethods from './Container/Audio/AllTalk TTS (erew123)/MainMethods';
import gitmyloMainMethods from './Container/Audio/Audio Generation (gitmylo)/MainMethods';
import rsxMainMethods from './Container/Audio/Text to Speech (rsxdalv)/MainMethods';
import comfyMainMethods from './Container/Image/ComfyUI (comfyanonymous)/MainMethods';
import comfyZludaMainMethods from './Container/Image/ComfyUI Zluda (patientx)/MainMethods';
import invokeMainMethods from './Container/Image/InvokeAI/MainMethods';
import bmaltaisMainMethods from './Container/Image/Kohyas GUI (bmaltais)/MainMethods';
import nerogarMainMethods from './Container/Image/OneTrainer (Nerogar)/MainMethods';
import a1MainMethods from './Container/Image/SD (AUTOMATIC1111)/MainMethods';
import vladMainMethods from './Container/Image/SD Next (vladmandic)/MainMethods';
import mcMonkeyMainMethods from './Container/Image/SwarmUI (mcmonkeyprojects)/MainMethods';
import openWebUIMainMethods from './Container/Text/OpenWebUI/MainMethods';
import sillyMainMethods from './Container/Text/SillyTavern/MainMethods';
import oobaMainMethods from './Container/Text/Text Generation (oobabooga)/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: COMFYUI_ID, methods: comfyMainMethods},
  {id: A1_ID, methods: a1MainMethods},
  {id: SD_AMD_ID, methods: a1MainMethods},
  {id: SD_FORGE_ID, methods: a1MainMethods},
  {id: SD_FORGE_AMD_ID, methods: a1MainMethods},
  {id: SD_NEXT_ID, methods: vladMainMethods},
  {id: SWARM_ID, methods: mcMonkeyMainMethods},
  {id: KOHYA_ID, methods: bmaltaisMainMethods},
  {id: TG_ID, methods: oobaMainMethods},
  {id: TTS_ID, methods: rsxMainMethods},
  {id: AG_ID, methods: gitmyloMainMethods},
  {id: SILLYTAVERN_ID, methods: sillyMainMethods},
  {id: SD_UIUX_ID, methods: a1MainMethods},
  {id: COMFYUI_ZLUDA_ID, methods: comfyZludaMainMethods},
  {id: ONETRAINER_ID, methods: nerogarMainMethods},
  {id: INVOKE_ID, methods: invokeMainMethods},
  {id: ALLTALK_ID, methods: erew123MainMethods},
  {id: OPEN_WEBUI_ID, methods: openWebUIMainMethods},
];

export default mainModules;
