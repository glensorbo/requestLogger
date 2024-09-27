import type { ForegroundColor } from './ForegroundColors';

export const getStatusColor = (status: number): ForegroundColor => {
  if (status >= 500) return 'red';
  if (status >= 400) return 'red';
  if (status >= 300) return 'yellow';
  if (status >= 200) return 'green';
  return 'gray';
};
