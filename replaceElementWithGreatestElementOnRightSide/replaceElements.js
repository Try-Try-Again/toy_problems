/*
 * Specification:
 * Output:
 * Array of numbers
 * Input:
 * Array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(1)
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array arr, replace every element in that array with the greatest
 * element among the elements to its right, and replace the last element with -1.
 *
 * Visualization:
 * [17,18,5,4,6,1] => [18,6,6,6,1,-1]
 *
 * Approximation:
 * for each element in an array before final element:
 *   if last element in the array:
 *   find the max value among subsequent elements and assing it to current element
 * assign -1 to last element in array
 *
 * Verification:
 * [17,18,5,4,6,1]
 *  ^
 * [18,18,5,4,6,1]
 *     ^
 * [18,6,5,4,6,1]
 *       ^
 * [18,6,6,4,6,1]
 *         ^
 * [18,6,6,6,6,1]
 *           ^
 * [18,6,6,6,1,1]
 *             ^ all done with loop
 * [18,6,6,6,1,-1] replace last with one
 */

const replaceElements = (nums) => {
  for (let i = 0; i < nums.length - 1; i += 1) {
    nums[i] = Math.max(...nums.slice(i + 1));
  }
  nums[nums.length - 1] = -1;
  return nums;
}

module.exports = replaceElements;
