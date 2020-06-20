/*
 * Specification:
 * Output:
 * boolean
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(n)
 * Constraints:
 * 2 ≤ sequence.length ≤ 105,
 * -105 ≤ sequence[i] ≤ 105.
 * Edge Cases:
 * ?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no
 * more than one element from the array.
 *
 * Visualization:
 * [1, 3, 2, 1] => false
 * [1, 3, 2] => true
 *
 * Approximation:
 * set up duplicate variable
 * if a > b
 * duplicate = 1
 * for
 */

const almostIncreasingSequence = (nums) => {
   let strikes = 0;
   for (let i = 1; i < nums.length; i += 1) {
     if (nums[i] <= nums[i - 1]) {
       strikes += 1;
       if (strikes > 1) {
         return false;
       }
       if (strikes > 1) {
         return false;
       }
       if (nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) {
         return false;
       }
     }
   }
   return true;
}
  // let strikes = nums[0] < nums[1] ? 0 : 1;
  // let index = strikes + 1;
  // let length = nums.length;
  // while (index < length) {
  //   if (nums[index] > nums[index - 1]) {
  //     index += 1;
  //   } else {
  //     if (nums[index] > nums[index - 2]) {
  //       nums.splice(index - 1, 1);
  //     } else {
  //       nums.splice(index, 1);
  //     }
  //     length -= 1;
  //     strikes += 1;
  //   }
  //   if (strikes > 1) {
  //     return false
  //   }
  // }
  // return true;
//};

module.exports = almostIncreasingSequence;
