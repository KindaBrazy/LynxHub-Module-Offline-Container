import {ArgumentItem, ArgumentSection, DataSection} from '../../types';
import automatic1111Arguments from './Automatic1111Arguments';

const lshqqytigerArguments = automatic1111Arguments;

const lsSpecifArgs: ArgumentItem[] = [
  {
    description: 'Skip installation of onnxruntime; ONNX and Olive will be unavailable',
    name: '--skip-ort',
    type: 'CheckBox',
  },
  {
    description: 'use torch built with cpu',
    name: '--use-cpu-torch',
    type: 'CheckBox',
  },
  {
    description: 'use DirectML device as torch device',
    name: '--use-directml',
    type: 'CheckBox',
  },
  {
    description: 'use ZLUDA device as torch device',
    name: '--use-zluda',
    type: 'CheckBox',
  },
  {
    description: 'override torch version',
    name: '--override-torch',
    type: 'Input',
  },
];

const newSection: ArgumentSection = {
  section: 'AmdGPU',
  items: lsSpecifArgs,
};

const commandLineArgsIndex = lshqqytigerArguments.findIndex(arg => arg.category === 'Command Line Arguments');

if (commandLineArgsIndex !== -1 && (lshqqytigerArguments[commandLineArgsIndex] as DataSection).sections) {
  (lshqqytigerArguments[commandLineArgsIndex] as DataSection).sections.unshift(newSection);
}

export default lshqqytigerArguments;
