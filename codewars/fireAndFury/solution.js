/*
* Input: String
* Output: String
*
* Known letters E F I R U Y
*
* use 2 regex
    1 to match unknown letters
    1 to match words
* use hash with words and times and tweet as values
* */

const TWEET = {
  FIRE(count) {
    return `You${' and you'.repeat(count)} are fired!`;
  },
  FURY(count) {
    return `I am${' really'.repeat(count)} furious.`;
  },
};

function buildTweet(words) {
  let idx = 0;
  const tweet = [];
  while (idx < words.length) {
    let count = 1;
    while (words[idx + count] === words[idx]) {
      count += 1;
    }
    tweet.push(TWEET[words[idx]](count - 1));
    idx += count;
  }
  return tweet.join(' ');
}

const UNKNOWN_LETTERS = /[^EFIRUY]/g;
const KNOWN_WORDS = /FIRE|(FURY)/g;
// function fireAndFury(tweet) {
//   const hasWrongLetters = tweet.match(UNKNOWN_LETTERS);
//   const words = tweet.match(KNOWN_WORDS);
//   if (hasWrongLetters || !words) return 'Fake tweet.';
//   return buildTweet(words);
// }

function fireAndFury(tweet) {
  const matches = tweet.match(/(FURY|FIRE)/g);

  if (/[^EFIRUY]/.test(tweet) || !matches) return 'Fake tweet.';

  return matches
    .join('')
    .match(/(FURY|FIRE)\1*/g)
    .map((match) => {
      const terms = match.length / 4 - 1;

      return match[1] === 'I'
        ? `You ${'and you '.repeat(terms)}are fired!`
        : `I am ${'really '.repeat(terms)}furious.`;
    })
    .join(' ');
}

console.log(fireAndFury('FURYYYFIREYYFIRE'));
console.log(fireAndFury('FIREYYFURYYFURYYFURRYFIRE'));
console.log(fireAndFury('FYRYFIRUFIRUFURE'));
console.log(fireAndFury('UURYUIREIIREIIREIURYFURYYURYRIREIIRE'));
console.log(fireAndFury('FIRERIREFURYEIREFURYRURYYIREEIRERIREUURYRIREEURYIURYEIREIURYUURYEURYFIREUURY'));
console.log(fireAndFury('EIREIIREIIREFIREUIREUURYUIREIIREIIREFIRERIREFIREYURYYIREYURYYIREFIREIURYIURY'));
