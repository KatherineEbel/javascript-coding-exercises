/*
* Take the number 735291 and rotate it by one digit
* to the left getting 352917.
*
* Next keep first digit fixed in place and rotate
* the remaining digits to get 329175
*
* keep first 2 digits in place and rotate again
* to get 321759
*
* keep first 3 digits in place and rotate again
* to get 321597
*
* finally keep first 4 digits in place and rotate final 2 digits
* to get 321579
*
* This is tha maximum rotation of the original number
*
* Input: Number
* Returns Number
*
* use rotate rightmost digits
* keep track of index for digits being rotated
* save string representation of number
* start n at 1
* from 1 up to
*
* 735291 0 digits.length
* 352917 1 digits.length - i
* 329175 2
* 321759 3
* 321597
* 321579
*
* 35
*
* 105
* 051
* 15
* Data structure:
* Array to iterate through digits
* use index to calculate rightmost value to rotate
* iterate through digits
* subtract i from length of digits and rotate
* */

const rotateRightmostDigits = require('../rotationPart2/solution');

function maxRotation(number) {
  const digits = String(number).split('');
  return digits
    .reduce((num, digit, idx) => rotateRightmostDigits(+num, digits.length - idx), number);
}

module.exports = maxRotation;
