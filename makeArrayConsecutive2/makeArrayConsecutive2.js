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
 * 1 ≤ statues.length ≤ 10,
 * 0 ≤ statues[i] ≤ 20.
 * Edge Cases:
 * ?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * given an unorderd array of numbers (non-negative), return the number of values are required to
 * make the sorted version of array increment up by 1 per element
 *
 * Visualization:
 * [6, 2, 3, 8] => 3
 *
 * Approximation:
 * sort the array
 * set up result value of 0
 * for each element in the array (starting with the second one):
 *   add the difference (minus 1) of the current element and the previous element to result
 * return result
 *
 * Verification:
 * ex: 1
 * [6, 2, 3, 8]
 * result: 0
 * [2, 3, 6, 8]
 *     ^ 3 - 2 - 1 = 0
 * result: 0
 *
 * [2, 3, 6, 8]
 *        ^ 6 - 3 - 1 = 2
 * result: 2
 *
 * [2, 3, 6, 8]
 *           ^ 8 - 6 - 1 = 1
 j result: 3 done
 *
 * ex: 2
 * [5, 7, 3, 8, 11]
 * result: 0
 * [3, 5, 7, 8, 11]
 *     ^ 1
 * result: 1
 *
 * [3, 5, 7, 8, 11]
 *        ^ 1
 * result: 2
 *
 * [3, 5, 7, 8, 11]
 *           ^ 0
 * result: 2
 *
 * [3, 5, 7, 8, 11]
 *              ^ 2
 * result: 4 done
 */

const makeArrayConsecutive2 = (statues) =>
  Math.max(...statues) - Math.min(...statues) + 1 - statues.length

// const makeArrayConsecutive2 = (statues) => {
//   let result = 0;
//   statues.sort((a, b) => a - b);
//   for (let i = 1; i < statues.length; i += 1) {
//     result += statues[i] - statues[i - 1] - 1;
//   }
//   return result;
// }

module.exports = makeArrayConsecutive2;
