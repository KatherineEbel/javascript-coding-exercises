function sort(numbers) {
  let idx = 0;
  while (idx < numbers.length) {
    const actualIdx = numbers[idx] - 1;
    if (numbers[idx] !== numbers[actualIdx]) {
      [numbers[idx], numbers[actualIdx]] = [numbers[actualIdx], numbers[idx]];
    } else {
      idx += 1;
    }
  }
}

let input = [3, 1, 5, 4, 2];
sort(input);
console.log(input);
input = [2, 6, 4, 3, 1, 5];
sort(input);
console.log(input);
input = [1, 5, 6, 4, 3, 2];
sort(input);
console.log(input);
