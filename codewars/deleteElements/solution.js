/*
Input: Array, Number
Output: Array

Rules:
Each element can appear in result up to n times
don't reorder numbers
going to need to iterate entire array
use hash to track count of numbers seen
if hash[num] equal to n then don't include that element
use filter?
* */

function deleteNth(arr, n) {
  const counts = {};
  return arr.filter((num) => {
    counts[num] = counts[num] || 0;
    if (counts[num] < n) {
      counts[num] += 1;
      return true;
    }
    return false;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1)); // [20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([20, 37, 20, 37, 21, 20], 2)); // [20, 37, 20, 37, 21]
console.log(deleteNth([])); // []

/*
Code wars top voted solution

function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}* */
