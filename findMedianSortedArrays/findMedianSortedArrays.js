/*
 * Specification:
 * Output:
 * number
 * Input:
 * sorted array, sorted array
 * Time Complexity:
 * O(log(m+n))
 * Spacial Complexity:
 * O(m+n)
 * Edge Cases:
 * [1, 3], [2] => 2.0
 * [1, 2], [3, 4] => (2 + 3) / 2.5
 *
 * Justification:
 * toy
 *
 * Explanation:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays.
 *
 * Visualization:
 * ---
 *
 * Approximation:
 * findMedianSortedArrays(numsA, numsB):
 *   indexA = 0
 *   indexB = 0
 *   merged = [];
 *   median(nums):
 *     return either the center number (if odd length)
 *     or the average of the two center values (if even length)
 *   while indexA < length of numsA and indexB < length of numsB:
 *     if indexA === numsA.length:
 *       concatinate numsB[indexB, -1] to merged
 *       return median of merged:
 *     if indexB === numsB.length:
 *       concatinate numsA[indexA, -1] to merged
 *       return median of merged
 *     if numsA[indexA] > numsB[indexB]:
 *       push numsA[indexA] to merged
 *       indexA ++
 *     else:
 *       push numsB[indexB] to merged
 *       indexB ++
 *   return median of merged
 *    return either the center number (if odd length)
 *    or the average of the two center values (if even length)
 */

const findMedianSortedArrays = (numsA, numsB) => {

  const median = (nums) => nums.length % 2 === 1
    ? nums[Math.floor(nums.length / 2)]
    : (nums[Math.floor(nums.length / 2) - 1] + nums[Math.ceil(nums.length / 2)]) / 2;

  let result = [], aI = 0, bI = 0, aLen = numsA.length, bLen = numsB.length;

  while (aI < aLen && bI < bLen) {
    if (numsA[aI] < numsB[bI]) {
      result.push(numsA[aI]);
      aI += 1;
    } else {
      result.push(numsB[bI]);
      bI += 1;
    }
  }

  return median([...result, ...numsA.slice(aI, aLen), ...numsB.slice(bI, bLen)]);
}

module.exports = findMedianSortedArrays;
