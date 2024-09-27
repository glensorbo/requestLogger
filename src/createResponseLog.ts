import dayjs from 'dayjs';
import { filesize } from 'filesize';
import http from 'http';
import { getResponseTime } from './getResponseTime';
import { getStatusColor } from './getStatusColor';
import { styleText } from 'node:util';
import type { Response } from 'express';

export const createResponseLog = (
  res: Response,
  id: string,
  startTime: [number, number],
) => {
  const statusCode = res.statusCode;
  const httpStatus = http.STATUS_CODES[statusCode] ?? '';
  const statusColor = getStatusColor(statusCode);
  const status = `${styleText(statusColor, statusCode.toString())} ${styleText(statusColor, httpStatus)}`;
  const time = styleText('dim', dayjs().format('YYYY-MM-DD HH:ss'));

  let log = `${time} - ${id} ${styleText('dim', '<--')} ${status} `;

  const contentType = res.getHeader('content-type');
  if (contentType && typeof contentType === 'string') {
    log = log.concat(styleText('magenta', `${contentType} `));
  }

  const bytes = res.getHeader('content-length');
  if (bytes) {
    log = log.concat(styleText('cyan', `${filesize(+bytes)} `));
  }

  const latency = getResponseTime(startTime);
  log = log.concat(`(${styleText('dim', `<-> ${latency} ms`)}) \n`);

  process.stdout.write(log);
};
