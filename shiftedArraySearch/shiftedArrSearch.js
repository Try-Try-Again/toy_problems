/*
 * findStart
 * ---------
 * Specification:
 * Output:
 * number
 * Input:
 * array of numbers
 * Time Complexity:
 * O(log(n))
 * Spacial Complexity:
 * O(1)
 * Constraints:
 * use binary search
 * Edge Cases:
 * test with start in each position in both an even length and odd length array
 *
 * Justification:
 * need to start to so 'shiftedArraySearch' knows how shifted it's input array is
 *
 * Explanation:
 * Given a shifted array of numbers, find the lowest number in the the array
 *
 * Visualization:
 *
 *
 * shiftedArraySearch
 * ------------------
 * Specification:
 * Output:
 * number
 * Input:
 * array, number
 * Constraints:
 * 5000ms
 * Time Complexity:
 * O(log(n)) ?
 * Spacial Complexity:
 * O(1)
 * Edge Cases:
 * not shifted at all?
 * shifted len(array - 1)?
 * single array element
 * element not in array
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given shiftArr and an integer num, implement a function
 * shiftedArrSearch that finds and returns the index of num
 * in shiftArr. If num isn’t in shiftArr, return -1.
 * Assume that the offset can be any value between 0 and arr.length - 1.
 *
 * Visualization:
 *
 * Approximation
 * findStart(nums):
 *   findMid = (start, end) => (end - start + 1) // 2 + start
 *   start = 0
 *   end = length(nums) - 1
 *   mid = findMid(start, end)
 *
 *   while !(nums[start] <= nums[mid] <= nums[end]):
 *     if mid == start or mid == end:
 *       return mid
 *     start, mid, end = nums[start] <= nums[mid]
 *       ? mid, findMid(mid, end), end
 *       : start, findMid(start, mid), mid
 *   return start
 */
const findStart = (nums) => {
  const findMid = (start, end) => Math.floor((end - start + 1) / 2) + start;
  let start = 0;
  let end = nums.length - 1;
  let mid = findMid(start, end);

  while (!nums[start] <= nums[mid] <= nums[end]) {
    if (mid === start || mid === end) {
      return mid;
    }
    [start, mid, end] = nums[start] <= nums[mid]
      ? [mid, findMid(mid, end), end]
      : [start, findMid(start, mid), mid]
    console.log(start, mid, end);
  }
  return start;
}

console.log(findStart([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//const shiftedArrSearch = (nums, target) => {
//};

module.exports = { findStart };
