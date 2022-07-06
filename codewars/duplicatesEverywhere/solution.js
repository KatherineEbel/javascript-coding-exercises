/*
Rules:

Whenever two keys share same character, the larger key
will keep the character
If duplicate character found in same array first should be kept

iterate over object values in reverse
keep an array of available letters
remove letters that occur at current key
create set from characters
* */

const removeDuplicateIds = (obj) => {
  const letters = {};
  Object.keys(obj).reverse().forEach((key) => {
    obj[key] = obj[key].filter((char) => {
      if (letters[char]) return false;
      letters[char] = true;
      return true;
    });
  });
  return obj;
};

const obj = {
  1: ['A', 'B', 'C'],
  2: ['A', 'B', 'D', 'A'],
};
const result = removeDuplicateIds(obj);
console.log(result);

const obj1 = {
  1: ['C', 'F', 'G'],
  2: ['A', 'B', 'C'],
  3: ['A', 'B', 'D'],
};
const result1 = removeDuplicateIds(obj1);
console.log(result1);

const obj2 = {
  1: ['A'],
  2: ['A'],
  3: ['A'],
};
const result2 = removeDuplicateIds(obj2);
console.log(result2);

const obj3 = {
  432: ['A', 'A', 'B', 'D'],
  53: ['L', 'G', 'B', 'C'],
  236: ['L', 'A', 'X', 'G', 'H', 'X'],
  11: ['P', 'R', 'S', 'D'],
};

const result3 = removeDuplicateIds(obj3);
console.log(result3);
