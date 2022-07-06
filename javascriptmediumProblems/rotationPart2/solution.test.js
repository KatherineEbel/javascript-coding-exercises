const rotateRightmostDigits = require('./solution')

describe(`rotateRightmostDigits`, () => {
  it(`rotates 1 digit`, () => {
    const actual = rotateRightmostDigits(735291, 1);
    expect(actual).toBe(735291)
  })
  
  it(`rotates 2 digits`, () => {
    const actual = rotateRightmostDigits(735291, 2);
    expect(actual).toBe(735219)
  })
  
  it(`rotates 3 digits`, () => {
    const actual = rotateRightmostDigits(735291, 3);
    expect(actual).toBe(735912)
  })
  
  it(`rotates 4 digits`, () => {
    const actual = rotateRightmostDigits(735291, 4);
    expect(actual).toBe(732915)
  })
  
  it(`rotates 5 digits`, () => {
    const actual = rotateRightmostDigits(735291, 5);
    expect(actual).toBe(752913)
  })
  
  it(`rotates 6 digits`, () => {
    const actual = rotateRightmostDigits(735291, 6);
    expect(actual).toBe(352917)
  })
})
