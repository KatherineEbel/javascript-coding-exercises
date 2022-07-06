const moveZeros = require('./solution');

describe(`moveZeros`, () => {
  it(`passes first test case`, () => {
    expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  })
  
  it(`passes second test case`, () => {
    expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0])
  })
})
