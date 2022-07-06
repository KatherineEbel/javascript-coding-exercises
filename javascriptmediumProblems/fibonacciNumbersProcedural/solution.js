/*
* 1, 1, 2, 3, 5
* */

function fibonacci(nth) {
  let [first, second] = [1, 1];
  let fib;
  if (nth <= 2) return first;
  for (let idx = 3; idx <= nth; idx += 1) {
    fib = first + second;
    first = second;
    second = fib;
  }
  return fib;
}

module.exports = fibonacci;
