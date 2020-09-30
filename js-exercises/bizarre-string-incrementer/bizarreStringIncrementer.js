function bizarreStringIncrementer(str) {
  /* First get the digits from the string */
  const bizardString = str;
  const regexToGetDigitAtEndOfSting = /\d+$/;
  let digit = bizardString.match(regexToGetDigitAtEndOfSting);
  if (!digit) {
    return bizardString + 1;
  }

  /* Destructuring cos the result of match is on 0th Index */
  [digit] = digit;

  /* Get the last digit and increment */
  let incrementedNumber = (Number(digit) + 1).toString();

  /* Retain the  padding */
  incrementedNumber = incrementedNumber.padStart(digit.length, '0');

  /* Replace with incremented string */
  const incrementedString = bizardString.replace(digit, incrementedNumber);

  return incrementedString;
}

export {
  bizarreStringIncrementer,
};
