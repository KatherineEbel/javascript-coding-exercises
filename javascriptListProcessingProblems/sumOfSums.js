/*
* Write a function that takes an array of numbers and returns the sum of the sums
* of each leading subsequence in that array. Examine the examples to see what we mean.
* You may assume that the array always contains at least one number.
* reduce to single value
* sum from 0, 1, 2
* */

const slice = (arr, idx) => arr.slice(0, idx + 1)
  .reduce((s, n) => s + n);

const sliceReducer = (sum, num, i, arr) => sum + slice(arr, i);

function sumOfSums(array) {
  return array.reduce(sliceReducer);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
