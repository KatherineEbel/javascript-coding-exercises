const featured = require('./solution');

describe(`featured`, () => {
  it(`returns 21 given 12`, () => {
    expect(featured(12)).toBe(21);
  });
  
  it(`returns 21 given 20`, () => {
    expect(featured(20)).toBe(21);
  });
  
  it(`returns 35 given 21`, () => {
    expect(featured(21)).toBe(35);
  });
  
  it(`returns 1029 given 997`, () => {
    expect(featured(997)).toBe(1029);
  });
  
  it(`returns 1023547 given 999999`, () => {
    expect(featured(999999)).toBe(1023547);
  });
  
  it(`returns 1023456987 given 999999987`, () => {
    expect(featured(999999987)).toBe(1023456987);
  });
  
  it(`returns 9876543201 given 9876543186`, () => {
    expect(featured(9876543186)).toBe(9876543201);
  });
  
  it(`returns 9876543201 given 9876543200`, () => {
    expect(featured(9876543200)).toBe(9876543201);
  });
  
  it(`returns error message given 9876543201`, () => {
    expect(featured(9876543201)).toBe("There is no possible number that fulfills those requirements.");
  });
});
