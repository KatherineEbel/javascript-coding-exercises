/*
* Integer to Roman
* */

const ROMAN_NUMERALS = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

function intToRoman(num) {
  const values = Object.keys(ROMAN_NUMERALS).sort((a, b) => b - a);
  let roman = '';
  while (num > 0) {
    const number = values.find((v) => v <= num);
    roman += ROMAN_NUMERALS[number];
    num -= number;
  }
  return roman;
}

let num = 3;
console.log(intToRoman(num) === 'III'); // III

num = 58;
console.log(intToRoman(num)); // 'LVIII'

num = 1994;
console.log(intToRoman(num)); // MCMXCIV

num = 3999;
console.log(intToRoman(num)); // MMMCMXCIX
