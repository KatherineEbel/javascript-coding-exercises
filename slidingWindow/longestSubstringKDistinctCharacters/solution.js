function longestSubstring(k, str) {
  let longest = -Infinity;
  let windowStart = 0;
  const charFrequency = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

let str = 'araaci';
let k = 2;
console.log(longestSubstring(k, str));

str = 'araaci';
k = 1;
console.log(longestSubstring(k, str));
