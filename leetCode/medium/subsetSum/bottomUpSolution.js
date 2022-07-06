/*
given a set of positive numbers, determine if a subset exists whose
sum is equal to a given number 'S'
* */

const isSubsetSum = (nums, sum) => {
  const n = nums.length;
  const memo = Array(n).fill(false)
    .map(() => Array(sum + 1).fill(false));
  memo.forEach((_, idx) => { memo[idx][0] = true; });
  for (let s = 1; s <= sum; s += 1) memo[0][s] = nums[0] === s;
  for (let idx = 1; idx < nums.length; idx += 1) {
    for (let s = 1; s <= sum; s += 1) {
      if (memo[idx - 1][s]) {
        memo[idx][s] = memo[idx - 1][s];
      } else if (s >= nums[idx]) {
        memo[idx][s] = memo[idx - 1][s - nums[idx]];
      }
    }
  }
  return memo[nums.length - 1][sum];
};

let arr = [1, 2, 3, 7];
console.log(isSubsetSum(arr, 6) === true);

arr = [1, 2, 7, 1, 5];
console.log(isSubsetSum(arr, 10) === true);

arr = [1, 3, 4, 8];
console.log(isSubsetSum(arr, 6) === false);
