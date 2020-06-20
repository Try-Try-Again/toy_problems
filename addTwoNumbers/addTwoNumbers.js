/*
 * Specification:
 * Output:
 * linked list of numbers
 * Input:
 * 2 Linked Lists of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity:
 * O(n)
 * Constraints:
 * no leading zeros
 * Edge Cases:
 * ?
 *
 * Justification:
 * toy
 *
 * Explanation:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Visualization:
 * (2 -> 4 -> 3) + (5 -> 6 -> 4) => 7 -> 0 -> 8
 *
 * Approximation:
 * (linkedListFromString)
 * return a linked list made by ...
 *   generating a new node from each:
 *     single digit number ...
 *     popped off from a string ...
 *     (add numbers)
 *     of a multi digit number ...
 *     made by adding together all the numbers
 *       mapped from each argument:
 *         by making a number ...
 *         of a string ...
 *         from taking a linked list...
 *           creating a string with the first nodes value ...
 *           and concatinating the next node's value to the beginning of the string
 *           for every descendant of the first node
 * Verified :)
 */

const addTwoNumbers = (linked1, linked2, carry = 0) => ({
  val: (linked1.val + linked2.val + carry) % 10,
  next: linked1.next || linked2.next || (linked1.val + linked2.val + carry) > 9
    ? addTwoNumbers(
      linked1.next || {val: 0, next: null},
      linked2.next || {val: 0, next: null},
      Math.floor((linked1.val + linked2.val + carry) / 10))
    : null,
});

module.exports = { addTwoNumbers }
