/*
Input: array of numbers
Output: boolean

Rules:
strictly increasing
strictly decreasing
array length >= 3

if array length less than 3 return false
keep track whether increasing or decreasing
iterate over the array using some method
initialize increasing to true
as soon as the next number isn't greater than current number
change increasing to false.
if decreasing and the next number isn't less than the current number
  return false.
return true otherwise
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
  if (arr.length < 3) return false;

  let increasing = true;
  return !arr.some((val, idx) => {
    if (idx >= arr.length - 1) return false;
    if (increasing) {
      if (arr[idx + 1] > val) return false;
      if (arr[idx + 1] === val || idx === 0) return true;
      increasing = !increasing;
    } else if (val <= arr[idx + 1]) return true;
  }) && !increasing;
};

let arr = [2, 1];
console.log(validMountainArray(arr) === false);

arr = [3, 5, 5];
console.log(validMountainArray(arr) === false);

arr = [0, 3, 1];
console.log(validMountainArray(arr) === true);

arr = [0, 2, 9, 12, 4, 1, -1];
console.log(validMountainArray(arr) === true);

arr = [0, 0, 9, 12, 4, 1, -1];
console.log(validMountainArray(arr) === false);

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(validMountainArray(arr) === false);

arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(validMountainArray(arr) === false);
