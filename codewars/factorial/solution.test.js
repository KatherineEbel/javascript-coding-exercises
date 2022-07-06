const factorial = require('./solution');

describe(`factorial`, () => {
  it(`passes the first testcase`, () => {
    expect(factorial(0)).toBe(1)
  });
  
  it(`passes the second testcase`, () => {
    expect(factorial(1)).toBe(1)
  });
  
  it(`passes the third testcase`, () => {
    expect(factorial(2)).toBe(2)
  });
  
  it(`passes the third testcase`, () => {
    expect(factorial(3)).toBe(6)
  });
})
