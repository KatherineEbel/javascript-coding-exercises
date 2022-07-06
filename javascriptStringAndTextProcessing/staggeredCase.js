function staggeredCase(string) {
  const caseFor = (match, offset) => (offset % 2 === 0 ? match.toUpperCase() : match.toLowerCase());
  return string
    .replace(/[^0-9]/g, caseFor);
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
