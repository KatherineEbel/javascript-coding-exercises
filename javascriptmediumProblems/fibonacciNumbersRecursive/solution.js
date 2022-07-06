/*
* Fibonacci series is a sequence of numbers in which each number is
* the sum of the previous two numbers
*
* The first two Fibonacci numbers are 1 and 1
* The third is first + second => 3
* The fourth is second + third => 3
* The fifth is third + fourth => 5
*
* F(1) = 1
* F(2) = 1
* F(n) = F(n - 1) + F(n - 2) where n > 2
*
* Recursion: a function calling itself
*
* Write a recursive function that computes the nth Fibonacci number
* Input: 1 argument (nth) number
*
* if nth is 1 or 2 return nth
* otherwise call fibonacci with
* the result of fib nth - 1 plus fib nth - 2
* */

function fibonacci(nth) {
  if (nth <= 2) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

module.exports = fibonacci;
