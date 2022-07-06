/*
* Triangle
*
* Right: One angle is a right angle 90 degrees
* Acute: All three angles are less than 90 degrees
* Obtuse: One angle is greater than 90 degrees
*
* Requirements:
* To be valid sum of angles must be exactly 180 degrees to be valid
* Every angle must be greater than 0 to be valid
*
* Input: 3 arguments representing angles
* Returns: right acute obtuse invalid
*
* All triangles are integer values, and in degrees
*
* Data Structures
* Put sides into an array to iterate
* - sum them filter them
*
* check validity first (sub-process isValid)
* if any angle < 0 return false
* sum all angles if not equal 180 return false
*
* if one angle > 90 return obtuse
* if all sides less than 90 return acute
* if one angle === 90 return right
* else return invalid
* */

const RIGHT_ANGLE = 90;
const STRAIGHT_ANGLE = 180;

function isValid(sides) {
  return sides.every((side) => side > 0)
    && (sides.reduce((sum, side) => sum + side) === STRAIGHT_ANGLE);
}

// * if one angle > 90 return obtuse
//   * if all sides less than 90 return acute
//   * if one angle === 90 return right
//   * else return invalid
function triangle(...angles) {
  if (!isValid(angles)) return 'invalid';
  if (angles.every((side) => side < RIGHT_ANGLE)) return 'acute';
  if (angles.find((angle) => angle > RIGHT_ANGLE)) return 'obtuse';
  if (angles.find((angle) => angle === 90)) return 'right';
  return 'invalid';
}

module.exports = triangle;
