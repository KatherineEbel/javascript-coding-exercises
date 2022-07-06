function isBlockWord(word) {
  const blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM',
  ];
  return word.toUpperCase()
    .split('')
    .every((letter) => {
      const index = blocks.findIndex((block) => block.includes(letter));
      if (index < 0) {
        return false;
      }
      blocks.splice(index, 1);
      return true;
    });
}

module.exports = isBlockWord;
