function removeParentheses(s) {
  return s.replace(/\(.+\)/g, '');
}

console.log(removeParentheses('example(unwanted thing)example') === 'exampleexample');
console.log(removeParentheses('example (unwanted thing) example') === 'example  example');
console.log(removeParentheses('a (bc d)e') === 'a e');
console.log(removeParentheses('a(b(c))') === 'a');
console.log(removeParentheses('hello example (words(more words) here) something') === 'hello example  something');
console.log(removeParentheses('(first group) (second group) (third group)') === '(first group) (second group) (third group)');
