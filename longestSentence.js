'use strict';

let longText = 'Four score and seven years ago our fathers brought forth'
  + ' on this continent a new nation, conceived in liberty, and'
  + ' dedicated to the proposition that all men are created'
  + ' equal.'
  + ' Now we are engaged in a great civil war, testing whether'
  + ' that nation, or any nation so conceived and so dedicated,'
  + ' can long endure. We are met on a great battlefield of that'
  + ' war. We have come to dedicate a portion of that field, as'
  + ' a final resting place for those who here gave their lives'
  + ' that that nation might live. It is altogether fitting and'
  + ' proper that we should do this.'
  + ' But, in a larger sense, we can not dedicate, we can not'
  + ' consecrate, we can not hallow this ground. The brave'
  + ' men, living and dead, who struggled here, have'
  + ' consecrated it, far above our poor power to add or'
  + ' detract. The world will little note, nor long remember'
  + ' what we say here, but it can never forget what they'
  + ' did here. It is for us the living, rather, to be dedicated'
  + ' here to the unfinished work which they who fought'
  + ' here have thus far so nobly advanced. It is rather for'
  + ' us to be here dedicated to the great task remaining'
  + ' before us -- that from these honored dead we take'
  + ' increased devotion to that cause for which they gave'
  + ' the last full measure of devotion -- that we here highly'
  + ' resolve that these dead shall not have died in vain'
  + ' -- that this nation, under God, shall have a new birth'
  + ' of freedom -- and that government of the people, by'
  + ' the people, for the people, shall not perish from the'
  + ' earth.';

/*
* Determine sentence with the most words
* Sentences may end with . ! ?
* Sentences always begin with a word character
* Any sequence of characters not spaces or sentence ending characters are a word
* Log the longest sentence, and it's word count
* */

const matchSentences = (text) => text.match(/\b[^.?!]*[.?!]/g);

const wordCount = (sentence) => sentence.split(/\s+/).length;

const sentenceCountReducer = (result, currSentence) => {
  const { count } = result;
  const currCount = wordCount(currSentence);
  if (currCount > count) {
    return {
      count: currCount,
      sentence: currSentence,
    };
  }
  return result;
};

const findLongest = (sentences) => sentences
  .reduce(sentenceCountReducer, {
    count: 0,
    sentence: null,
  });

const displayResult = (text, { count, sentence }) => {
  console.log(`${sentence}\n`);
  console.log(`The longest sentence has ${count} words.`);
};

function longestSentence(text) {
  const sentences = matchSentences(text);
  displayResult(text, findLongest(sentences));
}

longestSentence(longText);

const mixedPunctuationAndSpaces = 'I\'m baby   ethical scenester health    goth mustache freegan forage keffiyeh typewriter?'
  + ' Bicycle rights    synth shabby chic, cred chartreuse typewriter occupy blog cardigan fingerstache YOLO scenester!'
  + ' Ennui synth cray vaporware occupy farm-to-table meditation brunch, fixie gentrify listicle.';

longestSentence(mixedPunctuationAndSpaces);

longText = 'Four score and seven years ago our fathers brought forth'
  + ' on this continent a new nation, conceived in liberty, and'
  + ' dedicated to the proposition that all men are created'
  + ' equal.'
  + ' Now we are engaged in a great civil war, testing whether'
  + ' that nation, or any nation so conceived and so dedicated,'
  + ' can long endure. We are met on a great battlefield of that'
  + ' war. We have come to dedicate a portion of that field, as'
  + ' a final resting place for those who here gave their lives'
  + ' that that nation might live. It is altogether fitting and'
  + ' proper that we should do this.'
  + ' But, in a larger sense, we can not dedicate, we can not'
  + ' consecrate, we can not hallow this ground. The brave'
  + ' men, living and dead, who struggled here, have'
  + ' consecrated it, far above our poor power to add or'
  + ' detract. The world will little note, nor long remember'
  + ' what we say here, but it can never forget what they'
  + ' did here. It is for us the living, rather, to be dedicated'
  + ' here to the unfinished work which they who fought'
  + ' here have thus far so nobly advanced.';

longestSentence(longText);
// console output
// It is rather for us to be here dedicated to the great task remaining before us
// -- that from these honored dead we take increased devotion to that cause for
// which they gave the last full measure of devotion -- that we here highly resolve
// that these dead shall not have died in vain -- that this nation, under God, shall
// have a new birth of freedom -- and that government of the people, by the people,
// for the people, shall not perish from the earth.
//
//   The longest sentence has 86 words.

// Assuming the last sentence is removed:

// console output
// Four score and seven years ago our fathers brought forth
// on this continent a new nation, conceived in liberty, and
// dedicated to the proposition that all men are created equal.
//
//   The longest sentence has 30 words.
