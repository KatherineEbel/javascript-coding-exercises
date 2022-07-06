const maxSubArray = require('./solution');

describe('maxSubArray', () => {
  it(`passes first test case`, () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
      .toBe(6)
  })
  
  it(`passes second test case`, () => {
    expect(maxSubArray([1]))
      .toBe(1)
  })
  
  it(`passes third test case`, () => {
    expect(maxSubArray([5, 4, -1, 7, 8]))
      .toBe(23);
  })
})
