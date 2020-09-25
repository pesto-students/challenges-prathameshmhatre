function getLargestStringLength(strArray) {
  return strArray.reduce((a, b) => (a.length > b.length ? a.length : b.length));
}

function padStartStringArray(strArray, targetLength, padStr = '0') {
  return strArray.map((item) => item.padStart(targetLength, padStr));
}

function addBigIntegers(intString) {
  const numbersArray = intString.split('\n');
  let sum = '';

  let carry = 0;
  let digitSum;

  const largestNumberLength = getLargestStringLength(numbersArray);

  const paddedNumbersArray = padStartStringArray(numbersArray, largestNumberLength, '0');

  for (let i = 0; i < largestNumberLength; i += 1) {
    let numberSum = 0;

    paddedNumbersArray.forEach((bigInteger) => {
      numberSum += parseInt(bigInteger.charAt(largestNumberLength - 1 - i), 10);
    });

    const temp = (carry + numberSum).toString();

    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1), 10);
    carry = carry || 0;

    // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
    sum = i === largestNumberLength - 1
      ? temp + sum
      : digitSum + sum;
  }

  return sum;
}

export { addBigIntegers };
