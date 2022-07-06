/*
* Write a function that can process the input band Array
* return an Array that contains the fixed information
*
* The bands should all have 'Canada' as the country (map)
* The band name should have all words capitalized (map name)
* Remove all dots from the band names (map name)
* */

const removePeriods = (word) => word.replaceAll(/\./g, '');
const capitalize = (name) => name.split(' ')
  .map((word) => `${word.at(0).toUpperCase() + word.slice(1)}`).join(' ');

const bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(({ name, active }) => ({
    name: capitalize(removePeriods(name)),
    country: 'Canada',
    active,
  }));
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
