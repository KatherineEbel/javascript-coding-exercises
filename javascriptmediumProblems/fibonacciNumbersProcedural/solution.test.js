const fibonacci = require('./solution')

describe(`fibonacci`, () => {
  it(`returns 1 with input of 1`, () => {
    const actual = fibonacci(1)
    expect(actual).toBe(1);
  })
  
  it(`returns 1 with input 2`, () => {
    const actual = fibonacci(2)
    expect(actual).toBe(1);
  })
  
  it(`returns 2 given 3`, () => {
    const actual = fibonacci(3)
    expect(actual).toBe(2)
  })
  
  it(`returns 3 given 4`, () => {
    const actual = fibonacci(4)
    expect(actual).toBe(3)
  })
  
  it(`returns 5 given 5`, () => {
    const actual = fibonacci(5)
    expect(actual).toBe(5)
  })
  
  it(`returns 144 given 12`, () => {
    expect(fibonacci(12)).toBe(144)
  })
  
  it(`returns 6765 given 20`, () => {
    expect(fibonacci(20)).toBe(6765)
  })
})
