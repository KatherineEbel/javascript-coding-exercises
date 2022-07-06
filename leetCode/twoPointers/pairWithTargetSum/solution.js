/*
Input: array of numbers
Output: number

Rules:
input numbers represent heights
heights should be in increasing order

/*
Input: array of sorted numbers, target sum
Output: array with two numbers that's sum equals target

initialize start index to zero
initialize end index to length of input - 1

if input at start index + input at index less than target
  increment start index

if input at start index + input at index greater than target
  decrement end index

else input at start index + input at end index equals target
  so return both indexes in an array
*/

function solution(input, target) {
  let start = 0;
  let end = input.length - 1;

  while (start < end) {
    const sum = input[start] + input[end];
    if (sum === target) return [start, end];
    if (sum < target) {
      start += 1;
    } else {
      end -= 1;
    }
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
