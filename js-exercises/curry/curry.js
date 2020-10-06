const curry = (fn) => {
  const innerFn = (N, args) => (...x) => {
    if (N <= x.length) {
      return fn(...args, ...x);
    }
    return innerFn(N - x.length, [...args, ...x]);
  };

  return innerFn(fn.length, []);
};

export { curry };
