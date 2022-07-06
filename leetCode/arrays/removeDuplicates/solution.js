const removeDuplicates = (nums) => {
  let idx = 0;
  while (idx < nums.length) {
    if (nums[idx] === nums[idx + 1]) {
      nums.splice(idx, 1);
    } else {
      idx += 1;
    }
  }
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
