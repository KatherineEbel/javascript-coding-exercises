const MAX_DIGIT = 9;

const sanitizeNumber = (numberString) => numberString.replace(/\D/g, '').split('');

function isValidIdentificationNumber(numberString = '') {
  const digits = sanitizeNumber(numberString);
  if (!digits.length) return false;
  const idxModifier = digits.length % 2 === 0 ? 1 : 0;
  const sum = digits.reduceRight((total, digit, idx) => {
    if (idx % 2 === idxModifier) {
      return total + +digit;
    }
    const doubled = +digit * 2;
    return total + (doubled > MAX_DIGIT ? doubled - MAX_DIGIT : doubled);
  }, 0);
  return sum % 10 === 0;
}

function computeCheckDigit(numberString, digit = 1) {
  if (isValidIdentificationNumber(numberString)) {
    return numberString;
  }
  if (digit === 1) {
    return computeCheckDigit(`${numberString}${digit}`, digit + 1);
  }
  return computeCheckDigit(numberString.slice(0, -1) + digit, digit + 1);
}

module.exports = {
  isValidIdentificationNumber,
  computeCheckDigit,
};
