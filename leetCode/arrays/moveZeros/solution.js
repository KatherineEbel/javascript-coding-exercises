/*
Input: array
Output: array

Rules:
change elements in-place without making copy
move all 0's to end of array
read pointer for iterating
pointer for non-zero elements
while write less than equal to array.length
if element is 0
increment idx

if element is not zero write to non-zero pointer and increment
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeros(nums) {
  for (let writeIdx = 0, readIdx = 0; writeIdx < nums.length;) {
    if (nums[readIdx] !== 0) {
      if (nums[readIdx] === undefined) {
        nums[writeIdx] = 0;
      } else {
        nums[writeIdx] = nums[readIdx];
      }
      writeIdx += 1;
    }
    readIdx += 1;
  }
}

let nums = [0, 1, 0, 3, 12];
console.log(nums);

nums = [0];
console.log(nums);

nums = [0, 0, 0];
console.log(nums);

nums = [0, 0, 0, 1, 2, 3];
console.log(nums);

nums = [0, 4, 0, 0, 2, 3];
console.log(nums);

module.exports = moveZeros;
