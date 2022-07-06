/**
 * Definition for isBadVersion()
 *
 * @param {Number} version number
 * @return {boolean} whether the version is bad
 * isBad = function(version) {
 *     ...
 * };
 */

function isBad(version) {
  return version > 0;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  /**
   * @param {Number} n Total versions
   * @return {Number} The first bad version
   */
  return function findBad(n) {
    let start = 1;
    let end = n;
    while (start <= end) {
      const middle = Math.floor(start + (end - start) / 2);
      if (isBad(middle)) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return start;
  };
}

console.log(solution(isBad)(1));
// console.log(solution(isBad)(30));
