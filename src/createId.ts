import { foregroundColors } from './ForegroundColors';
import { styleText } from 'node:util';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const createId = () => {
  let id = '';
  const color =
    foregroundColors[Math.floor(Math.random() * foregroundColors.length)];
  for (let i = 0; i < 4; i++) {
    id += Array.from(CHARS)[Math.ceil(Math.random() * CHARS.length - 1)];
  }

  return styleText(color, styleText('dim', id));
};
