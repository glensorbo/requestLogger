export const foregroundColors = [
  'cyan',
  'cyanBright',
  'gray',
  'green',
  'greenBright',
  'grey',
  'magenta',
  'magentaBright',
  'red',
  'redBright',
  'white',
  'whiteBright',
  'yellow',
  'yellowBright',
] as const;

export type ForegroundColor = (typeof foregroundColors)[number];
