/**
start with an empty set
 iterate through all numbers one by one and add them to existing sets to create new subsets
*/

function subsets(nums) {
  return nums.reduce((sets, num) => {
    sets.forEach((sub) => {
      const set = sub.slice();
      set.push(num);
      sets.push(set);
    });
    return sets;
  }, [[]]);
}

let arr = [1, 3];
console.log(subsets(arr)); // [], [1], [3], [1,3]

arr = [1, 5, 3];
console.log(subsets(arr)); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

arr = [1, 2, 3];
console.log(subsets(arr));
