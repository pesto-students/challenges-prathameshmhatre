const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const abbreviateString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('parameter should be of type string');
  }

  if (!str.length) {
    return '';
  }

  const strArray = str.split(' ');

  if (!strArray.length > 1) {
    return str;
  }

  const firstElement = strArray[0];
  const lastLetter = strArray[strArray.length - 1].charAt(0);
  const endOfStr = '.';

  return [firstElement, capitalize(lastLetter) + endOfStr].join(' ');
};

export { abbreviateString };
