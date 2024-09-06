export const getResponseTime = (startTime: [number, number]) => {
  const endTime = process.hrtime(startTime);
  return ((endTime[0] * 1000000000 + endTime[1]) / 1000000).toFixed(1);
};
