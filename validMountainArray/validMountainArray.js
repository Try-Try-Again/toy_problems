/*
 * Specification:
 * Output:
 * boolean
 * Input:
 * Array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(n)
 * Constraints:
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array A of integers, return true if and only if it is a valid mountain array.
 *
 * Visualization:
 * [2,1] => false
 * [3,5,5] => false
 * [0,3,2,1] => true
 *
 * Approximation:
 * find and save the max value in an array
 * save a value called peaked as false
 * if first element is greater than peak:
 *   return false
 * for each element in array:
 *   if not peaked:
 *     if element is greater than last:
 *       if element equals the max value in array:
 *         assign peaked to true:
 *       continue
 *     else:
 *       return false
 *   else:
 *     if element is less than last:
 *       continue:
 *     else:
 *       return false
 * return true
 */

const validMountainArray = (nums) => {
  if (nums.length < 3) {
    return false;
  }
  const max = Math.max(...nums);
  if (nums[0] >= max || nums[nums.length - 1] >= max) {
    return false;
  }
  let peaked = false;
  for (let i = 1; i < nums.length; i += 1) {
    if (!peaked) {
      if (nums[i] <= nums[i-1]) {
        return false;
      }
      if (nums[i] === max) {
        peaked = true;
      }
    } else {
      if (nums[i] >= nums[i-1]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = validMountainArray;
