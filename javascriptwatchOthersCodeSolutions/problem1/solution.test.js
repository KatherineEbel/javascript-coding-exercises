/*
* Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages
* Other than digits, the number may also contain special character such as spaces, dash
* dot, and parentheses that should be ignored.
*
* Rules:
*
* Bad numbers:
* number < 10 digits => bad number
* number > 11 digits => bad number
* number 11 digits and first number ! 1 => bad number
*
* Good numbers
* number 11 digits and first number = 1, trim 1 and use last 10 digits
* number === 10 digits => good number
*
* Input: string
* Return :
* bad number ? '0000000000' (10 0's) : sanitized string
* if first number is 1 strip it and use last 10 digits
*
* return a string with length of 10
* remove special characters
* if length is 11 ? if first letter is not 1 return DEFAULT
* if first number is 1, trim it return slice from index 1
* if length is 10 return string
* */

const smsNumber = require('./solution');

describe('sms', () => {
  const DEFAULT = '0000000000';

  it('returns DEFAULT if number less than 10 digits', async () => {
    const actual = smsNumber('345678');
    expect(actual).toBe(DEFAULT);
  });

  it('returns DEFAULT if number is 11 digits and first number is not 1', async () => {
    const actual = smsNumber('29045555555');
    expect(actual).toBe(DEFAULT);
  });

  it('returns DEFAULT if number is longer than 11 digits', async () => {
    const actual = smsNumber('2904555555555');
    expect(actual).toBe(DEFAULT);
  });

  it('returns 4015552345 given (401)555-5555', () => {
    const actual = smsNumber('(401)555-5555');
    expect(actual).toBe('4015555555');
  });

  it('returns 4015552345 given 1(401)555-5555', () => {
    const actual = smsNumber('1(401)555-5555');
    expect(actual).toBe('4015555555');
  });

  it('works with spaces', () => {
    const actual = smsNumber('(401) 555-5555');
    expect(actual).toBe('4015555555');
  });

  it('works with no special characters', () => {
    const actual = smsNumber('4015555555');
    expect(actual).toBe('4015555555');
  });
});
