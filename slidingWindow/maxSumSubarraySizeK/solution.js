function maxSum(array, size) {
  let max = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < array.length; end += 1) {
    sum += array[end];
    if (end >= size - 1) {
      max = Math.max(max, sum);
      sum -= array[start]; // subtract element going out
      start += 1;
    }
  }
  return max;
}

let array = [2, 1, 5, 1, 3, 2];
console.log(maxSum(array, 3));
array = [2, 3, 4, 1, 5];
console.log(maxSum(array, 2));
