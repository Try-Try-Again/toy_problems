/*
 * getCheapestCost()
 * Specs
 * Output:
 * number
 * Input:
 * Node
 * Constraints:
 * 5000ms
 * 0 <= rootNode.cost <= 100000
 *
 * Justification:
 * toy
 *
 * Explanation:
 * given a node with a price and an array of child nodes:
 *  return the lowest price from adding 1 parent values to one of its child values until you reach bottom of tree.
 *
 * Visualization:
 * ---
 *
 * Approximation:
 * return the sum of top level node and whichever child returns the minimum value from calling getCheapestCost with said child as argument
 */

const getCheapestCost = (node) =>
  node.children.length
    ? Math.min(...node.children.map((child) => getCheapestCost(child))) + node.cost
    : node.cost;

module.exports = getCheapestCost;
