/*
* input: two arrays
* return: new array
*
* rules:
* contains all elements from both arrays
* each element taken in alternation
* both input arrays are not empty
* both have same number of elements
*
*
* D and A:
* create an array of length both arrays
* map result array
* if index even take element from first array
* if index odd take element from last array
*
*
*
* */

// function interleave(array1, array2) {
//   return new Array(array1.length + array2.length).fill(null)
//     .map((_, idx) => (idx % 2 === 0 ? array1.shift() : array2.shift()));
// }

function interleave(array1, array2) {
  return array1
    .reduce((combined, _, idx) => [...combined, array1[idx], array2[idx]], []);
}

module.exports = interleave;
