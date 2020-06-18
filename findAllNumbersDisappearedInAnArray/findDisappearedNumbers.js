/*
 * Specification:
 * Output:
 * array of numbers
 * Input:
 * array of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(1)
 * Edge Cases:
 * ?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in
 * this array.
 *
 * Visualization:
 * [4,3,2,7,8,2,3,1] => [5,6]
 *
 * Approximation:
 * sort the input
 * for each element in input:
 *   if element is out of place,
 *     assign that element to the correct position of input
 * make an empty results array
 * for each element in input:
 *   if the value does not match its position:
 *     push the position's index (+1) to the results array
 * return results
 *
 * Verification:
 * ex 1:
 * input: [4, 3, 2, 7, 8, 2, 3, 1]
 * input: [1, 2, 2, 3, 3, 4, 7, 8] sort
 * input: [1, 2, 2, 3, 3, 4, 7, 8]
 *        ^  ^  ^  ^ find the ones that are out of place
 * input: [1, 2, 3, 4, 3, 4, 7, 8]
 *               ^  ^ move all out of place elements to correct place
 * input: [1, 2, 3, 4, 3, 4, 7, 8]
 *                     v  v find positions where value does not match index
 *                    [5, 6]  Done
 *
 * ex 2:
 * input: [ 8, 8, 7, 3, 5, 6, 6, 1 ]
 * input: [ 1, 3, 5, 6, 6, 7, 8, 8 ] sort
 * input: [ 1, 3, 5, 6, 6, 7, 8, 8 ]
 *             ^  ^  ^  ^  ^  ^ find the ones that are out of place
 * input: [ 1, 3, 3, 6, 5, 6, 7, 8 ]
 *                ^     ^  ^  ^ move all the out of place elements to correct place
 * input: [ 1, 3, 3, 6, 5, 6, 7, 8 ]
 *             v     v
 *            [2,    4] Done
 */

// const findDisappearedNumbers = (nums) => {
//   const result = [];
//   nums.forEach(num => {
//     result[num - 1] = num;
//   });
//   return result;
//   for (let i = 0; i < result.length; i += 1) {
//     if (!result[i]) {
//       result.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return result;
// };

// const findDisappearedNumbers = (nums) => {
//   const result = new Array(nums.length);
//
//   for (let i = 0; i < nums.length; i += 1) {
//     result[nums[i] - 1] = nums[i];
//   }
//   console.log(result);
//
//   let index = 0;
//   let offset = 0;
//
//   while(index < nums.length) {
//     if (result[index - offset]) {
//       result[index - offset] = null;
//       result.splice(index - offset, 1);
//       offset += 1;
//     } else {
//       result[index - offset] = index + 1;
//     }
//     index += 1;
//   };
//   return result;
// };

const findDisappearedNumbers = (nums) => {
  const unique = new Set(nums);
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (!unique.has(i + 1)) {
      result.push(i + 1);
    }
  }
  return result;
};
// const findDisappearedNumbers = (nums) => nums
//   .reduce((result, element) =>
//     [...result.slice(0, element - 1), element, ...result.slice(element)], nums)
//   .reduce((result, element, index) => element !== index + 1
//     ? [...result, index + 1] : result, []);

module.exports = findDisappearedNumbers;
