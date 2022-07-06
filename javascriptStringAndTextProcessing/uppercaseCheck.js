/*
* Write a function that takes a string argument and returns true
* if all the alphabetic characters inside
* the string are uppercase; otherwise, return false.
* Ignore characters that are not alphabetic.
* */

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t') === false); // false
console.log(isUppercase('T') === true); // true
console.log(isUppercase('Four Score') === false); // false
console.log(isUppercase('FOUR SCORE') === true); // true
console.log(isUppercase('4SCORE!') === true); // true
console.log(isUppercase('') === true); // true
