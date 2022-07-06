/*
* Input: Array of String
* Output: Array
* */

function solution(words) {
  const anagrams = {};
  const sortedWords = words.map((word) => [...word].sort().join(''));
  words.forEach((word, idx) => {
    if (!(sortedWords[idx] in anagrams)) {
      anagrams[sortedWords[idx]] = [words[idx]];
    } else {
      anagrams[sortedWords[idx]].push(words[idx]);
    }
  });
  return Object.values(anagrams);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(solution(strs));
