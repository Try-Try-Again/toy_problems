	/**
	@param S: string
	@return: integer
  Specs:
  Output number
  Input string of digits
  Time Complexity:
  O(n^2)
  Spacial Complexity:
  O(n^2)

  1262 => 1 2 6 2 or 12 6 2 or 1 26 2
  first branch  1 262
                 2 6 2
                 26 2
  second branch 12
                  6 6

  Approx:

  start by spliting string on first char

  if S.length == 1;
  return 1;
  i
  single = 1 + decodeVariations(S[1:])
  double = 0
  if toNumber(s[:1]) <= 26:
    double = 1 + decodeVariations(S[2:])

   return single + double

   */

	// your code goes here

const decodeVariations = (numString) =>
  parseInt(numString.slice(-2, -1)) > 2 && parseInt(numString.slice(-1)) === 0
    ? 0
    : numString.length <= 1
      ? 1
      : parseInt(numString.slice(0, 2)) <= 26
          ? decodeVariations(numString.slice(1)) + decodeVariations(numString.slice(2))
          : decodeVariations(numString.slice(1));


module.exports = decodeVariations;
