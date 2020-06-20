/*
 * Specification:
 * Output:
 * number
 * Input:
 * string
 * Time Complexity:
 * O(n^2)
 * Spacial Complexity:
 * O(n)
 * Constraints:
 * ?
 * Edge Cases:
 * "abcabcbb" => 3
 * "bbbbb" => 1
 * "pwwkew" => 3
 * Justification:
 * toy
 * Explanation:
 * Given a string, find the length of the longest substring without repeating characters.
 * Visualization:
 * ---
 * Approximation:
 * set up empty array noRepeats:
 * set up max length value of 0
 * for each element in input:
 *   get the index of curreent element in noRepeats
 *   splice noRepeats starting at 0 and ending at the index of current element
 *   push element to noRepeats
 *   re-assign max to either itself, of current length of noRepeats if noRepeats is longer
 * return max
 j   if element not in
 */

let lengthOfLongestSubstring = (string) => {
  let left = 0;
  let right = 0;
  let max = 0;
  let unique = new Set();

  while(right < string.length) {
    if (!unique.has(string.charAt(right))) {
      unique.add(string.charAt(right));
      max = Math.max(max, unique.size);
      right += 1;
    } else {
      unique.delete(string.charAt(left))
      left += 1;
    }
  }

  return max;
}
// let lengthOfLongestSubstring = (string) => {
//   let max = 0;
//   let noRepeats = [];
//   string
//     .split('')
//     .forEach(character => {
//       noRepeats.splice(0, noRepeats.indexOf(character) + 1);
//       noRepeats.push(character);
//       max = Math.max(max, noRepeats.length);
//     });
//   return max;
// };

module.exports = lengthOfLongestSubstring;
