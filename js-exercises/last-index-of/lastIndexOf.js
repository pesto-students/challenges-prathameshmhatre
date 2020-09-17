function lastIndexOf(...args) {
  /* The first index is the value which we needs to find */
  const needle = args[0];
  /* The second index consist of list in we need to find the above value */
  const haystack = args[1];
  /* By default return index value */
  let lastIndex = -1;

  /* Return if the list is empty */
  if (!haystack.length) {
    return -1;
  }

  /* Go through the list if the value is found saved the last occurrence index */
  for (let i = 0; i < haystack.length; i += 1) {
    if (needle === haystack[i]) {
      lastIndex = i;
    }
  }

  return lastIndex;
}

export { lastIndexOf };
