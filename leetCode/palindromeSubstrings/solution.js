/**
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  const palindromes = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    palindromes[i][i] = true;
    count += 1;
  }

  for (let startIdx = s.length - 1; startIdx >= 0; startIdx -= 1) {
    for (let endIdx = startIdx + 1; endIdx < s.length; endIdx += 1) {
      if (s.charAt(startIdx) === s.charAt(endIdx)) {
        if (endIdx - startIdx === 1 || palindromes[startIdx + 1][endIdx - 1]) {
          palindromes[startIdx][endIdx] = true;
          count += 1;
        }
      }
    }
  }
  return count;
}

let string = 'abdbca';
console.log(solution(string));

string = 'cddpd';
console.log(solution(string));

string = 'pqrqp';
console.log(solution(string));

string = 'anna';
console.log(solution(string));
