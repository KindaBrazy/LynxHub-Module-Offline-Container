import {CardRendererMethods, InstallStepperType} from '../../types';
import {isWin} from '../../Utils/CrossUtils';

export function startInstall(stepper: InstallStepperType) {
  stepper.initialSteps([
    {title: 'Clone Git', description: 'Cloning the main repository'},
    {title: 'Test Commands', description: 'Running some commands for test'},
    {title: 'Install UI', description: 'Installing OneTrainer'},
    {title: 'Done', description: 'Finishing installation'},
  ]);

  stepper.clone('https://github.com/Nerogar/OneTrainer').then(result => {
    const {locatedPreInstall, dir} = result;
    if (locatedPreInstall) {
      stepper.setInstalled(dir);
      stepper.done(
        'OneTrainer located successfully!',
        'Pre-installed OneTrainer detected. Installation skipped as your existing setup is ready to use.',
      );
    } else {
      stepper.nextStep();
      stepper.execTerminalFile(dir, isWin ? 'install.bat' : 'install.sh').then(() => {
        stepper.setInstalled(dir);
        stepper.done(
          'OneTrainer installation complete!',
          'All installation steps completed successfully. Your OneTrainer environment is now ready for use.',
        );
      });
    }
  });
}

const nerogarRendererMethods: CardRendererMethods = {installUI: {startInstall}};

export default nerogarRendererMethods;
