/*
* Given  a string find minimum
* characters that we can remove to make it a palindrome
*
* Input: string
* output: number
* */

function solution(s) {
  const anagrams = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(0));

  for (let i = 0; i < s.length; i += 1) {
    anagrams[i][i] = 1;
  }

  for (let start = s.length - 1; start >= 0; start -= 1) {
    for (let end = start + 1; end < s.length; end += 1) {
      if (s.charAt(start) === s.charAt(end)) {
        anagrams[start][end] = 2 + anagrams[start + 1][end - 1];
      } else {
        anagrams[start][end] = Math.max(anagrams[start + 1][end], anagrams[start][end - 1]);
      }
    }
  }
  return anagrams[0][s.length - 1];
}

let input = 'abdbca';
console.log(solution(input));

input = 'cddpd';
console.log(solution(input));

input = 'pqr';
console.log(solution(input));
