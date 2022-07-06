/*
Numeric value of lowercase character is defined as its position in the alphabet
(1 -indexed)

Numeric value is sum of characters numeric values

Input:
n - length
k - numeric value
initialize string with length n all a characters
keep track of count
build string from the end
find the max numeric value without going over k (k - numericValue)
'aaa' current value 3 target 27
'aay' current value 27 target 27
'aaaaa' current value 5 target 73 remaining 68 + 1
'aaaaz' current value 30 target 73 remaining 43 + 1
'aaazz' current value 55 target 73 remaining 18 + 1
'aaszz' 1 + 1 + 19 + 26 + 26
* */

const MAX = 26;
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function maxValue(currentValue, target) {
  const remaining = target - currentValue + 1;
  if (remaining > MAX) return MAX - 1;
  return remaining - 1;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getSmallestString(n, k) {
  const smallestString = 'a'.repeat(n).split('');
  let idx = smallestString.length - 1;
  let currentValue = n;
  while (currentValue !== k && idx >= 0) {
    const value = maxValue(currentValue, k);
    smallestString[idx] = LETTERS[value];
    currentValue += value;
    idx -= 1;
  }
  return smallestString.join('');
}

let n = 3;
let k = 27;
console.log(getSmallestString(n, k) === 'aay');

n = 5;
k = 73;
console.log(getSmallestString(n, k) === 'aaszz');

n = 1;
k = 5;
console.log(getSmallestString(n, k) === 'e');

n = 2;
k = 30;
console.log(getSmallestString(n, k) === 'dz');
