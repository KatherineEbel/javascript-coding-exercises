/*
Word Pattern

Given a pattern and a string s, find if s follows the same pattern

Input: 2 strings
Output: boolean

Rules:
There is a one-to-one match between charcters in pattern and the string array
pattern length is >= 1
pattern contains only lower-case letters
s length is >= 1
s does not contain and leading or trailing spaces
all words in s are separated by a single space
s can be longer than pattern
save pattern index
save each word to matching pattern index until end of pattern
iterate over string array in chunks of length of pattern
window size = pattern length
increment window window size - 1
window start < string array length - pattern length
if hash[s] !== string[idx] not match
*/

function wordPattern(pattern, s) {
  let words = s.split(' ');
  if (words.length !== pattern.length) return false;
  words = new Set(words);
  const patternSet = new Set(pattern);
  return words.size === patternSet.size;
}

let pattern = 'abba';
let s = 'dog cat cat dog';
console.log(wordPattern(pattern, s) === true);

pattern = 'abba';
s = 'dog cat cat fish';
console.log(wordPattern(pattern, s) === false);

pattern = 'aaaa';
s = 'dog cat cat dog';
console.log(wordPattern(pattern, s) === false);

pattern = 'abca';
s = 'dog cat fish dog';
console.log(wordPattern(pattern, s) === true);

pattern = 'abba';
s = 'dog dog dog dog';
console.log(wordPattern(pattern, s) === false);

pattern = 'aba';
s = 'cat cat cat dog';
console.log(wordPattern(pattern, s) === false);
