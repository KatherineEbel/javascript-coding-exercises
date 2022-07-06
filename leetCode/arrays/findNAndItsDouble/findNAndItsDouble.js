/*
Input: array of numbers
Output: boolean

Check if there exists two integers N and M such that
N is the double of M (N = 2 * M)
Use hash to store numbers seen
Iterate through the array.
if numbers seen has a key equal to 2 * number at idx
  return true
return false if complete pass through array doesn't find element
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = (arr) => {
  const seenNumbers = {};
  return arr.some((num) => {
    if (seenNumbers[num * 2] || seenNumbers[num / 2]) {
      return true;
    }
    seenNumbers[num] = true;
    return false;
  });
};

let arr = [10, 2, 5, 3];
console.log(checkIfExist(arr) === true);

arr = [7, 1, 14, 11];
console.log(checkIfExist(arr) === true);

arr = [3, 1, 7, 11];
console.log(checkIfExist(arr) === false);
