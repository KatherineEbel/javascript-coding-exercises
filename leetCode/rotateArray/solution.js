/*
[1, 2, 3, 4, 5, 6, 7]  swap 0, 4
[5, 6, 7, 1, 2, 3, 4] swap 2 6
[5, 2, 3, 4, 1, 6, 7] swap 1 5
[5, 6, 3, 4, 1, 2, 7] swap 2 6
end = array length - k - 1
move last to first
* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const rotations = k % nums.length;
  nums.unshift(...nums.splice(nums.length - rotations, rotations));
}

let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);

nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);

nums = [1];
rotate(nums, 1);
console.log(nums);

nums = [1];
rotate(nums, 2);
console.log(nums);

nums = [1, 2];
rotate(nums, 5);
console.log(nums);
