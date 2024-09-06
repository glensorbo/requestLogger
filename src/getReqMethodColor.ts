import { styleText } from 'node:util';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const getReqMethodColor = (method: Method) => {
  switch (method) {
    case 'GET':
      return styleText('green', method);
    case 'POST':
      return styleText('yellow', method);
    case 'PUT':
      return styleText('cyan', method);
    case 'DELETE':
      return styleText('red', method);
    default:
      return styleText('gray', method);
  }
};
