const triangle = require('./solution')

describe('triangle', () => {
  it(`recognizes acute triangles`, () => {
    const actual = triangle(60, 70, 50);
    expect(actual).toBe('acute');
  });
  
  it(`recognizes obtuse triangles`, () => {
    const actual = triangle(120, 50, 10);
    expect(actual).toBe('obtuse')
  });
  
  it(`recognizes right triangles`, () => {
    const actual = triangle(30, 90, 60);
    expect(actual).toBe('right');
  });
  
  it(`doesn't allow 0 angles`, () => {
    const actual = triangle(0, 90, 90);
    expect(actual).toBe('invalid');
  });
  
  it(`requires sides to equal 180`, () => {
    const actual = triangle(50, 50, 50);
    expect(actual).toBe('invalid');
  });
})
