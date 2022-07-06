function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

const array = [4, 6, 10];
const target = 10;
console.log(search(array, target));
