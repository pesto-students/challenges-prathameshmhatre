function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (const element of array.slice(0, array.length - 1)) {
    // eslint-disable-next-line no-unused-expressions
    element < pivot ? leftArray.push(element) : rightArray.push(element);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function minima(requiredNoOfElements, array) {
  return quickSort(array).slice(0, requiredNoOfElements);
}

export { minima };
