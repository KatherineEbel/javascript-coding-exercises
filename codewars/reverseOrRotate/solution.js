/*
* input: string of digits, sz
* output: string
*
* chunk: substring of initial string of size sz
*
* if chunk represents an integer that sum of cubes of its
* digits is divisible by 2, reverse that chunk;
* otherwise rotate it to the left by one position.
*
* Put together modified chunks and return result as a string
* rules:
* if sz <= 0 or str is empty return ''
* if sz > length of str return ''
* ignore last chunk if size less than sz
*
* get all chunks of sz size
*
* iterate over chunks and processChunks using reduce
* if chunk sum of cubes of digits % 2 is zero reverse
* otherwise rotate to left by one (0th position goes to end)
*
* */

function chunks(str, sz) {
  const chunkArr = [];
  for (let i = 0; i < str.length; i += sz) {
    chunkArr.push(str.slice(i, sz + i));
  }
  return chunkArr.filter((chunk) => chunk.length === sz);
}

function rotateChunk(str) {
  return str.slice(1) + str[0];
}

function processChunk(str) {
  const sum = str.split('').reduce((acc, char) => acc + (+char) ** 3, 0);
  if (sum % 2 === 0) return str.split('').reverse().join('');
  return rotateChunk(str);
}

function revrot(str, sz) {
  if (sz <= 0 || str.length === 0 || sz > str.length) return '';
  return chunks(str, sz).reduce((acc, chunk) => acc + processChunk(chunk), '');
}

module.exports = revrot;

/*

Top codewars solution:
function revrot(str, sz) {
  if (sz < 1 || sz > str.length)
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
* */
