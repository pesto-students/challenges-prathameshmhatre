function chunkArrayInGroups(array, chunkSize) {
  const finalArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    finalArray.push(chunk);
  }
  return finalArray;
}

export { chunkArrayInGroups };
