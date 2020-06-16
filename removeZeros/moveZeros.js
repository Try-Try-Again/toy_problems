/*
 * Specification:
 * Output:
 * array of numbers
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n^2)
 * Spacial Complexity:
 * O(1)
 * Constraints:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * Justification:
 * toy
 * Explanation:
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 * Visualization:
 * [0,1,0,3,12] => [1,3,12,0,0]
 * Approximation:
 * for each element in and array:
 *   if element is a zero:
 *     splice out value and put it at the end of the array
 * return the modified array
 */

const moveZeros = (nums) => {
  let end = nums.length;
  for (let i = 0; i < end; i += 1) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
      i -= 1;
      end -= 1;
    }
  }
  return nums;
}

module.exports = moveZeros;
