/*
 * Specification
 *
 * Output: number
 * Input: array of numbers (1 or 0 only, no more that 10,000 elements)
 * Complexity: time O(n) space O(1)
 * Constraints: none
 * Edge Cases: all elements are zeros, only 1 element (for both 1 and 0)
 *
 * Justification
 * get the length of the longest streak of consecutive 1's within an array of 1's and 0's
 *
 * Explanation
 * maxConsecutiveOnes will recieve an array of ones or zeros (no longer that 10,000 elements)
 * it will return from that array the length of the longest streak of consecutive 1's in the from of a number
 *
 * Visualization
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *              ^  ^ returns 2
 *
 * [1, 1, 1, 0, 1, 1, 0, 1]
 *  ^  ^  ^ returns 3
 *
 * [1, 1, 1, 0, 1, 1, 1, 1]
 *              ^  ^  ^  ^ returns 4
 * [0]
 * returns 0
 *
 * [1]
 * returns 1
 *
 * Approximation
 * function maxConsecutiveOnes (array):
 *   recordStreak = 0
 *   currentStreak = 0
 *     for element in input:
 *       if element == 0:
 *         currentStreak = 0
 *       else:
 *         currentStreak ++
 *         if currentStreak > recordStreak:
 *           recordStreak = currentStreak
 *   return recordStreak
 *
 *
 * Verification
 * input [0, 1, 0, 0, 1, 1, 0, 1]
 *
 * maxStreak: 0
 * currentStreak: 0
 *
 * step 1
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *  ^
 *  |
 *
 *  currentStreak: 0
 *
 * step 2
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *     ^
 *     |
 *
 *  currentStreak: 1
 *  maxStreak: 1
 *
 * step 3
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *        ^
 *        |
 *
 *  currentStreak: 0
 *  maxStreak: 1
 *
 * step 4
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *           ^
 *           |
 *
 *  currentStreak: 0
 *  maxStreak: 1
 *
 * step 5
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *              ^
 *              |
 *
 *  currentStreak: 1
 *  maxStreak: 1
 *
 * step 6
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *                 ^
 *                 |
 *
 *  currentStreak: 2
 *  maxStreak: 2
 *
 * step 7
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *                    ^
 *                    |
 *
 *  currentStreak: 0
 *  maxStreak: 2
 *
 * step 8
 * [0, 1, 0, 0, 1, 1, 0, 1]
 *                       ^
 *                       |
 *
 *  currentStreak: 1
 *  maxStreak: 2
 *
 *  final result: 2 (maxStreak)
 */

const findMaxConsecutiveOnes = (nums) => {
  let c = 0, m = 0;
  nums.forEach(n => {
    c = n === 1 ? c + 1 : 0;
    m = m > c ? m : c;
  });
  return m;
};

// const findMaxConsecutiveOnes = (nums) => nums
//   .reduce((result, current) =>
//     current === 0
//       ? [Math.max(result[0], result[1]), 0]
//       : [Math.max(result[0], result[1] + 1), result[1] + 1],
//   [0, 0])[0];


module.exports = findMaxConsecutiveOnes;
