/*
* Reverse the elements only at odd positions
* in the array
*
* [5,7,6,2,9,18,11,5]
* select all elements at odd indexes and reverse them
* iterate through input array
* if idx is odd pop last element from odd index array
* */

function reverseOddIndices(array) {
  const odds = array.filter((_, i) => i % 2 === 1);
  return array.map((el, i) => {
    return i % 2 === 1 ? odds.pop() : el;
  })
}

describe(`reverseOddIndices`, () => {
  it(`works for test case 1`, () => {
    const actual = reverseOddIndices([5,7,6,2,9,18,11,15])
    const expected = [5,15,6,18,9,2,11,7]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`works for test case 2`, () => {
    const actual = reverseOddIndices([1,2,3,4,5,6])
    const expected = [1,6,3,4,5,2]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
})
