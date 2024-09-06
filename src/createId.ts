import { styleText } from 'node:util';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const createId = () => {
  let id = '';
  for (let i = 0; i < 4; i++) {
    id += Array.from(CHARS)[Math.ceil(Math.random() * CHARS.length - 1)];
  }

  return styleText('red', styleText('dim', id));
};
