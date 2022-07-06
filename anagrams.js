/*
* Write a Function named anagram that takes two arguments: a word and an array of words.
* Your function should return an array that contains all the words from the array argument
* that are anagrams of the word argument.
* For example, given the word "listen" and an array of candidate words like
* "enlist", "google", "inlets", and "banana",
* the program should return an array that contains "enlist" and "inlets".
*
* */

const sort = (word) => word.split('').sort().join('');
const isAnagram = (word, other) => {
  if (word.length !== other.length) return false;
  return sort(word) === sort(other);
};

function anagram(word, list) {
  return list.filter((w) => isAnagram(word, w));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
