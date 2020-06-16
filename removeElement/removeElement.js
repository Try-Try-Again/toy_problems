/*
 * Specification
 * Output:
 * number (length of modified array
 * Input:
 * array of numbers, single number
 * Time Complexity: O(n^2)
 * Spacial Complexity: O(1)
 * Constraints:
 * Don't make array, use the same one.
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy problem
 *
 * Explanation:
 * input:
 * nums = [3,2,2,3], val = 3,
 *
 * nums becomes [2, 2]
 * return 2 (length of nums)
 *
 * input:
 * nums = [0,1,2,2,3,0,4,2], val = 2,
 *
 * nums becomes [0,1,3,0,4]
 * return 5
 *
 * Visualization:
 * removeElement([3,2,2,3], 3)
 *
 * [3,2,2,3]
 *  ^ delete
 *
 * [2,2,3]
 *  ^ do nothing
 *
 * [2,2,3]
 *    ^ do nothing
 *
 * [2,2,3]
 *      ^ delete
 *
 * [2, 2]
 *     ^ done
 *
 * return length of array (2)
 *
 * Approximation:
 *   splice nums (all of it!) with the thing to be inserted being the a filtered version of the array
 *
 * Verification:
 * [3, 2, 2, 3], 3
 * [(result of filter)]
 * [2, 2]
 * length is 2 :$
 */

const removeElement = (nums, val) => {
  nums.splice(0, nums.length, ...nums.filter(num => num !== val));
  return nums.length;
};


// const removeElement = (nums, val) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return nums.length;
// }

module.exports = removeElement;
