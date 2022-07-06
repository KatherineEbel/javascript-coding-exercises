/*
  Rotate an array by moving the first element to the end of the array.
  Do not modify the original array.

  Rules:
  If input not array return undefined
  If input is empty array return input

  slice the array at index 0, and
  add concat with array at index 1 to end of array
* */

function rotateArray(array) {
  // return Array.isArray(array) ? [array.at(0), ...array.slice(1)] : undefined;
  return Array.isArray(array) ? [...array.slice(1), array.at(0)] : undefined;
}

module.exports = rotateArray;
