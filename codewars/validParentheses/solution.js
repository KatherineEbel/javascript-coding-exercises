/*
* Input: string
* Output: boolean
* */

/**
* @param {string} parens
* @return {boolean}
*/
function validParentheses(parens) {
  const stack = [];
  return ![...parens].some((paren) => {
    if (paren === '(') return !stack.push(paren);
    return paren === ')' && !stack.pop();
  }) && stack.length === 0;
}

console.log(validParentheses('(') === false);
console.log(validParentheses(')') === false);
console.log(validParentheses('') === true);
console.log(validParentheses('()') === true);
console.log(validParentheses('())') === false);
