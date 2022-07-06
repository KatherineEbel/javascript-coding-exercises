/*
* input: sentence
* returns: string
*
* Rules:
* every occurrence of a "number word" converted to a digit
* non-number words left as is
* Data structure:
*
* use array to store number words
* split string into words
* iterate over words (map) replacing word with index of word in  number word array
* if WORDS indexOf current word != -1
* */

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const REGEXP = new RegExp(`\\b(${WORDS.join('|')})\\b`, 'g');

function wordToDigit(string) {
  return string.replace(REGEXP, (match) => WORDS.indexOf(match));
}

module.exports = wordToDigit;
