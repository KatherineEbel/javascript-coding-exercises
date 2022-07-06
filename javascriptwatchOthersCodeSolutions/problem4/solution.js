const isRange = (input) => /([-:]|\.{2})/g.test(input);

const nextNum = (lastNum, sigDigits) => {
  if (lastNum < 10) {
    return +`1${sigDigits}`;
  }
  let numString = `${String(lastNum).at(0)}${sigDigits}`;
  if (+numString < lastNum) {
    if (numString.length < String(lastNum).length) {
      numString = `${String(lastNum).at(0)}${numString}`;
    } else {
      numString = `${+numString.at(0) + 1}${numString.slice(1)}`;
    }
  }
  return +numString;
};

const minMax = (rangeString, lastInRange) => {
  // rangeMarkers given 1:5:2 => [1, 5, 12]
  const rangeMarkers = rangeString.split(/[-:]|\.{2}/g).reduce((ranges, rangePart, i) => {
    if (i === 0 && +rangePart < lastInRange) {
      return ranges.concat(nextNum(lastInRange, rangePart));
    }
    const lastNum = ranges[i - 1];
    if (lastNum !== undefined && +rangePart < +lastNum) {
      return ranges.concat(nextNum(+lastNum, rangePart));
    }
    return ranges.concat(+rangePart);
  }, []);
  return [rangeMarkers.at(0), rangeMarkers.at(-1)];
};

const addNumber = (numString, range) => {
  if (range.length) {
    const lastNum = range.at(-1);
    if (+numString < lastNum) {
      return range.concat(nextNum(lastNum, numString));
    }
  }
  return range.concat(+numString);
};

const createRange = (start, stop, step = 1) => Array.from({
  length: (stop - start) / step + 1,
}, (_, i) => start + (i * step));

const addSubRange = (minAndMax, range) => {
  const [min, max] = minAndMax;
  return range.concat(createRange(min, max));
};

function expandRange(shorthand) {
  const list = shorthand.split(', ');
  return list.reduce((range, nextVal) => {
    if (!isRange(nextVal)) {
      return addNumber(nextVal, range);
    }
    return addSubRange(minMax(nextVal, range.at(-1)), range);
  }, []);
}

module.exports = {
  createRange,
  expandRange,
  minMax,
  nextNum,
};
