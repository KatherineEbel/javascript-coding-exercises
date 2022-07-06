const maxRotation = require('./solution')

describe(`maxRotation`, () => {
  it(`can rotate medium sized number`, () => {
    const actual = maxRotation(735291)
    const expected = 321579
    expect(actual).toBe(expected)
  })
  
  it(`can rotate 1 digit number`, () => {
    const actual = maxRotation(3)
    const expected = 3
    expect(actual).toBe(expected)
  })
  
  it(`can rotate 2 digit number`, () => {
    const actual = maxRotation(35)
    const expected = 53
    expect(actual).toBe(expected)
  })
  
  it(`drops leading zeros`, () => {
    const actual = maxRotation(105)
    const expected = 15
    expect(actual).toBe(expected)
  })
  
  it(`can rotate large number`, () => {
    const actual = maxRotation(8703529146)
    const expected = 7321609845
    expect(actual).toBe(expected)
  })
})
