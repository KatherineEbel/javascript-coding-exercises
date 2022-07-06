function solution(a, b) {
  // new RegExp(`^${a.replace('*', '.*')}$`).test(b)
  const asteriskIndex = a.indexOf('*');
  if (asteriskIndex < 0) return false;
  const replacement = b.substring(asteriskIndex, asteriskIndex + (b.length - a.length) + 1);
  return a.replace(/(\*)/, replacement) === b;
}

const str1 = 'code*s';
const str2 = 'codewars';
console.log(solution(str1, str2) === true);

// codewars solution
// const solve = (a, b) => new RegExp(`^${a.replace('*', '.*')}$`).test(b);
