function findMissingNumber(array) {
  let idx = 0;
  const { length } = array;
  while (idx < length) {
    const actual = array[idx];
    if (array[idx] < length && array[idx] !== array[actual]) {
      [array[idx], array[actual]] = [array[actual], array[idx]];
    } else {
      idx += 1;
    }
  }
  array.some((num, i) => {
    if (num === i) return false;
    idx = i;
    return true;
  });
  return idx;
}

let arr = [4, 0, 3, 1];
console.log(findMissingNumber(arr));
arr = [8, 3, 5, 2, 4, 6, 0, 1];
console.log(findMissingNumber(arr));
