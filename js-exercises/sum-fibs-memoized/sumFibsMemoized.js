function sumFibs(num) {
  let a = 1;
  let b = 1;
  let sum = 2;

  let tmp = a + b;
  while (tmp <= num) {
    if (tmp % 2 !== 0 && tmp <= num) {
      sum += tmp;
    }
    a = b;
    b = tmp;
    tmp = a + b;
  }

  return sum;
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
