/*
* 'ababab' => ['ab', 3]
* 'ab' is repeated 3 times
* const repeatedStr = 'a' (first)
* current idx = 0
* iterate through string
* if letter at index != repeated string
*
* Rules: minimum substring
* iterate over string matching increasing slices
* if length of matches times current length == string length
* return as substring/count
* */
/**
 * @param {string} s
 * @return {array}
 */function repeatedSubstring(s) {
  let size = 1;
  const result = [s, 1];
  while (size <= Math.floor(s.length / 2)) {
    const substr = s.substring(0, size);
    const regex = new RegExp(`${substr}`, 'g');
    const k = s.match(regex).length;
    if (k * size === s.length) return [substr, k];
    size += 1;
  }
  return result;
}

let s = 'ababab';
console.log(repeatedSubstring(s)); // ['ab', 3]

s = 'abcde';
console.log(repeatedSubstring(s)); // ['abcde', 1]

s = 'abcabc';
console.log(repeatedSubstring(s)); // ['abc', 2]

s = 'aaaaa';
console.log(repeatedSubstring(s)); // ['a', 5]
