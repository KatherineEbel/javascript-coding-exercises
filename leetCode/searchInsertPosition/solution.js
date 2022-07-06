/*
* Given a sorted array of distinct integers and a target value,
* return the index if the target is found.
* If not, return the index where it would be if it were inserted in order.
*
* Input: Array
* Output: Index of target or where it would be
*
* [1, 3, 5, 6] target = 5 => 2
* [1, 3, 5, 6] target = 2 => 1 (should be at index 1)
* [1, 3, 5, 6] target = 7 => 4 (should be at index 4)
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return end + 1;
}

let nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5) === 2);

// nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 2) === 1);

// nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 7) === 4);

nums = [1];
console.log(searchInsert(nums, 7) === 1);

nums = [10];
console.log(searchInsert(nums, 3) === 0);

nums = [12];
console.log(searchInsert(nums, 50) === 1);

nums = [12, 45, 87, 124, 150];
console.log(searchInsert(nums, 50) === 2);
