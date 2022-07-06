/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = function (num) {
  const answer = 175;
  if (num === answer) return 0;
  if (num > answer) return -1;
  return 1;
};

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const result = guess(mid);
    if (!result) {
      return mid;
    }
    if (result > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

console.log(guessNumber(200));
