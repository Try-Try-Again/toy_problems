/*
 * Specification
 * Output: null (undefined)
 * Input: array of numbers
 * Time Complexity: O(n)
 * Spacial Complexity: O(1)
 * Constraints:
 * 1 <= arr.length <= 10000
 * 0 <= arr[i] <= 9
 *
 * Justification:
 * need modified array :/
 *
 * Explanation:
 * duplicateZeros modifies input array by inserting a zero after each pre-exiting zero
 * array length remains the same so elements at the end of the array 'fall off'
 *
 * Visualization:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null (undefined)
 * Input becomes [1,0,0,2,3,0,0,4]
 *
 * Input: [1,2,3]
 * Output: null (undefined)
 * Input becomes [1,2,3]
 *
 * Approximation:
 * for each element in input:
 *   if element is a 0:
 *      insert a zero after the current index,
 *      shifting all subsequent values down by one (splice),
 *      truncating array to origional length
 *      skip over next value so the new zero isnt dupliated further
 *
 * Verification:
 * START: [1,0,3,0,4,5]
 * [1,0,3,0,4,5]
 *  ^ do nothing
 * [1,0,3,0,4,5]
 *    ^ duplicate and truncate
 * [1,0,0,3,0,4]
 *      ^ skip
 * [1,0,0,3,0,4]
 *          ^ do nothing
 * [1,0,0,3,0,4]
 *          ^ duplicate and truncate
 * [1,0,0,3,0,0]
 *            ^ do nothing
 * all done!
 */

const duplicateZeros = (input) => {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 0) {
      input.splice(++i, 0, 0);
      input.pop();
    }
  }
};

module.exports = duplicateZeros;
