/*
* Write a function that takes an array of integers between 0 and 19 and returns
* an array of those integers sorted based on the English word for each number:
* */

function sortFunc(a, b) {
  const NUMBERS = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];

  if (NUMBERS[a] === NUMBERS[b]) {
    return 0;
  }
  return NUMBERS[a] > NUMBERS[b] ? 1 : -1;
}

function alphabeticNumberSort(numbers) {
  return [...numbers].sort(sortFunc);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
