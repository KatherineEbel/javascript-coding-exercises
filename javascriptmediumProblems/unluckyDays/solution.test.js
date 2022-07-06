const fridayThe13ths = require('./solution')

describe('fridayThe13ths', () => {
  it(`returns 1 given 1986`, () => {
    expect(fridayThe13ths(1986)).toBe(1)
  })
  
  it(`returns 3 given 2015`, () => {
    expect(fridayThe13ths(2015)).toBe(3)
  })
  
  it(`returns 2 given 2017`, () => {
    expect(fridayThe13ths(2017)).toBe(2)
  })
})
