import {MainModules, MainModuleUtils} from '../../src/cross/plugin/ModuleTypes';
import {
  A1_ID,
  AG_ID,
  ALLTALK_ID,
  BOLT_DIY_ID,
  COMFYUI_ID,
  COMFYUI_ZLUDA_ID,
  FLOWISEAI_ID,
  INVOKE_ID,
  KOHYA_ID,
  LoLLMS_ID,
  N8N_ID,
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
import Rrew123_MM from './Container/Audio/AllTalk TTS (erew123)/MainMethods';
import Gitmylo_MM from './Container/Audio/Audio Generation (gitmylo)/MainMethods';
import Rsx_MM from './Container/Audio/Text to Speech (rsxdalv)/MainMethods';
import Comfy_MM from './Container/Image/ComfyUI (comfyanonymous)/MainMethods';
import ComfyZluda_MM from './Container/Image/ComfyUI Zluda (patientx)/MainMethods';
import Invoke_MM from './Container/Image/InvokeAI/MainMethods';
import Bmaltais_MM from './Container/Image/Kohyas GUI (bmaltais)/MainMethods';
import Nerogar_MM from './Container/Image/OneTrainer (Nerogar)/MainMethods';
import A1_MM from './Container/Image/SD (AUTOMATIC1111)/MainMethods';
import Ls_MM from './Container/Image/SD AMDGPU (lshqqytiger)/MainMethods';
import Vlad_MM from './Container/Image/SD Next (vladmandic)/MainMethods';
import McMonkey_MM from './Container/Image/SwarmUI (mcmonkeyprojects)/MainMethods';
import BOLT_DIY_MM from './Container/Text/BoltDiy (StackblitzLabs)/MainMethods';
import Flow_MM from './Container/Text/Flowise (FlowiseAI)/MainMethods';
import LoLLM_MM from './Container/Text/LoLLMs (ParisNeo)/MainMethods';
import N8N_MM from './Container/Text/N8N/MainMethods';
import OpenWebUI_MM from './Container/Text/OpenWebUI/MainMethods';
import Silly_MM from './Container/Text/SillyTavern/MainMethods';
import Ooba_MM from './Container/Text/Text Generation (oobabooga)/MainMethods';

export default async function initialModule(utils: MainModuleUtils): Promise<MainModules[]> {
  return [
    {id: COMFYUI_ID, methods: () => Comfy_MM(utils)},
    {id: A1_ID, methods: () => A1_MM(utils)},
    {id: SD_AMD_ID, methods: () => Ls_MM(utils)},
    {id: SD_FORGE_ID, methods: () => A1_MM(utils)},
    {id: SD_FORGE_AMD_ID, methods: () => A1_MM(utils)},
    {id: SD_NEXT_ID, methods: () => Vlad_MM(utils)},
    {id: SWARM_ID, methods: () => McMonkey_MM(utils)},
    {id: KOHYA_ID, methods: () => Bmaltais_MM(utils)},
    {id: TG_ID, methods: () => Ooba_MM(utils)},
    {id: TTS_ID, methods: () => Rsx_MM(utils)},
    {id: AG_ID, methods: () => Gitmylo_MM(utils)},
    {id: SILLYTAVERN_ID, methods: () => Silly_MM(utils)},
    {id: SD_UIUX_ID, methods: () => A1_MM(utils)},
    {id: COMFYUI_ZLUDA_ID, methods: () => ComfyZluda_MM(utils)},
    {id: ONETRAINER_ID, methods: () => Nerogar_MM(utils)},
    {id: INVOKE_ID, methods: () => Invoke_MM(utils)},
    {id: ALLTALK_ID, methods: () => Rrew123_MM(utils)},
    {id: OPEN_WEBUI_ID, methods: () => OpenWebUI_MM(utils)},
    {id: FLOWISEAI_ID, methods: () => Flow_MM(utils)},
    {id: LoLLMS_ID, methods: () => LoLLM_MM(utils)},
    {id: BOLT_DIY_ID, methods: () => BOLT_DIY_MM(utils)},
    {id: N8N_ID, methods: () => N8N_MM(utils)},
  ];
}
