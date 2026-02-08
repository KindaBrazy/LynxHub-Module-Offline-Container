/* eslint max-len: 0 */

import {ArgumentsData} from '../../../../../../src/common/types/plugins/modules';
import appBackend from './AppBackend';
import audio from './audio';
import imageGeneration from './imageGeneration';
import ldap from './ldap';
import miscEnvironmentVariables from './miscEnvironmentVariables';
import oauth from './oauth';
import ragContentExtractionEngine from './ragContentExtractionEngine';
import retrievalAugmentedGenerationrag from './retrievalAugmentedGenerationrag';
import scim from './scim';
import securityVariables from './SecurityVariables';
import userPermissions from './userPermissions';
import vectorDatabase from './VectorDatabase';
import webSearch from './webSearch';

const openArguments: ArgumentsData = [
  appBackend,
  securityVariables,
  vectorDatabase,
  ragContentExtractionEngine,
  retrievalAugmentedGenerationrag,
  webSearch,
  audio,
  imageGeneration,
  oauth,
  ldap,
  scim,
  userPermissions,
  miscEnvironmentVariables,
];

export default openArguments;
