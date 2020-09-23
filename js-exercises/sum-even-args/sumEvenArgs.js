const sumEvenArgs = (...args) => args.reduce(
  (previousValue, currentValue) => {
    if (!(currentValue % 2)) {
      return previousValue + currentValue;
    }
    return previousValue;
  }, 0,
);

export { sumEvenArgs };
