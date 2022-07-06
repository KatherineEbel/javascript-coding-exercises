/*
* Factorial (n!)
* product of all positive integers
*less than or equal to n
*
* input: number
* output: number
*
* rules:
* if input below 0 or above 12 throw an exception
* (RangeError)
*
* use number to store result initialize to 1
* if n is less than 2 return 1
* use for loop iterate down to 1
* at each iteration times result times n
* return result
* */

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  if (n < 2) return 1;
  let result = 1;
  for (let idx = n; idx > 0; idx -= 1) {
    result *= idx;
  }
  return result;
}

module.exports = factorial;
