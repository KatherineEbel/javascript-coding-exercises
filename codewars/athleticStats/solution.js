function seconds(hrs, mins, sec) {
  const hrsSecs = hrs < 0 ? 0 : Math.floor(hrs * 3600);
  const minSec = mins * 60;
  return Math.floor(hrsSecs + minSec + +sec);
}

function padNumber(n) {
  return String(n).padStart(2, '0');
}

function format(sec) {
  sec = parseInt(sec, 10);
  const hours = Math.floor(sec / 3600);
  const mins = Math.floor((sec - (hours * 3600)) / 60);
  const secs = sec - (hours * 3600) - (mins * 60);
  return `${padNumber(hours)}|${padNumber(mins)}|${padNumber(secs)}`;
}

function stat(statString) {
  if (statString.length === 0) return statString;
  const stats = statString.split(/,\s?/).map((s) => s.split('|')).sort((a, b) => a.join('') - b.join(''));
  const range = format(seconds(...stats[stats.length - 1]) - seconds(...stats[0]));
  const average = format(stats.reduce((acc, s) => acc + seconds(...s), 0) / stats.length);
  let middle = stats.length % 2 ? stats.length : stats.length - 1;
  middle = Math.floor(middle / 2);
  let median = stats.slice(middle, stats.length % 2 ? middle + 1 : middle + 2)
    .reduce((acc, s) => acc + seconds(...s), 0);
  median = format(median /= stats.length % 2 ? 1 : 2);
  return `Range: ${range} Average: ${average} Median: ${median}`;
}

console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17') === 'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57');
console.log(stat('0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0') === 'Range: 00|07|34 Average: 00|17|47 Median: 00|16|48');
console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17') === 'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34');
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00'));
console.log(stat('1|22|34, 11|25|11, 9|16|30') /*= == 'Range: 10|02|37 Average: 07|21|25 Median: 09|16|30' */);
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41') === 'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00');
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41') === 'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00');
