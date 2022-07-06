const triangle = require('./solution')

describe('triangle', () => {
  it(`returns equilateral given 3 3 3`, () => {
    const actual = triangle(3, 3, 3);
    expect(actual).toBe('equilateral')
  })
  
  it(`returns equilateral given 3 3 1.5`, () => {
    const actual = triangle(3, 3, 1.5);
    expect(actual).toBe('isosceles')
  })
  
  it(`returns scalene given 3 4 5`, () => {
    const actual = triangle(3, 4, 5);
    expect(actual).toBe('scalene')
  })
  
  
  it(`returns scalene given 5 3 4`, () => {
    const actual = triangle(5, 3, 4);
    expect(actual).toBe('scalene')
  })
  
  it(`returns invalid given 0 3 3`, () => {
    const actual = triangle(0, 3, 3);
    expect(actual).toBe('invalid')
  })
  
  it(`returns invalid given 3 1 1`, () => {
    const actual = triangle(3, 1, 1);
    expect(actual).toBe('invalid')
  })
})
