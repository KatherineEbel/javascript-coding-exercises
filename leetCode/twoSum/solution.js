/*
* Given array of sorted numbers and target sum,
* find a pair in the array whose sum is equal to the given target
* Input: Array, Number
* Output: Array length 2
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = { [nums[0]]: 0 };
  for (let idx = 1; idx < nums.length; idx += 1) {
    const val = target - nums[idx];
    if (val in map) return [map[val], idx];
    map[nums[idx]] = idx;
  }
}

let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));

nums = [3, 2, 4];
console.log(twoSum(nums, 6));

nums = [3, 3];
console.log(twoSum(nums, 6));

nums = [1, 2, 3, 4, 6];
console.log(twoSum(nums, 6));

nums = [2, 5, 9, 11];
console.log(twoSum(nums, 11));

nums = [3, 2, 4];
console.log(twoSum(nums, 6));
