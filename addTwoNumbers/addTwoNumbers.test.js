const {
  // stringFromLinkedList,
  // linkedListFromString,
  addTwoNumbers,
} = require('./addTwoNumbers');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


describe('addTwoNumbers', () => {
  it('has result node value arribute is equal to the ones place', () => {
    const numberOne = new ListNode( 5, new ListNode( 6, new ListNode(4)));
    const numberTwo = new ListNode( 2, new ListNode( 4, new ListNode(3)));

    const result = addTwoNumbers(numberOne, numberTwo);

    expect(result.val).toEqual(7);
  });

  it('has node value different for different ones place sums', () => {
    const numberOne = new ListNode( 3, new ListNode( 6, new ListNode(4)));
    const numberTwo = new ListNode( 2, new ListNode( 4, new ListNode(3)));

    const result = addTwoNumbers(numberOne, numberTwo);

    expect(result.val).toEqual(5);
  });

  it('has node.next.value equal to sum of second place digits', () => {
    const numberOne = new ListNode( 5, new ListNode( 6, new ListNode(4)));
    const numberTwo = new ListNode( 2, new ListNode( 4, new ListNode(3)));

    const result = addTwoNumbers(numberOne, numberTwo);

    expect(result.next.val).toEqual(0);
  });
});
