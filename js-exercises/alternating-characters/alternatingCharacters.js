function getAletrnatingCharaterDeletCount(str) {
  let deleteCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      deleteCount += 1;
    }
  }
  return deleteCount;
}
function alternatingCharacters(arr) {
  return arr.map(str => getAletrnatingCharaterDeletCount(str));
}

export { alternatingCharacters };
