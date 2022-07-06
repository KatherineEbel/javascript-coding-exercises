/* Given a number in string format, check if it is valid per the luhn formula
*  This should treat, for example '2323 2005 7766 3554' as valid
*  ignore all non-numeric characters in input string
* Rules:
*
* - Counting from rightmost digit and moving left, double the value of
*   every second digit
* - for any digit that becomes 10 or more, subtract 9 from the result
*  - 1111 becomes 2121
*  - 8763 becomes 7733 (2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7
* - add all these digits together
*   - 1111 becomes 2121 -> 2 + 1 + 2 + 1 -> checksum 6
*   - 8763 becomes 7733 -> 7 + 7 + 3 + 3 -> checksum 20
*
* if checksum ends in 0 (checksum % 10 === 0) -> valid
* else !valid
*
* Input: number in string format
* Output: boolean
*
* Algorithm
*
* initialize result total
* split string into an array and reduce right with index
* (need to modify index based on length of array since starting from right)
* convert character to number
* if index even add number to result total
* if index odd
*   double digit
*   if digit > 10
*     subtract 9 and add to result total
*   else
*     add doubled digit to result total
*
* after iterating calculate result total % 10
* if remainder is 0 return true else return false
* */

const { isValidIdentificationNumber, computeCheckDigit } = require('./solution');

describe('isValidIdentificationNumber', () => {
  it('returns true for 2323 2005 7766 3554', () => {
    const actual = isValidIdentificationNumber('2323 2005 7766 3554');
    expect(actual).toBe(true);
  });

  it('returns false for 1111', () => {
    const actual = isValidIdentificationNumber('1111');
    expect(actual).toBe(false);
  });

  it('returns true for 8763', () => {
    const actual = isValidIdentificationNumber('8763');
    expect(actual).toBe(true);
  });

  it('returns false given empty string', () => {
    const actual = isValidIdentificationNumber('');
    expect(actual).toBe(false);
  });

  it('returns false given only special characters', () => {
    const actual = isValidIdentificationNumber('4(&s*[)');
    expect(actual).toBe(false);
  });

  it('handles non-numeric characters', () => {
    const actual = isValidIdentificationNumber('%$8763#@.');
    expect(actual).toBe(true);
  });

  it('computeCheckDigit returns 2323200577663554 given 232320057766355', () => {
    const actual = computeCheckDigit('232320057766355');
    expect(actual).toBe('2323200577663554');
  });
});
