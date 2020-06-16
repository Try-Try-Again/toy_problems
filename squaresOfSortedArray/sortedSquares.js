/*
 * Specification
 * Output sorted array of numbers
 * Input: sorted array of numbers
 * Time Complexity: O(n)
 * Spacial Complexity: O(n)
 * Constraints: none
 * Edge cases: all the same number, single element
 *
 * Justification:
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 *
 * Explanation
 * output is result of squaring each number in input and sorting result array
 *
 * Visualization:
 * [-4,-1,0,3,10]
 *        |
 *        V
 * [16,1,0,9,100]
 *        |
 *        V
 * [0,1,9,16,100]
 *
 * Approximation:
 * map each value in array to the result of squaring the element
 * sort that array
 *
 */

const sortedSquares = (nums) => nums
  .map(num => num * num)
  .sort((a, b) => a - b);

module.exports = sortedSquares;
