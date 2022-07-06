const revrot = require('./solution');

describe(`revrot`, () => {
  it(`passes first test case`, () => {
    expect(revrot('1234',0)).toBe('')
  })
  
  it(`passes second test case`, () => {
    expect(revrot('',0)).toBe('')
  })
  
  it(`passes third test case`, () => {
    expect(revrot('1234', 5)).toBe('')
  })
  
  it(`passes fourth test case`, () => {
    s = "733049910872815764"
    expect(revrot(s, 5)).toBe("330479108928157")
  })
  
  it(`passes example 1`, () => {
   expect(revrot("123456987654", 6)).toBe("234561876549")
  })
  
  it(`passes example 2`, () => {
    expect(revrot("563000655734469485", 4)).toBe("0365065073456944")
  })
  
  it(`passes example 3`, () => {
    expect(revrot('', 8)).toBe('')
  })
  
  it(`passes example 4`, () => {
    expect(revrot('123456779', 0)).toBe('')
  })
  
  it(`passes example 5`, () => {
    expect(revrot("66443875", 8)).toBe("64438756")
  })
  
  it(`passes example 6`, () => {
    expect(revrot("66443875", 4)).toBe("44668753")
  })
})
