const DEFAULT = '0'.repeat(10);

const isValid = (number) => /^1?\d{10}$/g.test(number);

const removeSpecialCharacters = (string) => string.replace(/\D/g, '');

function smsNumber(phoneNumber) {
  const number = removeSpecialCharacters(phoneNumber);
  if (!isValid(number)) return DEFAULT;
  return number.startsWith('1') ? number.slice(1) : number;
}

module.exports = smsNumber;
