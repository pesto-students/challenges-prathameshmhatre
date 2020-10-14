function rangeIter(lb, ub) {
  if (typeof lb === 'undefined' || typeof lb === 'string') {
    throw TypeError(`${lb} is not a number`);
  }

  if (typeof ub === 'undefined' || typeof ub === 'string') {
    throw TypeError(`${ub} is not a number`);
  }
  let currentItem = lb;
  const rangeIterator = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const current = currentItem;
      currentItem = current + 1;
      return {
        value: current,
        done: current > ub,
      };
    },
  };
  return rangeIterator;
}

export { rangeIter };
