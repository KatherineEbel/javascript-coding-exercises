function subsets(nums) {
  const allSets = nums.reduce((sets, num) => {
    sets.forEach((sub) => {
      const set = sub.slice();
      set.push(num);
      sets.push(set);
    });
    return sets;
  }, [[]]);
  return new Set(allSets);
}

let arr = [1, 3, 3];
console.log(subsets(arr));

arr = [1, 5, 3, 3];
console.log(subsets(arr));

arr = [0];
console.log(subsets(arr));

arr = [1, 2, 2];
console.log(subsets(arr));
