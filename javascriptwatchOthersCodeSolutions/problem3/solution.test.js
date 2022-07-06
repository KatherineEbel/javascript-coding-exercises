/*
* Blocks have two letters per block
* Words limited to words that do not use both letters from  any given block
* You can only use each block once
*
* Write a function that takes a word string as an argument, and returns true
* if the word can be spelled using the set of blocks, false if otherwise.
*
* You can consider the letters to be case-insensitive when you apply the rules
*
*   B:O   X:K   D:Q   C:P   N:A
*   G:T   R:E   F:S   J:W   H:U
*   V:I   L:Y   Z:M
*
* input: string
* output: true if word can be spelled / false otherwise
*
* use an array to store blocks
* - each array element will be a string with block letters
* iterate over input string (transform to uppercase and split)
* - use array all
* search array for block that includes current character
* if block still in array, splice it else return false
*  */

const isBlockWord = require('./solution');

describe('isBlockWord', () => {
  it('returns true for BATCH', () => {
    expect(isBlockWord('BATCH')).toBe(true);
  });

  it('returns true for BATCH', () => {
    expect(isBlockWord('BUTCH')).toBe(false);
  });

  it('returns true for jest', () => {
    expect(isBlockWord('jest')).toBe(true);
  });

  it('returns true for big', () => {
    expect(isBlockWord('big')).toBe(true);
  });

  it('returns false for RED', () => {
    expect(isBlockWord('RED')).toBe(false);
  });
});
