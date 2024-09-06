import dayjs from 'dayjs';
import { getReqMethodColor, type Method } from './getReqMethodColor';
import { styleText } from 'node:util';
import type { Request } from 'express';

export const createRequestLog = (req: Request, id: string) => {
  const method = req.method;
  const path = req.path;
  const time = styleText('dim', dayjs().format('YYYY-MM-DD HH:ss'));
  const log = `${time} - ${id} ${styleText('dim', '-->')} ${getReqMethodColor(method as Method)} ${path} \n`;
  process.stdout.write(log);
};
