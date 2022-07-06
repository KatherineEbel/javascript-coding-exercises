/*
Input: sorted array
Output: new array

Rules:
square all the numbers in the input array
 */
/*
Input: sorted array
Output: new array

Rules:
square all the numbers in the input array
find first index of non-negative number
use two pointers
first pointer iterates starting from highest number
second pointer iterates starting from lowest number
at each step, whichever number gives us a bigger number square
add that to the output array and update appropriate pointer
 */

function solution(array) {
  const { length } = array;
  const squares = [];
  let highestSquareIdx = length - 1;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    const [leftSq, rightSq] = [array[left] ** 2, array[right] ** 2];
    if (leftSq > rightSq) {
      squares[highestSquareIdx] = leftSq;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSq;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }
  return squares;
}

let arr = [-2, -1, 0, 2, 3];
// [0, 1, 1, 4, 9]
console.log(solution(arr));

arr = [-3, -1, 0, 1, 2];
// [0, 1, 1, 4, 9]
console.log(solution(arr));
