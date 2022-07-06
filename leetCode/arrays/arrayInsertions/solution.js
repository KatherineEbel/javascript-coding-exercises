/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j -= 1) {
        arr[j] = arr[j - 1];
      }
    }
  }
}

let arr = [1, 0, 3, 2, 0, 0, 9];
duplicateZeros(arr);
console.log(arr);
arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
arr = [0, 0, 0, 0, 0, 0, 0];
duplicateZeros(arr);
console.log(arr);
