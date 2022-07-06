function solve(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[result.length] === ' ' && str[i] !== ' ') {
      result += ' ';
    }
    result += str[i];
  }
  return result;
}

// console.log(solve('codewars')); // "srawedoc"
// console.log(solve('your code')); // "edoc ruoy"
console.log(solve('your code rocks')); // "skco redo cruoy"
console.log(solve('i love codewars')); // "s rawe docevoli"
