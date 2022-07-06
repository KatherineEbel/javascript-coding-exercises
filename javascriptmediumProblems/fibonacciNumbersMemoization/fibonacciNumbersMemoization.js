/*
* Memoization: involves saving a computed answer for future reusejjj
* */

const fibs = {};

function fibonacci(n) {
  if (n <= 1) return n;
  if (fibs[n]) return fibs[n];
  fibs[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibs[n];
}

module.exports = fibonacci;
