/*
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
 * ---
 *
 * Approximation
 * start = 0
 * middle = len(array) // 2
 * end = len(array) - 1
 *
 * while start < end:
 *   if array[start] == target:
 *     return start
 *   if array[middle] == target:
 *     return middle
 *   if array[end] == target:
 *     return end
 *
 *   if
 *   array[start] < target < array[middle] //no negatives
 *   or  start < target and target !< middle and start !< middle
 *   or  start !< target and target < middle and start !< middle
 *   or  start !< target and target !< middle and start < middle
 *   (array[start] > tartget && array[start] > array[middle]):
 *     end = middle + 1
 *     middle = end // 2
 *   else
 *     start = middle
 *     middle = start + (end - start // 2)
 *
 * return false
 */

const shiftedArrSearch = (nums, target) => {
  //console.log(nums, target);
  if (nums[0] === target) {
    return 0;
  }
  let start = 0;
  let middle = Math.floor(nums.length / 2);
  let end = nums.length - 1;

  while (start < end) {
//    console.log(start, middle, end);
//    console.log(nums[start], nums[middle], nums[end]);
//    console.log(nums.slice(start, end));
    if (nums[start] === target) {
      return start;
    }
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[end] === target) {
      return end;
    }
    if (end - start < 3) {
      return -1;
    }
    if (
      nums[start] < target < nums[middle]
      // || (nums[start] > target && target < nums[middle] && nums[start] > nums[middle])
      //|| (nums[start] > target && target > nums[middle] && nums[start] < nums[middle])
      //|| (nums[start] < target && target > nums[middle] && nums[start] > nums[middle])
    ) {
      end = middle + 1; // - 1;
      middle = Math.floor(end / 2);
    } else {
      start = middle; // + 1;
      middle = start + Math.floor((end - start) / 2) + 1;
    }
  }

  return -1;
};

//console.log(shiftedArrSearch([4,5,6,7,0,1,2], 1));

module.exports = shiftedArrSearch;




