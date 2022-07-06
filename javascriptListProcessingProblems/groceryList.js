/*
* Write a function that takes a grocery list in a two-dimensional
* array and returns a one-dimensional array. Each element in the
* grocery list contains a fruit name and a number that represents
* the desired quantity of that fruit. The output array is such that
* each fruit name appears the number of times equal to its desired quantity.
* */

const addFruit = ([fruit, count]) => Array(count).fill(fruit);

const buyFruit = (list) => list.flatMap(addFruit);

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns['apple', 'apple', 'apple', 'orange', 'banana', 'banana'];
