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
import OpenWebUI_MM from './Container/Text/OpenWebUI/MainMethods';
import Silly_MM from './Container/Text/SillyTavern/MainMethods';
import Ooba_MM from './Container/Text/Text Generation (oobabooga)/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: COMFYUI_ID, methods: Comfy_MM},
  {id: A1_ID, methods: A1_MM},
  {id: SD_AMD_ID, methods: Ls_MM},
  {id: SD_FORGE_ID, methods: A1_MM},
  {id: SD_FORGE_AMD_ID, methods: A1_MM},
  {id: SD_NEXT_ID, methods: Vlad_MM},
  {id: SWARM_ID, methods: McMonkey_MM},
  {id: KOHYA_ID, methods: Bmaltais_MM},
  {id: TG_ID, methods: Ooba_MM},
  {id: TTS_ID, methods: Rsx_MM},
  {id: AG_ID, methods: Gitmylo_MM},
  {id: SILLYTAVERN_ID, methods: Silly_MM},
  {id: SD_UIUX_ID, methods: A1_MM},
  {id: COMFYUI_ZLUDA_ID, methods: ComfyZluda_MM},
  {id: ONETRAINER_ID, methods: Nerogar_MM},
  {id: INVOKE_ID, methods: Invoke_MM},
  {id: ALLTALK_ID, methods: Rrew123_MM},
  {id: OPEN_WEBUI_ID, methods: OpenWebUI_MM},
  {id: FLOWISEAI_ID, methods: Flow_MM},
  {id: LoLLMS_ID, methods: LoLLM_MM},
  {id: BOLT_DIY_ID, methods: BOLT_DIY_MM},
];

export default mainModules;
