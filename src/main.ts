import {
  AUTOMATIC1111_ID,
  ComfyUI_ID,
  GITMYLO_ID,
  LSHQQYTIGER_ID,
  OOBABOOGA_ID,
  RSXDALV_ID,
  STABILITYAI_ID,
  VLADMANDIC_ID,
} from './Constants';
import a1MainMethods from './Container/Automatic1111 & Forks/MainMethods';
import comfyMainMethods from './Container/ComfyUI/MainMethods';
import gitmyloMainMethods from './Container/Gitmylo/MainMethods';
import oobaMainMethods from './Container/Oobabooga/MainMethods';
import rsxMainMethods from './Container/Rsxdalv/MainMethods';
import stabilityMainMethods from './Container/StabilityAI/MainMethods';
import vladMainMethods from './Container/Vladmandic/MainMethods';
import {MainModules} from './types';

const mainModules: MainModules[] = [
  {id: ComfyUI_ID, methods: comfyMainMethods},
  {id: AUTOMATIC1111_ID, methods: a1MainMethods},
  {id: LSHQQYTIGER_ID, methods: a1MainMethods},
  {id: VLADMANDIC_ID, methods: vladMainMethods},
  {id: STABILITYAI_ID, methods: stabilityMainMethods},
  {id: OOBABOOGA_ID, methods: oobaMainMethods},
  {id: RSXDALV_ID, methods: rsxMainMethods},
  {id: GITMYLO_ID, methods: gitmyloMainMethods},
];

export default mainModules;
