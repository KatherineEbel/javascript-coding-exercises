const bubbleSort = require('./solution');

describe(`bubbleSort`, () => {
  it(`passes example 1`, () => {
    const array = [5, 3];
    bubbleSort(array);
    expect(array).toEqual(expect.arrayContaining([3, 5]));
  })
  
  it(`passes example 2`, () => {
    const array2 = [6, 2, 7, 1, 4];
    bubbleSort(array2);
    expect(array2).toEqual(expect.arrayContaining([1, 2, 4, 6, 7]));
  })
  
  it(`passes example 3`, () => {
    const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
    bubbleSort(array3);
    expect(array3).toEqual(expect.arrayContaining(["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]))
  })
  
  it(`passes example 3`, () => {
    expect(bubbleSort([5, 3, 9, 7, 8, 2, 6]))
      .toEqual(expect.arrayContaining([2, 3, 5, 6, 7, 8, 9]))
  })
  
  it(`passes example 4`, () => {
    expect(bubbleSort([5, 3, 4, 1, 9, 7, 8, 2, 6]))
      .toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]))
  })
})

