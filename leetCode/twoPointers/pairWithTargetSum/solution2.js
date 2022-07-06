/*
Input: array of numbers
Output: number

Rules:
input numbers represent heights
heights should be in increasing order

/*
Input: array of sorted numbers, target sum
Output: array with two numbers that's sum equals target
Use a HashTable
Iterate through the array one number at a time
Search for target - currentValue in HashTable
  If it is there we have found the pair
Else insert currentValue into HashTable

*/

function solution(arr, target) {
  const nums = {};
  for (let idx = 0; idx < arr.length; idx += 1) {
    const num = arr[idx];
    if (target - num in nums) {
      return [nums[target - num], idx];
    }
    nums[arr[idx]] = idx;
  }
  return [-1, -1];
}

// Examples

let input = [1, 2, 3, 4, 6]; // numbers at idx 1 and 3 add up to 6
let target = 6;
console.log(solution(input, target));

input = [2, 5, 9, 11];
target = 11;
console.log(solution(input, target));
