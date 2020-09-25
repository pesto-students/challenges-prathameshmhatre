const upperLimit = 'Z'.charCodeAt(0);
const lowerLimit = 'A'.charCodeAt(0);

function checkOutsideOfBoundary(char) {
  return char.charCodeAt(0) > upperLimit || char.charCodeAt(0) < lowerLimit;
}

function shiftCharByN(char, n) {
  const totalNumberOfAlbhabet = 26;
  return String.fromCharCode(
    ((char.charCodeAt(0) + n - lowerLimit) % totalNumberOfAlbhabet) + lowerLimit,
  );
}

function rot13(str) {
  const shiftCharBy = 13;
  const changeStr = [...str].map((char) => {
    if (checkOutsideOfBoundary(char)) {
      return char;
    }
    return shiftCharByN(char, shiftCharBy);
  });

  return changeStr.join('');
}

export { rot13 };
