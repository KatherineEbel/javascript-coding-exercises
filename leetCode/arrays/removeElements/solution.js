/*
Input: array and value (val) that should be removed
Output: k (number of elements "remaining")

Rules:
Modify array in place

initialize k to track val count
initialize end to track current place to swap
iterate over array if element equals val
if element at end index is not equal to val
  swap element at end with element at current index
else while arr at endIndex equals val decrement end index
  swap element at idx with element at end index
after iteration return subtract k from length
if idx == endIndex break
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (nums.length === 0) return 0;
  let end = nums.length - 1;
  for (let i = 0; i <= end;) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      end -= 1;
    }
    if (nums[i] !== val) {
      i += 1;
    }
  }
  return nums.length;
};

let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);

nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2));
console.log(nums);

nums = [3];
const val = 3;
let expected = [];
let k = removeElement(nums, 3);
console.log(k === expected.length);
console.log(nums);

nums = [3, 3];
expected = [];
k = removeElement(nums, 3);
console.log(k === expected.length);
console.log(nums);
