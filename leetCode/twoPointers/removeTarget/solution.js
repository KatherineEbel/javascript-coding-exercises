/*
* Input: unsorted array of numbers, target key
* Output: length of new array
*
* Rules:
* array is not sorted
* remove all instances of 'key' in-place
* return new length of array

Use two pointers
first pointer iterates through array
second pointer tracks next non-key index
shift numbers left when encountering the 'key'
* */

function solution(arr, key) {
  let nextNonKeyIdx = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] !== key) {
      // eslint-disable-next-line no-param-reassign
      arr[nextNonKeyIdx] = arr[idx];
      nextNonKeyIdx += 1;
    }
  }
  return nextNonKeyIdx;
}

let arr = [3, 2, 3, 6, 3, 10, 9, 3];
let key = 3;
// The first four elements after removing every 'key' will be
// [2, 6, 10, 9]
console.log(solution(arr, key) === 4);

arr = [2, 11, 2, 2, 1];
key = 2;
// The first two elements after removing every 'key' will be
// [11, 1]
console.log(solution(arr, key) === 2);
