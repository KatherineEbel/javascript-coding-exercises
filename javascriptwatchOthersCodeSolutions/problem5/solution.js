/*
* Rails
* characters written downwards diagonally on rails,
* then move up when bottom rail reached
* n = numRails
* rails - nested array with n strings
* when n === 3
*   - 0th index top rail
*   - 1st index middle rail
*   - nth index bottom rail
* cycle from 0 to n and from n to 0
* add char to array at current index
* keep track of current rail
* keep track going up or down
* is bottom = rail === 0
* is top = rail === n
* */

const PLACEHOLDER = '?';
const SEPARATOR = '.';
const MIN_RAILS = 2;

const isInputValid = (text, numRails) => text !== '' && numRails >= MIN_RAILS;

/*
* input: number of rails
*   - loop over 0 to numRails
*   - if going up increment
*   - if going down decrement
* returns: iterator to cycle over rail indexes
* */
function makeRailIterator(numRails = MIN_RAILS) {
  let rail = -1;
  let goingUp = true;

  return {
    next() {
      rail = goingUp ? rail + 1 : rail - 1;
      if (rail === numRails - 1) {
        goingUp = false;
      } else if (rail === 0) {
        goingUp = true;
      }
      return { value: rail, done: false };
    },
  };
}

// input: number of rails
// returns: array numRails length filled with empty "rails"
const makeRails = (numRails = MIN_RAILS) => new Array(numRails).fill('');

/*
* input: text to encrypt, and number of rails
* returns encrypted message (string) - returns input text if not min rails
* iterate over each character in string
* add current character to rail at current rail index
* */
function railCipher(text, numRails = MIN_RAILS) {
  if (!isInputValid(text, numRails)) return text;
  const rails = makeRails(numRails);
  const railIterator = makeRailIterator(numRails);
  text.replace(/\s/g, '').split('').forEach((char) => {
    const currRail = railIterator.next().value;
    rails[currRail] += char;
  });
  return rails.join('');
}

/*
* DECIPHER LOGIC
* create rails (fill with placeholders)
*   - if current rail add '?'
*   - if not current rail add '.' to other rails (how to find other rails?)
*     - function to add . to other rails
*       - given num rails and current rail
*       - transform rails (iterate over rails, if rail === curr rail continue else add .)
* split ciphered text into array of characters
* transform rails (map)
*   - substitute '?' placeholders with cipher characters
*   - if not '?' return character (should be '.')
*
* */

/*
* returns new array of transformed rails with separators
* if rail index is the same as currRail, don't modify
* else we want to add a separator '.'
* */
const addSeparators = (currRail, rails) => rails
  .map((rail, idx) => (idx === currRail ? rail : `${rail}${SEPARATOR}`));

/*
* build rail structure. If idx of current Rail should be a letter add a '?'
* else we want to add separators (.) to other rails
* */
const fillRails = (text, numRails) => {
  const railIterator = makeRailIterator(numRails);
  return text.split('').reduce((rails) => {
    const currRail = railIterator.next().value;
    // eslint-disable-next-line no-param-reassign
    rails[currRail] += PLACEHOLDER;
    return addSeparators(currRail, rails);
  }, makeRails(numRails));
};

/*
  input: cipher letter array, and rails
  returns: string with cipher letters substituted for '?'

  given rail '..?...?...?...?..'
  split rail into chars and map
  if char === ? remove and return 1st letter from cipherLetters
  else return char (which should be .)
  mutates cipher Letters
  TODO: extract another function ?? code not entirely transparent
*/
const substituteCipherLetters = (letters, rails) => rails.map((rail) => rail.split('')
  .map((char) => (char === PLACEHOLDER ? letters.shift() : char)).join(''));

/*
* input: encrypted cipher, number of rails
* output: cipher text displayed in rows to be read along zig-zag pattern
* */
function decryptRailCipher(text = '', numRails = MIN_RAILS) {
  if (!isInputValid(text, numRails)) return text;
  const rails = fillRails(text, numRails);
  const cipherLetters = text.split('');
  return substituteCipherLetters(cipherLetters, rails)
    .join('\n');
}

// test encrypt with 3 rails
let test = railCipher('WE ARE DISCOVERED FLEE AT ONCE', 3);
let expected = 'WECRLTEERDSOEEFEAOCAIVDEN';
console.log(test === expected);

// test encrypt with 2 rails

test = railCipher('WE ARE DISCOVERED FLEE AT ONCE');
expected = 'WAEICVRDLETNEERDSOEEFEAOC';
console.log(test === expected);

// test encrypt empty string
test = railCipher('');
expected = '';
console.log(test === expected);

// test decrypt with  3 rails
test = decryptRailCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3);
expected = 'W...E...C...R...L...T...E\n'
  + '.E.R.D.S.O.E.E.F.E.A.O.C.\n'
  + '..A...I...V...D...E...N..';
console.log(test === expected);

// test decrypt with 2 rails
test = decryptRailCipher('WAEICVRDLETNEERDSOEEFEAOC');
expected = 'W.A.E.I.C.V.R.D.L.E.T.N.E\n'
  + '.E.R.D.S.O.E.E.F.E.A.O.C.';
console.log(test === expected);

// test decrtypt empty string
test = decryptRailCipher('');
expected = '';
console.log(test === expected);

module.exports = {
  railCipher,
  decryptRailCipher,
};
