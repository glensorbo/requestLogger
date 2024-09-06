export const getStatusColor = (status: number) => {
  if (status >= 500) return 'red';
  if (status >= 400) return 'yellow';
  if (status >= 300) return 'cyan';
  if (status >= 200) return 'green';
  return 'gray';
};
