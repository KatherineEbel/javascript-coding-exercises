/*
Climbing Stairs

It takes n steps to reach the top
Each time you can either climb 1 or 2 steps
How many distinct ways can you climb to the top?

Input: Number
Output: Number

Rules:
Can take 1 or 2 steps at a time
How many distinct ways

4
1 + 1 + 1 + 1
1 + 1 + 2
1 + 2 + 1
2 + 1 + 1
2 + 2

5
1 + 1 + 1 + 1 + 1
1 + 1 + 1 + 2
1 + 2 + 1 + 1
2 + 1 + 1 + 1
2 + 2 + 1

*/

const memo = {};

function climbStairs(n) {
  if (n <= 3) return n;
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
}

// console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(45));
