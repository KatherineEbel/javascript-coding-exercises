/*
* Write a Function named totalArea that takes an Array of rectangles as an argument.
* The Function should return the total area covered by all the rectangles.
*
*  */

const areaReducer = (product, measurement) => product * measurement;
const calculateArea = (rectangle) => rectangle.reduce(areaReducer);
const sumReducer = (sum, rectangle) => sum + calculateArea(rectangle);
const isSquare = (rectangle) => rectangle.every((measurement) => measurement === rectangle.at(0));

function totalArea(rectangles) {
  return rectangles.reduce(sumReducer, 0);
}

function totalSquareArea(rectangles) {
  return totalArea(rectangles.filter(isSquare));
}

const input = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const areaRectangles = totalArea(input); // 141
console.log(areaRectangles);

const areaSquares = totalSquareArea(input);
console.log(areaSquares);
