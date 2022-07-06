/*

Compute difference between the square of the sum
of the first n positive integers and the sum
of the squares of the first n positive integers
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
Add up numbers from 1 to n and square the total
Calculate the sum of squaring each number from 1 to n
sum of squares from square of sum

Store sums : [sum, sum of squares]
create range from 1 - n reduce to array with two values
* */

const createRange = (start, stop, step = 1) => Array.from({
  length: (stop - start) / step + 1,
}, (_, i) => start + (i * step));

const sumSquareDifference = (n) => {
  const sums = createRange(1, n)
    .reduce((totals, num) => {
      const [squareSum, sumSquares] = totals;
      return [squareSum + num, sumSquares + num ** 2];
    }, new Array(2)
      .fill(0));
  return sums.at(0) ** 2 - sums.at(-1);
};

module.exports = sumSquareDifference;
