/*
* rotate the last n digits of a number
* For the rotation, rotate by one digit to the left
* move the first digit to the end
*
* we basically want to rotate a slice from the end of the array
* need to convert number to an array of characters
* use rotate function to rotate a slice from end of array
* starting at -n
* concat rotated slice to slice from 0 up to -n and
* convert array back to number
*
* input: integer number, and n (integer) number to start rotation from the end
* returns rotated number
* */

function rotateRightmostDigits(number, n) {
  if (typeof number !== 'number') return undefined;
  const digits = String(number);
  let last = digits.slice(-n);
  last = last.slice(1) + last.at(0);
  const first = digits.slice(0, -n);
  return +(first + last);
}

module.exports = rotateRightmostDigits;
