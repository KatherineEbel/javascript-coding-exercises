function searchPair(arr, targetSum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1;
      }
    } else if (targetSum > sum) {
      left += 1; // we need a pair with bigger sum
    } else {
      right -= 1; // we need a pair with smaller sum
    }
  }
}

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    searchPair(nums, -nums[i], i + 1, triplets);
  }
  return triplets;
}

let input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));

input = [];
console.log(threeSum(input));

input = [0];
console.log(threeSum(input));

input = [-3, 0, 1, 2, -1, 1, -2];
console.log(threeSum(input));
