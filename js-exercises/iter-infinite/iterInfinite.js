// Check for safe integer
function checkSafeInteger(number) {
  if (!(Number.isSafeInteger(number))) {
    throw TypeError(`${number} is not a number`);
  }
}

function isIterable(obj) {
  if (typeof obj[Symbol.iterator] !== 'function') {
    throw TypeError(`${obj} is not a iterable`);
  }
}

function* count(start, step = 1) {
  checkSafeInteger(start);
  checkSafeInteger(step);
  let startNumber = start;
  while (true) {
    yield startNumber;
    startNumber += step;
  }
}

function* cycle(iterator, n = Infinity) {
  isIterable(iterator);
  if (n !== Infinity) {
    checkSafeInteger(n);
  }

  let i = n;

  while (i) {
    i -= 1;
    for (const el of iterator) {
      yield el;
    }
  }
}

function* repeat(value, n = Infinity) {
  if (n !== Infinity) {
    checkSafeInteger(n);
  }

  let i = n;
  while (i) {
    i -= 1;
    yield value;
  }
}

export {
  count,
  cycle,
  repeat,
};
