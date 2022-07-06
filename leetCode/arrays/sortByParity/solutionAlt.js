/*
Input: array numbers
Output: array numbers

Rules:
move all even integers to beginning
move all odd integers to end

track current idx.
track write idx

iterate over array
if not element % 2 swap element and increment write idx

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  return nums.sort((a) => (a % 2 ? 1 : -1));
}

let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));

nums = [2, 4, 3, 1];
console.log(sortArrayByParity(nums));

nums = [2, 4, 3, 1, 8, 10];
console.log(sortArrayByParity(nums));
