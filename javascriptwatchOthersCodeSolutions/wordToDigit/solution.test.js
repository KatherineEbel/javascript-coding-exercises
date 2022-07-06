const wordToDigit = require('./solution')

describe(`wordToDigit`, () => {
  it(`works for example 1`, () => {
    const actual = wordToDigit('Please call me at five five five one two three four. Thanks.');
    const expected = "Please call me at 5 5 5 1 2 3 4. Thanks."
    expect(actual).toBe(expected)
  })
  
  it(`works when word includes number word`, () => {
    const actual = wordToDigit('The weight is done.')
    expect(actual).toBe('The weight is done.')
  })
})
