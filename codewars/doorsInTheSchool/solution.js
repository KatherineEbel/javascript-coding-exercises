/*
* Input: number (n)
    number of pupils
  Output: number
    number of doors left open

Each student alters status of every i-th door
initialize doors
use array of size n filled with booleans

iterate through children
for each child toggle every i-th door
after n-th children comes return list of open doors

* */

function walkByDoors(student, d) {
  for (let step = student; step <= d.length; step += student) {
    d[step - 1] = !d[step - 1];
  }
}

function initDoors(numStudents) {
  return new Array(numStudents).fill(false);
}

/**
 * @param {number[]} n
 * @return {number}
 */
function doors(n) {
  const studentDoors = initDoors(n);
  studentDoors.forEach((door, idx) => {
    walkByDoors(idx + 1, studentDoors);
  });
  return studentDoors.filter((d) => d).length;
}

console.log(doors(5) === 2);
console.log(doors(10) === 3);
console.log(doors(100) === 10);

/* function doors(n){
    return ~~Math.sqrt(n)
  }
*/
