/*
* Given list of numbers in a "shorthand" range, where only
* the significant part of the next number is written because we
* know the numbers are always increasing.
* 1, 3, 7, 2, 4, 1 => [1, 3, 7, 12, 14, 21]
* Possible separators are -  :  ..
* Range limits are inclusive
*
* Input: string representing range
* Output: array of complete list of numbers
*
* If next number in list is less than prev number it needs to be expanded
* (it is represented using significant digits)
* How to find final number from significant digit(s)?
*   - significant digit (need to know number before)
*   - function for sub problem?
*   - 7, 2 becomes 7, 12
*   - "104-02" becomes 104-202
*     - if prev number < 10 add 1 to beginning of next number
*         - else add 1 to first char in prev number and add that to beggining of next number
*
* create result array
* split string on separator ','
* iterate over values (will include ranges and individual numbers)
* if a single numberString
* - check if +number is less than last number in result
*   if so find nextNum and insert that
*   else add +number to result array
* if range split each range (split /([-:]|\.{2})/g
*   map range strings to numbers
*   if current number is less than last number
*     find nextNum
*   after range numbers found iterate
*   from min to max and add numbers to result array
* iterate over range numbers
* */
const { expandRange, minMax, nextNum,
        createRange
      } = require('./solution')

describe('solution', () => {
  describe('nextNum', () => {
    it(`returns 202 given input "102", "02`, () => {
      const actual = nextNum(104, '02')
      expect(actual).toBe(202)
    });
  
    it(`returns 12 given input "7", "2"`, () => {
      const actual = nextNum(7, '2')
      expect(actual).toBe(12)
    })
  
    it(`returns '564' given input '545', '64`, () => {
      const actual = nextNum(545, '64')
      expect(actual).toBe(564)
    })
  })
  
  describe('minMax', () => {
    it(`returns [1, 12] given '1:5:2'`, () => {
      const actual = minMax('1:5:2')
      expect(actual).toEqual(expect.arrayContaining([1, 12]))
    })
  })
  
  it('returns [1,3,7,12,14,21] given "1,3,7,2,4,1"', () => {
    const actual = expandRange('1, 3, 7, 2, 4, 1');
    expect(actual).toEqual(expect.arrayContaining([1, 3, 7, 12, 14, 21]));
  });

  it('returns [1,2,3,11,12] given "1-3, 1-2"', () => {
    const actual = expandRange('1-3, 1-2');
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 11, 12]));
  });

  it('returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12] given "1:5:2"', () => {
    const actual = expandRange('1:5:2');
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  });

  it('handles "104-2"', () => {
    const actual = expandRange('104-2');
    expect(actual).toEqual(expect.arrayContaining([104, 105, 106, 107, 108, 109, 110, 111, 112]));
  });
  
  it(`handles '104-02`, () => {
    const actual = expandRange('104-02')
    const expected = createRange(104, 202)
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`handles '545, 64:11'`, () => {
    const actual = expandRange('545, 64:11')
    const expected = [545, ...createRange(564, 611)]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`handles '1, 2, 3, 7:2, '`, () => {
    const actual = expandRange('1, 2, 3, 7:2, ')
    const expected = [...createRange(1, 3), ...createRange(7, 12)]
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
  
  it(`handles '290..03'`, () => {
  
    const actual = expandRange('290..03')
    const expected = createRange(290, 303)
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
});
