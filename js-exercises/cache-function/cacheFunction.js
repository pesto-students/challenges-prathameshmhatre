function cacheFunction(fn) {
  /* create a object to store / cache values */
  const cache = {};
  let result;
  return (value) => {
    /* Check if the argument  exists in cache and return */
    if (value in cache) {
      result = cache[value];
    } else {
      /* If not excute the funtion, save the result and return the same */
      result = fn(value);
      cache[value] = result;
    }
    return result;
  };
}

export { cacheFunction };
