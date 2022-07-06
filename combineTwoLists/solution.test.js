const interleave = require('./solution');

describe(`interleave`, () => {
  it(`passes example 1`, () => {
    expect(interleave([1, 2, 3], ['a', 'b', 'c'])).toEqual(expect.arrayContaining([1, 'a', 2, 'b', 3, 'c']));
  })
})
