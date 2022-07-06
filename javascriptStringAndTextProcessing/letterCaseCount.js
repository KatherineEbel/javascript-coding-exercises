/*
* Write a function that takes a string and returns an object
* containing three properties: one representing the number of
* characters in the string that are lowercase letters, one
* representing the number of characters that are uppercase letters,
* and one representing the number of characters that are neither.
* */

function letterCaseCount(string) {
  return string.split('').reduce((result, char) => {
    let type = 'neither';
    if (/[A-Z]/.test(char)) {
      type = 'uppercase';
    } else if (/[a-z]/.test(char)) {
      type = 'lowercase';
    }
    // eslint-disable-next-line no-param-reassign
    result[type] += 1;
    return result;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }

/* Launch School Solution */

/*
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}
* */
