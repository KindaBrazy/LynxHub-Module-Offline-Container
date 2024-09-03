export type AvailablePages = '/imageGenerationPage' | '/textGenerationPage' | '/audioGenerationPage';

/** These methods will be called in the main process */
export type CardMainMethods = {
  /** Return commands based on installed directory to be executed with terminal */
  getRunCommands: (dir: string) => Promise<string | string[]>;

  /** Read saved argument from file and return data with the array of type ChosenArgument */
  readArgs?: (dir: string) => Promise<ChosenArgument[]>;

  /** Get user configured arguments and save it to desire file */
  saveArgs?: (cardDir: string, args: ChosenArgument[]) => Promise<void>;
};

/** These methods will be called in the renderer process */
export type CardRendererMethods = {
  /** This method will be called with terminal output line parameter
   * @return URL of running AI to be showing in browser of the user and
   * @return undefined if URL is not in that line */
  catchAddress: (line: string) => string | undefined;

  /** Parse the given argument to string */
  parseArgsToString?: (args: ChosenArgument[]) => string;

  /** Parse given string to the arguments */
  parseStringToArgs?: (args: string) => ChosenArgument[];
};

export type CardData = {
  /**  ID will be used to managing state of card */
  id: string;

  /**  Card background
   *
   * **Acceptable sources: **
   * - github.com
   *    - api.github.com
   *    - *.githubusercontent.com
   * - image.civitai.com
   */
  bgUrl: string;

  /**  Url to repository (Using this url recognize, clone and update card) */
  repoUrl: string;

  /**  The title of card */
  title: string;

  /**  Description about what card does */
  description: string;

  /**  The directory of extension (In relative path like '/extensions')
   *   - Leave undefined if WebUI have no extension ability
   */
  extensionsDir?: string;

  /** Type of AI (Using type for things like discord activity status) */
  type?: 'image' | 'audio' | 'text' | 'unknown';

  /** List of all available arguments
   *  - Leave undefined if WebUI have no arguments to config
   */
  arguments?: ArgumentsData;

  /** These methods will be called in the renderer process
   * @description This methods will be used when user interaction (Like recognizing URL to show in browser)
   */
  methods: CardRendererMethods;
};

export type PagesData = {
  /** Router path (For placing the card in relative page) */
  routePath: AvailablePages;

  /** Cards data */
  cards: CardData[];
};

export type CardModules = PagesData[];

export type ChosenArgument = {name: string; value: string};

export type ArgumentType = 'Directory' | 'File' | 'Input' | 'DropDown' | 'CheckBox';

export type ArgumentItem = {
  name: string;
  description?: string;
  type: ArgumentType;
  defaultValue?: any;
  values?: string[];
};

export type ArgumentSection = {
  section: string;
  items: ArgumentItem[];
};

export type DataSection = {
  category: string;
  condition?: string;
  sections: ArgumentSection[];
};
export type DataItem = {
  category: string;
  condition?: string;
  items: ArgumentItem[];
};

export type ArgumentsData = (DataItem | DataSection)[];

export type ArgType = {name: string; value: string};
export type Category = 'env' | 'envVar' | 'cl' | undefined;

export type MainModules = {
  /** The ID of the card that using these methods */
  id: string;

  /** These methods will be called in the main process
   * @description This methods will be used when user interaction (Like run, config, etc.)
   */
  methods: CardMainMethods;
};
