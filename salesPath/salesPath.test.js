const getCheapestCost = require('./salesPath');

function Node(cost) {
  this.cost = cost;
  this.children = [];
}

const A0 = new Node(0);
const B0 = new Node(5);
const B1 = new Node(3);
const B2 = new Node(6);
const C0 = new Node(4);
const C1 = new Node(2);
const C2 = new Node(0);
const C3 = new Node(2);
const C4 = new Node(5);
const D0 = new Node(1);
const D1 = new Node(10);
const E0 = new Node(1);
A0.children.push(B0, B1, B2);
B0.children.push(C0);
B1.children.push(C1, C2);
B2.children.push(C3, C4);
C1.children.push(D0);
C2.children.push(D1);
D0.children.push(E0);

describe('salesPath', () => {
  it('finds minimal cost from top to bottom with many levels of nodes', () => {
    const node = A0;

    const result = getCheapestCost(node);

    expect(result).toEqual(7);
  });

  it('finds minimal cost when theres is just 1 generation of children', () => {
    const node = B2;

    const result = getCheapestCost(node);

    expect(result).toEqual(8);
  });
});

