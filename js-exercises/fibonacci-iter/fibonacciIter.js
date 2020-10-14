const fibonacciIter = {
  currentValue: 0,
  nextValue: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const retunValue = this.currentValue;
    this.currentValue = this.nextValue;
    this.nextValue = retunValue + this.currentValue;
    return {
      value: retunValue, done: false,
    };
  },
};

export { fibonacciIter };
