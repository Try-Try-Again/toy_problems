/*
 * Specification:
 * Output:
 * array of numbers
 * Input:
 * array of numbers, number
 * Time Complexity:
 * O(n^2)
 * Spacial Complexity
 * O(1)
 * Constraints:
 * at least 2 elements
 * exactly 1 solution
 * Edge Cases
 * ?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 *
 * Visualization:
 * [2, 7, 11, 15], 9 => [0, 1]
 * [11, 7, 15, 2, 1], 8 => [1, 4]
 *
 * Approximation:
 * for each element in input:
 *   for each element in input skipping above element:
 *     if top element and bottom element equal target:
 *       return array containing the indexs of both elements
 *
 * Verification:
 * [2, 7, 11, 15], 9 => [0, 1]
 *  ^ top element
 *
 *  [2, 7, 11, 15]
 *      ^ bottom element
 *   2 + 7 = 9
 *   return [0, 1]
 *
 */

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (j !== i) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

module.exports = twoSum;
