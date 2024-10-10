import {
  ANAPNOE_ID,
  AUTOMATIC1111_ID,
  BMALTAIS_ID,
  ComfyUI_ID,
  GITMYLO_ID,
  INVOKEAI_ID,
  LLLYASVIEL_ID,
  LSHQQYTIGER_FORGE_ID,
  LSHQQYTIGER_ID,
  MCMONKEYPROJECTS_ID,
  NEROGAR_ID,
  OOBABOOGA_ID,
  RSXDALV_ID,
  SILLYTAVERN_ID,
  VLADMANDIC_ID,
} from './Constants';
import a1MainMethods from './Container/Automatic1111 & Forks/MainMethods';
import bmaltaisMainMethods from './Container/Bmaltais/MainMethods';
import comfyMainMethods from './Container/ComfyUI/MainMethods';
import gitmyloMainMethods from './Container/Gitmylo/MainMethods';
import invokeMainMethods from './Container/InvokeAI/MainMethods';
import mcMonkeyMainMethods from './Container/McMonkeyProjects/MainMethods';
import nerogarMainMethods from './Container/Nerogar/MainMethods';
import oobaMainMethods from './Container/Oobabooga/MainMethods';
import rsxMainMethods from './Container/Rsxdalv/MainMethods';
import sillyMainMethods from './Container/SillyTavern/MainMethods';
import vladMainMethods from './Container/Vladmandic/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: ComfyUI_ID, methods: comfyMainMethods},
  {id: AUTOMATIC1111_ID, methods: a1MainMethods},
  {id: LSHQQYTIGER_ID, methods: a1MainMethods},
  {id: LLLYASVIEL_ID, methods: a1MainMethods},
  {id: LSHQQYTIGER_FORGE_ID, methods: a1MainMethods},
  {id: VLADMANDIC_ID, methods: vladMainMethods},
  {id: MCMONKEYPROJECTS_ID, methods: mcMonkeyMainMethods},
  {id: BMALTAIS_ID, methods: bmaltaisMainMethods},
  {id: OOBABOOGA_ID, methods: oobaMainMethods},
  {id: RSXDALV_ID, methods: rsxMainMethods},
  {id: GITMYLO_ID, methods: gitmyloMainMethods},
  {id: SILLYTAVERN_ID, methods: sillyMainMethods},
  {id: ANAPNOE_ID, methods: a1MainMethods},
];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    mainModules.push({id: NEROGAR_ID, methods: nerogarMainMethods}, {id: INVOKEAI_ID, methods: invokeMainMethods});
  }
}

export default mainModules;
