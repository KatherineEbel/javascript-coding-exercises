/*
* Input: year (number)
* Output: number
*
* Data Structure:
* count to track number of friday the 13ths
* use Date object
*
* iterate over months
* find number of 'Friday the 13ths' in the given year
* 12 months in year
* check every month for given year if the 13 is day 6
*   -if it is add to count
* return count
*
* */

const THIRTEENTH = 13;
const FRIDAY = 5;

const createRange = (start, stop, step = 1) => Array.from({
  length: (stop - start) / step + 1,
}, (_, i) => start + (i * step));

const is13th = (date) => date.getDay() === FRIDAY;
const get13th = (month, year) => new Date(year, month, THIRTEENTH);

function fridayThe13ths(year) {
  return createRange(0, 11)
    .reduce((count, month) => (is13th(get13th(month, year)) ? count + 1 : count), 0);
}

module.exports = fridayThe13ths;
