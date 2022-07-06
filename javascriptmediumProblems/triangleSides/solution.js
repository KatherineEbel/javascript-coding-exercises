/*
* Triangle
*
* Rules:
* Equilateral - All three sides equal
* Isosceles - Two sides equal third side different
* Scalene - All three sides different
*
* Sum of lengths of two shortest sides
* must be greater than length of longer side
*
* every side must have length greater than 0
*
* Triangle is invalid otherwise
*
* Input: 3 numbers representing side lengths
* Returns: equilateral isosceles scalene invalid
*
* Data Structures:
* array to sort elements to check lengths
* use set to count unique elements
* Check valid first
* if any sides ! > 0 return invalid
* Sort elements if first 2 sum not greater than last return invalid
* Create a Set out of input
* If size of set is 1, then equilateral
* If sizes is 2 then isosceles
* else scalene
* */

const isValid = (sides) => {
  if (sides.some((s) => s <= 0)) return false;
  const [s1, s2, s3] = [...sides].sort((a, b) => a - b);
  return s1 + s2 > s3;
};

function triangle(...sides) {
  if (!isValid(sides)) return 'invalid';
  const unique = new Set(sides);
  switch (unique.size) {
    case 1: return 'equilateral';
    case 2: return 'isosceles';
    case 3: return 'scalene';
    default: return 'invalid';
  }
}

module.exports = triangle;
