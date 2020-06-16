/*
 * Specification
 * Output: number
 * Input: array of numbers
 * Complexity: time O(n) space O(1)
 * Constraints: 1 <= nums.length <= 500, 1 <= nums[i] <= 10^5
 * Edge Cases: all even, all odd
 *
 * Justification:
 * Find how many numbers within an array of numbers have an even character length
 *
 * Explaination:
 * Function will recieve an array of numbers (array no longer that 500 elements, numbers no larger than 10^5)
 * and return a single number of how many numbers have even character counts
 *
 * Visualization:
 * input: [12,345,2,6,7896]
 *         ^          ^ output: 2
 * input: [1,345,2,6,7896]
 *                   ^ output: 1
 * input: [1,345,2,6,789]
 * output: 0
 *
 * Approximation:
 *
 * function findNumbers(nums):
 *   count = 0
 *   for num in nums:
 *     if length(toString(num)) % 2 == 0:
 *       count ++
 *   return count
 *
 * Verification
 *
 * [12,345,2,6,7896]
 * count: 0
 *
 * [12,345,2,6,7896]
 *  ^
 * count: 1
 *
 * [12,345,2,6,7896]
 *     ^
 * count: 1
 *
 * [12,345,2,6,7896]
 *         ^
 * count: 1
 *
 * [12,345,2,6,7896]
 *           ^
 * count: 1
 *
 * [12,345,2,6,7896]
 *             ^
 * count: 2
 *
 * 2
 *
 * implementation...
 */

module.exports = (nums) => nums.filter(num => num.toString().length % 2 === 0).length;
  //.reduce((result, num) => num.toString().length % 2 === 0 ? result += 1 : result, 0);
// module.exports = (nums) => nums
//   .reduce((result, num) => num.toString().length % 2 === 0 ? result += 1 : result, 0);
  //let result = 0;
  //for (let i = 0; i < nums.length; i += 1) {
  //  if (nums[i].toString().length % 2 === 0) {
  //    result += 1;
  //  }
  //}
  //return result;
