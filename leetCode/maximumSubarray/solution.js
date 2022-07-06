/*
* Given an integer array nums,
* find contiguous subarray (containing at least one number)
* which has the largest sum and return its sum
*
* Subarray: continuous part of an array
*
* input: array of numbers
* output: number (sum)
*
* collect all sub arrays from length 1 to inputArr.length
* sum up all sub arrays
* return the largest value
* */

// const leadingSubstrings = (string) => string.split('')
//   .map((_, idx) => string.slice(0, idx + 1));
// const substrings = (string) => string.split('')
//   .flatMap((_, i) => leadingSubstrings(string.slice(i)));
const sum = (arr) => arr.reduce((s, num) => s + num, 0);

const subArraySums = (arr) => arr
  .map((_, i) => sum(arr.slice(0, i + 1)));

const arraySums = (arr) => arr.flatMap((el, i) => subArraySums(arr.slice(i)));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = (nums) => Math.max(...arraySums(nums));

const maxSubArray = (nums) => nums
  .reduce((s, n, i) => (s + n * (i + 1)) * (nums.length - i), 0);

console.log(maxSubArray([1, -1, 4, 2, 8]));

function maxSubArraySum(nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let index = 1; index < nums.length; index += 1) {
    currentSum += nums[index];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2]));
module.exports = maxSubArray;
