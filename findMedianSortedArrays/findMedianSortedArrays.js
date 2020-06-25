/*
 * Specification:
 * Output:
 * number
 * Input:
 * sorted array, sorted array
 * Time Complexity:
 * O(log(m+n))
 * Spacial Complexity:
 * O(1)
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
var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  let x = nums1.length
  let y = nums2.length
  let low = 0, high = x
  while(low <= high) {
    const partitionX = (high + low) >> 1
    const partitionY = ((x + y + 1) >> 1) - partitionX

    const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

    const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
    const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]

    if(maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY)
      if( (x + y) % 2 == 1)
        return lowMax
      return (lowMax + Math.min(minX, minY)) / 2
    } else if(maxX < minY) {
      low = partitionX + 1
    } else
      high = partitionX - 1
  }

};

module.exports = findMedianSortedArrays;
