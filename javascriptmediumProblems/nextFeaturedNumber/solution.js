/*
* Featured number: odd number that is a multiple o 7
*   with all of its digits occurring exactly once each.
*
* 49 is a featured number
* 98 is not (not odd)
* 97 is not (not multiple of 7
* 133 is not (3 appears twice)
*
* Input: integer
* Return: next featured number greater than integer | error message
* if no next featured number
* the largest possible is 9876543201
*
* Data Structures:
*
* store result in number
*
* multiple of 7
*   - num % 7 === 0
* number odd
*   - num % 2 === 1
*
*
* need to count from one more than input up to MAX
* if number is featured (sub-routine)
* return number
* if number not found return error message
* */

const MAX = 9876543201;
const ERROR_MESSAGE = 'There is no possible number that fulfills those requirements.';

const isMultipleOfSeven = (num) => num % 7 === 0;
const isOdd = (num) => num % 2 === 1;
const isFeatured = (num) => {
  if (!(isMultipleOfSeven(num) && isOdd(num))) return false;
  const digits = String(num).split('');
  return new Set(digits).size === digits.length;
};

const featured = (num) => {
  let currentNum = num;
  while (currentNum < MAX) {
    currentNum += 1;
    if (isFeatured(currentNum)) return currentNum;
  }
  return ERROR_MESSAGE;
};

module.exports = featured;
