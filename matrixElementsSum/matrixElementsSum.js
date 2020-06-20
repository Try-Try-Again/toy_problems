/*
 * Specification:
 * Output:
 * number
 * Input:
 * matrix of numbers
 * Time Complexity:
 * O(n)
 * Spacial Complexity
 * O(n)
 * Edge Cases:
 *  [[1, 1, 1, 0],
 *   [0, 5, 0, 1],
 *   [2, 1, 3, 10]] => 9
 *
 *  [[0, 0, 0, 0],
 *   [0, 5, 0, 1],
 *   [2, 1, 3, 10]] => 0
 *
 *  [[1, 1, 1, 1],
 *   [1, 5, 1, 1],
 *   [2, 1, 3, 10]] => 28
 *
 * Justification:
 * toy
 *
 * Explanation:
 * Given matrix, a rectangular matrix of integers, where each value represents
 * the cost of the room, your task is to return the total sum of all rooms that
 * are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
 *
 * Visualization:
 * ---
 *
 * Approximation:
 * set up a set to store indexes that contain zeros
 * set up a sum starting at 0
 * for each array in matrix:
 *   for each element in array:
 *     if index is in set:
 *       continue
 *     if element is 0:
 *       add index of element to set:
 *     increment sum by element
 * return sum
 */

const matrixElementsSum = (floors) => {
  // if I use let instead of var, sum will be undefined after the loop. local only?
  for(var sum = 0, room = 0; room < floors[0].length; room += 1) {
    for (let floor = 0; floor < floors.length; floor += 1) {
      if (floors[floor][room] === 0) {
        break;
      } else {
        sum += floors[floor][room]
      }
    }
  }
  return sum;
}
// This ones cooler imo but it takes up way more space than above
// const matrixElementsSum = (building) => {
//   let sum = 0;
//   let haunted = new Set();
//
//   building.forEach((floor) => {
//     floor.forEach((roomPrice, roomNumber) => {
//       sum += haunted.has(roomNumber) ? 0 : roomPrice;
//       haunted.add(roomPrice === 0 ? roomNumber : null);
//     });
//   });
//
//   return sum;
// };

module.exports = matrixElementsSum;
