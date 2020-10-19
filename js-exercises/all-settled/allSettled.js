/* eslint-disable no-loop-func */
function hasIteratorFunction(obj) {
  if (typeof obj[Symbol.iterator] !== 'function') {
    throw TypeError(`${obj} is not a iterable`);
  }
}

function allSettled(promises) {
  hasIteratorFunction(promises);
  return new Promise((resolve) => {
    const results = [];
    let counter = 0;
    function resolvedObject(value) {
      return {
        status: 'fulfilled',
        value,
      };
    }

    function rejectedObject(reason) {
      return {
        status: 'rejected',
        reason,
      };
    }
    for (const [i, promise] of Object.entries(promises)) {
      if (promise instanceof Promise) {
        promise.then((result) => {
          results[i] = resolvedObject(result);
          counter += 1;
          if (counter >= promises.length) {
            resolve(results);
          }
        }, (error) => {
          counter += 1;
          results[i] = rejectedObject(error);
        });
      } else {
        results[i] = resolvedObject(promise);
        counter += 1;
        if (counter >= promises.length) {
          resolve(results);
        }
      }
    }
  });
}

export { allSettled };
