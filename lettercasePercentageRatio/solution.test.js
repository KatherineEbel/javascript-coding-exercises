const letterPercentages = require('./solution');

describe(`letterPercentages`, () => {
  it(`passes first test case`, () => {
    const actual = letterPercentages('abCdef 123');
    expect(actual).toEqual(expect.objectContaining({ lowercase: '50.00', uppercase: '10.00', neither: '40.00'}))
  })
  
  it(`passes second test case`, () => {
    const actual = letterPercentages('abCdef 123');
    expect(actual).toEqual(expect.objectContaining({ lowercase: '50.00', uppercase: '10.00', neither: '40.00'}))
  })
})
