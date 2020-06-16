/*
 * Specification:
 * Output:
 * number
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(1)
 * Constraints:
 * none?
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given a non-empty array of integers, return the third maximum number in
 * this array. If it does not exist, return the maximum number.
 *
 * Visualization:
 * [3, 2, 1] => 1
 * [1, 2] => 2
 * [2, 2, 3, 1] => 1
 *
 * Approximation:
 * create an array of three 0s (result)
 * for each element in input:
 *   if element is greater than any of the values in result:
 *     put the element in result array ahead of the highest value it is greater than
 *     unshift
 *   return the first element in result
 *
 * Verification:
 * [2, 2, 3, 1]
 * [0, 0, 0]
 *
 * [2, 2, 3, 1]
 *  ^
 * [0, 0, 2]
 *
 * [2, 2, 3, 1]
 *     ^ 2 is already there so do nothing
 * [0, 0, 2]
 *
 * [2, 2, 3, 1]
 *        ^
 * [0, 2, 3]
 */

const thirdMax = (nums) =>
  [...new Set(nums)].length < 3
    ? Math.max(...nums)
    : [...new Set(nums)].sort((a, b) => b - a)[2];

module.exports = thirdMax;
