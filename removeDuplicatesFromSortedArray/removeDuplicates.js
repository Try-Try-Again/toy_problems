/*
 * Specification:
 * Output:
 * number (modified array length)
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n^2)
 * Spacial Complexity:
 * O(1)
 * Constraints:
 * modify array in place without creating new array
 *
 * Justification:
 * toy problem
 *
 * Explanation:
 * Given a sorted array nums, remove the duplicates in-place
 * such that each element appear only once and return the new length.
 *
 * Visualization:
 * [1,1,2]
 *    |
 *    V
 * [1,2]
 *
 * return 2 (length of modified input)
 *
 */

const removeDuplicates = (nums) => {
  let i = 0;
  while (true) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j -= 1;
      }
    }
    if (i === nums.length) {
      break;
    }
    i += 1;
  }
  return nums.length;
}
//const removeDuplicates = (nums) => {
//  const existingNums = {};
//  for (let i = 0; i < nums.length; i += 1) {
//    if (existingNums[nums[i]] !== undefined) {
//      nums.splice(i, 1);
//      i -= 1;
//    } else {
//      existingNums[nums[i]] = true;
//    }
//  }
//  return nums.length;
//};

module.exports = removeDuplicates;
