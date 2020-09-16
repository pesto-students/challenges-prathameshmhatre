function sumFibs(num) {
  /* Check for valid positive number */
  if (num <= 0) return 0;

  /* Initialized the fibbo array */
  const arrFib = [1, 1];
  let nextFib = 0;

  /* Fill the array */
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter((x) => x % 2 !== 0).reduce((a, b) => a + b);
}

function cacheFunction(fn) {
  /* use the object to store results */
  const memo = {};

  return (args) => {
    /* were the arguments already passed? if no, then store the result */
    if (!(args in memo)) {
      memo[args] = fn(args);
    }
    return memo[args];
  };
}

export { sumFibs, cacheFunction };
