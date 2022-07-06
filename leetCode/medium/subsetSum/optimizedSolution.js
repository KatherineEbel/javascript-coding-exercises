/*
given a set of positive numbers, determine if a subset exists whose
sum is equal to a given number 'S'
* */

const isSubsetSum = (nums, sum) => {
  const n = nums.length;
  const memo = Array(sum + 1).fill(false);
  memo[0] = true;
  for (let s = 1; s <= sum; s += 1) memo[s] = nums[0] === s;
  for (let idx = 1; idx < n; idx += 1) {
    for (let s = sum; s >= 0; s -= 1) {
      // if memo[s], this means we can get sum 's' without nums[idx],
      // so we can move on to next number, else we can include nums[idx]
      // and see if we can find a subset to get remaining sum
      if (!memo[s] && s >= nums[idx]) {
        memo[s] = memo[s - nums[idx]];
      }
    }
  }
  return memo[sum];
};

let arr = [1, 2, 3, 7];
console.log(isSubsetSum(arr, 6) === true);

arr = [1, 2, 7, 1, 5];
console.log(isSubsetSum(arr, 10) === true);

arr = [1, 3, 4, 8];
console.log(isSubsetSum(arr, 6) === false);
