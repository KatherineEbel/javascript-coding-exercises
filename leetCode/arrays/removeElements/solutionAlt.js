function removeElement(nums, val) {
  let idx = 0;
  // const { length } = nums;
  while (idx < nums.length) {
    if (nums[idx] === val) {
      nums[idx] = nums[nums.length - 1];
      nums.length -= 1;
    } else {
      idx += 1;
    }
  }
  return nums.length;
}

let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);

nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2));
console.log(nums);

nums = [3];
const val = 3;
let expected = [];
let k = removeElement(nums, 3);
console.log(k === expected.length);
console.log(nums);

nums = [3, 3];
expected = [];
k = removeElement(nums, 3);
console.log(k === expected.length);
console.log(nums);
