const { textExcerpt, displaySentiment, result } = require('./sentiment');

const positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love([sd])?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
const negativeRegex = /\bdie([sd])?\b|\bheartached?\b|death|despise([sd])?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

const wordsFor = (text, positive = true) => {
  const regex = positive ? positiveRegex : negativeRegex;
  return [...text.matchAll(regex)].map((m) => m.at(0).toLowerCase());
};

function sentiment(text) {
  const positives = wordsFor(text);
  const negatives = wordsFor(text, false);
  displaySentiment(positives);
  displaySentiment(negatives, false);
  console.log(`The sentiment of the text is ${result(positives.length, negatives.length)}.`);
}

sentiment(textExcerpt);

// console output

// There are 9 positive type words in the text.
//   Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution
//
// There are 10 negative type words in the text.
//   Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death
//
// The sentiment of the text is Negative.
