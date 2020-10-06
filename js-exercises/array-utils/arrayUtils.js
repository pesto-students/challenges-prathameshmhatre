const checkCallBackType = (callback) => typeof callback === 'function';

const map = function (callback) {
  const len = this.length;

  if (!checkCallBackType(callback)) {
    throw new TypeError('callback function is not of type function');
  }

  const newArray = [];
  for (let i = 0; i < len; i += 1) {
    newArray[i] = callback(this[i], i);
  }

  return newArray;
};

const filter = function (callback) {
  const len = this.length;

  if (!checkCallBackType(callback)) {
    throw new TypeError('callback function is not of type function');
  }
  const newArray = [];
  for (let i = 0; i < len; i += 1) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const reduce = function (callback, initialValue) {
  const len = this.length;
  if (!checkCallBackType(callback)) {
    throw new TypeError('callback function is not of type function');
  }

  if (len === 0 && initialValue === undefined) {
    throw new TypeError('cannot reduce array of length zero with no initial value');
  }
  let reducedValue = initialValue || 0;
  for (let i = 0; i < len; i += 1) {
    reducedValue = callback(reducedValue, this[i]);
  }
  return reducedValue;
};

const forEach = function (callback) {
  const len = this.length;
  if (!checkCallBackType(callback)) {
    throw new TypeError('callback function is not of type function');
  }
  for (let i = 0; i < len; i += 1) {
    callback(this[i], i);
  }
};
export {
  forEach, map, filter, reduce,
};
