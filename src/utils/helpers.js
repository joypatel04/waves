export const randomWaveGenerator = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomViewsGenerator = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.abs(randomNumber) > 999
    ? `${Math.sign(randomNumber) * (Math.abs(randomNumber) / 1000).toFixed(1)}k`
    : Math.sign(randomNumber) * Math.abs(randomNumber);
};

export const getRequestedUrl = ({type, value}) => {
  switch (type) {
    case 'instagram':
      return `https://www.instagram.com/${value}/`;
    case 'linkedin':
      return `https://www.linkedin.com/in/${value}/`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?phone=${value}`;
    case 'github':
      return `https://github.com/${value}`;
    case 'email':
      return `mailto:${value}`;
    case 'website':
      return `https://${value}`;
    default:
      return value;
  }
};
