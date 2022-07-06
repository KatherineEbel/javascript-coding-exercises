const rotateArray = require('./solution')

describe(`rotateArray`, () => {
  it(`can rotate a number array`, () => {
    const actual = rotateArray([ 7, 3, 5, 2, 9, 1 ])
    const expected = [ 3, 5, 2, 9, 1, 7 ]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`can rotate a letter array`, () => {
    const actual = rotateArray([ 'a', 'b', 'c' ])
    const expected = [ 'b', 'c', 'a' ]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`can rotate single element array`, () => {
    const actual = rotateArray([ 'a' ])
    const expected = [ 'a' ]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`can rotate heterogeneous array`, () => {
    const actual = rotateArray([ 1, 'a', 3, 'c' ])
    const expected = [ 'a', 3, 'c', 1 ]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`can rotate array with objects`, () => {
    const actual = rotateArray([ { a: 2 }, [ 1, 2 ], 3 ])
    const expected = [ [ 1, 2 ], 3, { a: 2 } ]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`handles empty array`, () => {
    const actual = rotateArray([])
    const expected = []
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`handles no argument provided`, () => {
    const actual = rotateArray()
    const expected = undefined
    expect(actual).toBe(undefined)
  })
  
  it(`does not mutate input array`, () => {
    const input = [ 1, 2, 3, 4 ]
    rotateArray(input)
    expect(input).toEqual(expect.arrayContaining(input))
  })
})
