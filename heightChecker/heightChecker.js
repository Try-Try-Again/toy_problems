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
 * 1 <= heights.length <= 100
 * 1 <= heights[i] <= 100
 * Edge Cases:
 * none?
 *
 * Justification:
 * find how many people need to move (toy)
 *
 * Explanation:
 * Return the minimum number of students that must move in order for all
 * students to be standing in non-decreasing order of height.
 *
 * Visualization:
 * [1,1,4,2,1,3] => 3
 *
 * [5,1,2,3,4] => 5
 *
 * [1,2,3,4,5] => 0
 *
 * Approximation:
 * make a sorter array based on input
 * compare the original array to the new array
 * count the positions that have different numbers between the two arrays
 */

const heightChecker = (nums) => {
  let counter = 0;
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] != sorted[i]) {
      counter += 1;
    }
  }
  return counter;
};

module.exports = heightChecker;
