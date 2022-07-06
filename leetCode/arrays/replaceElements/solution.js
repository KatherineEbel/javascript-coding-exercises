/*
Input: array
Output: array

Rules:
Replace every element in array with greatest element among
elements to its right, and replace the last element with -1

iterate over array from the end
need variable to keep track of current max
set max to -1
will be changing idx - 1 element
swap element at current idx with max
if element at idx - 1 > max update max

*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  let maxToRight = -1;
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    const value = arr[idx];
    arr[idx] = maxToRight;
    if (value > maxToRight) maxToRight = value;
  }
  return arr;
};

let arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));

arr = [400];
console.log(replaceElements(arr));
