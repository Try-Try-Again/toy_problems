/*
 * Specification:
 * Output:
 * array of numbers
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(n)
 * Constraints:
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * Edge Cases:
 * none?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array A of non-negative integers, return an array consisting of all
 * the even elements of A, followed by all the odd elements of A.
 *
 * Visualization:
 * [3,1,2,4] => [2,4,3,1]
 *
 * Approximation:
 * return the input with all the odds filter out concated to the input with all the evens filterd out
 */

const sortArrayByParity = (nums) => [
  ...nums.filter(num => num % 2 === 0),
  ...nums.filter(num => num % 2 > 0),
];

module.exports = sortArrayByParity;
