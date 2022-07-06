const removeDuplicates = (nums) => {
  if (!nums.length) return 0;
  let idx = 0;
  for (let end = 1; end < nums.length; end += 1) {
    if (nums[end] !== nums[idx]) {
      idx += 1;
      nums[idx] = nums[end];
    }
  }
  nums.length = idx + 1;
  return nums.length;
};

let array = [1, 1, 2];
console.log(removeDuplicates(array));
console.log(array);

array = [1, 1];
console.log(removeDuplicates(array));
console.log(array);

array = [1];
console.log(removeDuplicates(array));
console.log(array);

array = [];
console.log(removeDuplicates(array));
console.log(array);

array = [-1, 0, 0, 0, 0, 3, 3];
console.log(removeDuplicates(array));
console.log(array);
