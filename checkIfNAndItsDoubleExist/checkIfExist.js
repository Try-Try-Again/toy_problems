/*
 * Specification:
 * Output:
 * boolean
 * Input:
 * Array of numbers
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Constraints:
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
 *
 * Visualization:
 * [10,2,5,3] => true
 * [7,1,14,11] => true
 * [3,1,7,11] => false
 *
 * approximation:
 * store a record of all values already recorded
 * for each element in the input:
 *   if a value equaling half or double of current element is in record:
 *     return true
 *   add value to record
 *
 * verification:
 * record: {}
 * [10,2,5,3]
 *   ^ 5 and 20 not in record
 * record: {10}
 * [10,2,5,3]
 *     ^ 1 and 4 not in record
 * record: {10, 2}
 * [10,2,5,3]
 *       ^ yup 10 is in it! return true!
 */

const checkIfExist = (nums) => {
  const previousNums = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (previousNums[nums[i] / 2] || previousNums[nums[i] * 2]) {
      return true;
    }
    previousNums[nums[i]] = true;
  }
  return false;
};

module.exports = checkIfExist;
