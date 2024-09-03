import {
  AUTOMATIC1111_ID,
  ComfyUI_ID,
  GITMYLO_ID,
  LLLYASVIEL_ID,
  LSHQQYTIGER_ID,
  OOBABOOGA_ID,
  RSXDALV_ID,
  MCMONKEYPROJECTS_ID,
  VLADMANDIC_ID,
  BMALTAIS_ID,
} from './Constants';
import a1MainMethods from './Container/Automatic1111 & Forks/MainMethods';
import comfyMainMethods from './Container/ComfyUI/MainMethods';
import gitmyloMainMethods from './Container/Gitmylo/MainMethods';
import oobaMainMethods from './Container/Oobabooga/MainMethods';
import rsxMainMethods from './Container/Rsxdalv/MainMethods';
import mcMonkeyMainMethods from './Container/McMonkeyProjects/MainMethods';
import vladMainMethods from './Container/Vladmandic/MainMethods';
import {MainModules} from './types';
import bmaltaisMainMethods from './Container/Bmaltais/MainMethods';

const mainModules: MainModules[] = [
  {id: ComfyUI_ID, methods: comfyMainMethods},
  {id: AUTOMATIC1111_ID, methods: a1MainMethods},
  {id: LSHQQYTIGER_ID, methods: a1MainMethods},
  {id: LLLYASVIEL_ID, methods: a1MainMethods},
  {id: VLADMANDIC_ID, methods: vladMainMethods},
  {id: MCMONKEYPROJECTS_ID, methods: mcMonkeyMainMethods},
  {id: BMALTAIS_ID, methods: bmaltaisMainMethods},
  {id: OOBABOOGA_ID, methods: oobaMainMethods},
  {id: RSXDALV_ID, methods: rsxMainMethods},
  {id: GITMYLO_ID, methods: gitmyloMainMethods},
];

export default mainModules;
