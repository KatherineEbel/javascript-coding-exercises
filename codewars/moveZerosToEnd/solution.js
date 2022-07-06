function moveZeros(arr) {
  return arr.filter((n) => n !== 0).concat(arr.filter((n) => n === 0));
}

module.exports = moveZeros;
