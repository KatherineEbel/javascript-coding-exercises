function smallestSubArray(sum, array) {
  let currentSum = 0;
  let minLength = Infinity;
  let start = 0;
  for (let end = 0; end < array.length; end += 1) {
    currentSum += array[end];
    while (currentSum >= sum) {
      minLength = Math.min(minLength, end - start + 1);
      currentSum -= array[start];
      start += 1;
    }
  }
  return minLength;
}

let arr = [2, 1, 5, 2, 3, 2];
let s = 7;
console.log(smallestSubArray(s, arr));
arr = [2, 1, 5, 2, 8];
s = 7;
console.log(smallestSubArray(s, arr));
arr = [3, 4, 1, 1, 6];
s = 8;
console.log(smallestSubArray(s, arr));
