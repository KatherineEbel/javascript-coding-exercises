/*
* Input: Array of objects
* Output: Object with all properties of input objects
* */

function objConcat(objects) {
  return objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});
}

const a = { 1: '1', 2: '2', 3: '3' };
const b = {
  3: '4', 5: '6', 6: '7', 7: '8',
};
const c = {
  5: '9', 8: '9', 6: '12', 23: '35',
};
const o = [a, b, c];

console.log(objConcat(o));
