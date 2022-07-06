/*
* Write a function that takes two array arguments,
* each containing a list of numbers, and returns a new array containing
* the products of all combinations of number pairs
* that exist between the two arrays.
* The returned array should be sorted in ascending numerical order.
*
* iterate over smallest array
* at each index calculate of product of element at index with each element in other array
* add product to result array
* */

const multiplyEach = (arr, num) => arr.map((n) => n * num);

function multiplyAllPairs(array1, array2) {
  const reducer = (pairs, num) => pairs.concat(multiplyEach(array2, num));
  return array1.reduce(reducer, []).sort((a, b) => a - b);
}

// [2,4], [1,2,3,4] // [2, 4, 6, 8, 4, 8, 12, 16]
// [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
