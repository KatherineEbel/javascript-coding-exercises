const sumSquareDifference = require('./solution');

describe(`sumSquareDifference`, () => {
  it(``, () => {
    expect(sumSquareDifference(3)).toBe(22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  })
  
  it(``, () => {
    expect(sumSquareDifference(10)).toBe(2640);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  })
  
  it(``, () => {
    expect(sumSquareDifference(1)).toBe(0);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  })
  
  it(``, () => {
    expect(sumSquareDifference(100)).toBe(2516450);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  })
})
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
