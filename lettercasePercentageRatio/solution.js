/*
* Input: string
* Returns: object with three properties
*   - lowercase
*   - uppercase
*   - neither
* Rules:
*   all percentages of characters in string
*   string will always have at least one character
*   values are decimal formatted strings
*
* Data Structures:
*   Array to iterate over characters
*   Object to store result
*
*   calculate percentage
*   - (count of characters / length of string) * 100
*   - convert to float string (toFixed)
*   'abCdef 123'
*     string length 10
*     5 lowercase 1 upper 4 neither
*   split character into array (reduce to object)
*   iterate over characters
*   use regex to match if string is uppercase [A-Z], lowercase [a-z]
*   increment appropriate key in result object
*
*   after iteration loop through object keys and calculate a percentage for each one
*   return result object
* */

const isUpperCase = (string) => /[A-Z]/.test(string);
const isLowerCase = (string) => /[a-z]/.test(string);

const calculatePercentage = (count, stringLength) => ((count / stringLength) * 100).toFixed(2);

const tally = (counts, char) => {
  if (isUpperCase(char)) {
    counts.uppercase += 1;
  } else if (isLowerCase(char)) {
    counts.lowercase += 1;
  } else {
    counts.neither += 1;
  }
  return counts;
};

function letterPercentages(string) {
  const totals = string.split('').reduce(tally, { lowercase: 0, uppercase: 0, neither: 0 });
  Object
    .keys(totals)
    .forEach((k) => totals[k] = calculatePercentage(totals[k], string.length));
  return totals;
}

module.exports = letterPercentages;
