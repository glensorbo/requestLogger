import { createCloseConLog } from './createCloseConLog';
import { createId } from './createId';
import { createRequestLog } from './createRequestLog';
import { createResponseLog } from './createResponseLog';
import type { NextFunction, Request, Response } from 'express';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const startTime = process.hrtime();
  const id = createId();
  createRequestLog(req, id);
  const onCloseHandler = () => createCloseConLog(id);
  res.on('finish', () => {
    createResponseLog(res, id, startTime);
    res.removeListener('close', onCloseHandler);
  });
  res.on('close', onCloseHandler);
  next();
};
