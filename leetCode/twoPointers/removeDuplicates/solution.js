/*
Input: Array of sorted numbers
Output: Number (length of array with no duplicates)

Use one pointer for iterating the array
Use another pointer for placing the next non-duplicate number.
Shift numbers left when 'key' is encountered
*/

// Examples

function solution(arr) {
  let nextNonDuplicate = 1;
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[nextNonDuplicate - 1] !== arr[idx]) {
      // eslint-disable-next-line no-param-reassign
      arr[nextNonDuplicate] = arr[idx];
      nextNonDuplicate += 1;
    }
  }
  return nextNonDuplicate;
}

let arr = [2, 3, 3, 3, 6, 9, 9];
console.log(solution(arr) === 4);
console.log(arr); // first four elements after removing duplicates are [2, 3, 6, 9]

arr = [2, 2, 2, 11];
console.log(solution(arr) === 2);
console.log(arr);
