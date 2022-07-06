/*
* Implement encoding and decoding for the rail fence cipher
*
* The message is written downwards on successive "rails" of an imaginary fence,
* then moving up when we get to the bottom (like a zig-zag)
* Finally the message is then read off in rows.
*
* Example
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

encoded = WECRLTEERDSOEEFEAOCAIVDEN

first row: 'WECRLTE'
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
second row: 'ERDSOEEFEAOC'
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

last row: 'AIVDEN'
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

0123456790123456789012345
WEAREDISCOVEREDFLEEATONCE
* * */


const {
  railCipher,
  decryptRailCipher,
} = require('./solution');

describe('rail fence cipher', () => {
  describe('encrypt', () => {
    it('encrypts 3 rails', () => {
      const actual = railCipher('WE ARE DISCOVERED FLEE AT ONCE', 3);
      expect(actual).toBe('WECRLTEERDSOEEFEAOCAIVDEN');
    });

    it('encrypts 2 rails', () => {
      const actual = railCipher('WE ARE DISCOVERED FLEE AT ONCE');
      expect(actual).toBe('WAEICVRDLETNEERDSOEEFEAOC');
    });
  });

  describe('decryptRailCipher', () => {
    it('decrypts 3 rails', () => {
      const actual = decryptRailCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3);
      const expected = 'W...E...C...R...L...T...E\n'
        + '.E.R.D.S.O.E.E.F.E.A.O.C.\n'
        + '..A...I...V...D...E...N..';
      expect(actual).toBe(expected);
    });

    it('handles 2 rails', () => {
      const actual = decryptRailCipher('WAEICVRDLETNEERDSOEEFEAOC');
      const expected = 'W.A.E.I.C.V.R.D.L.E.T.N.E\n'
        + '.E.R.D.S.O.E.E.F.E.A.O.C.';
      expect(actual).toBe(expected);
    });
  });
});
