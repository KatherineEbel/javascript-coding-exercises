const swapper = (str) => (/[a-z]/.test(str) ? str.toUpperCase() : str.toLowerCase());

function swapCase(string) {
  return string
    .replace(/[a-z]/gi, swapper);
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
