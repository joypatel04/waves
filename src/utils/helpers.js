export const randomWaveGenerator = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomViewsGenerator = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.abs(randomNumber) > 999
    ? `${Math.sign(randomNumber) * (Math.abs(randomNumber) / 1000).toFixed(1)}k`
    : Math.sign(randomNumber) * Math.abs(randomNumber);
};
