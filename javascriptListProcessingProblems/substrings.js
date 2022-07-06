const leadingSubstrings = require('./leadingSubstrings');

const substrings = (string) => string.split('')
  .flatMap((_, i) => leadingSubstrings(string.slice(i)));

// console.log(substrings('abcde'));

// returns
// ['a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e'];

module.exports = substrings;
