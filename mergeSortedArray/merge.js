/*
 * Specification:
 * Output: sorted array of numbers
 * Input:
 * nums1 (array of numbers), m (number) *length of nums1
 * nums2 (array of numbers), n (number) *length of nums2
 * Time Complexity: O(n)
 * Spacial Complexity: O(1)
 * Constraints: none
 * Edge Cases:
 * array length is shorter than n/m
 *
 * Justification:
 * toy problem
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 * Explanation
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * Output:
 * [1,2,2,3,5,6]
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 1
 * nums2 = [2,7,9],       n = 2
 * Output:
 * [1, 2, 7]
 *
 * Verification:
 * ...
 */

const merge = (nums1, m, nums2, n) => {
  nums1.splice(0, nums1.length, ...[...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b));
};

module.exports = merge;
