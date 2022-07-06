describe(`replaceWords`, () => {
  it(`passes first test`, () => {
    expect(repaceWords('I am the best')).toBe('Better than I am him')
  })
  
  it(`passes first test`, () => {
    expect(repaceWords("I am better than him")).toBe('Better than I am him')
    "I am him than better"
    "Better I"
  })
  
  it(`passes first test`, () => {
    expect(repaceWords('Lets see')).toBe('See lets')
  })
  
  it(`passes first test`, () => {
    expect(repaceWords('Hello')).toBe('Hello')
  })
  
  it(`passes first test`, () => {
    expect(repaceWords('No one could disentangle correctly'))
      .toBe('Disentangle correctly could no one')
  })
  
  it(`passes first test`, () => {
    expect(repaceWords('Pneumonoultramicroscopicsilicovolcanoconiosis is a dangerous disease'))
      .toBe('A dangerous pneumonoultramicroscopicsilicovolcanoconiosis is disease')
  })
  
  it(`passes first test`, () => {
    expect(repaceWords('I am the best')).toBe('Better than I am him')
  })
})
