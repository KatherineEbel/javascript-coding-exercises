/*
* Write a Function named octalToDecimal that performs octal to decimal conversion.
* When invoked on a String that contains the representation of an octal number,
* the Function returns a decimal version of that value as a Number.
* Implement the conversion yourself: do not use something else to perform the conversion
* for you.
*
* convert number to string and split into array
* map to octal
* reduce to get sum
* */

const BASE = 8;
const octal = (char, i, chars) => +char * (BASE ** (chars.length - i - 1));

const sumReducer = (sum, value) => sum + value;

function octalToDecimal(numberString) {
  const characters = numberString.split('');
  return characters.map(octal).reduce(sumReducer);
}

console.log(octalToDecimal('1')); // 1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); // 9
