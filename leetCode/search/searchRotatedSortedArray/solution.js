function pivot(rotatedArray) {
  // [4,5,6,7,0,1,2]
  let start = 0;
  let end = rotatedArray.length - 1;
  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const isPivot = rotatedArray[middle + 1] < rotatedArray[middle];
    if (isPivot) return middle;
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {

}
