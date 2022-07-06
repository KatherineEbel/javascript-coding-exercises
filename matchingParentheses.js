/*
* Write a function that takes a string as an argument and
* returns true if the string contains properly balanced parentheses,
* false otherwise. Parentheses are properly balanced only when '(' and ')'
* occur in matching pairs, with each pair starting with '('.
* */

const OPEN_PAREN = '(';
const CLOSE_PAREN = ')';

const matchParens = (parens) => ((char) => {
  if (char === OPEN_PAREN) {
    parens.push(char);
  } else if (char === CLOSE_PAREN) {
    if (parens.pop() === undefined) {
      return false;
    }
  }
  return true;
});

const isBalanced = (string) => {
  const parens = [];
  const chars = string.replace(/[^()]/g, '').split('');
  const allMatched = chars.every(matchParens(parens));
  return allMatched ? parens.length === 0 : allMatched;
};

console.log(isBalanced('What (is) this?') === true); // true
console.log(isBalanced('What is) this?') === false); // false
console.log(isBalanced('What (is this?') === false); // false
console.log(isBalanced('((What) (is this))?') === true); // true
console.log(isBalanced('((What)) (is this))?') === false); // false
console.log(isBalanced('Hey!') === true); // true
console.log(isBalanced(')Hey!(') === false); // false
console.log(isBalanced('What ((is))) up(') === false); // false
