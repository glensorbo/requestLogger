import dayjs from 'dayjs';
import { styleText } from 'node:util';

export const createCloseConLog = (id: string) => {
  const time = styleText('dim', dayjs().format('YYYY-MM-DD HH:ss'));
  process.stdout.write(
    `${time} - ${id} ${styleText('dim', '-X-')} ${styleText('red', 'connection closed before res end/flush')} \n`,
  );
};
