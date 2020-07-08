const { pancakeSort, flip } = require('./pancakeSort');

describe('flip', () => {
  it('reverses entire array', () => {
    const nums = [1, 5, 4, 3, 2];

    flip(nums, 5);

    expect(nums).toEqual([2, 3, 4, 5, 1]);
  });

  it('flips the first 3 values', () => {
    const nums = [1, 5, 4, 3, 2];

    flip(nums, 3);

    expect(nums).toEqual([4, 5, 1, 3, 2]);

  });
});

describe('pancakeSort', () => {
  it('sorts numbers 1 through five', () => {
    const nums = [1, 5, 4, 3, 2];

    const result = pancakeSort(nums);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

/*
  Test Case #1
  Input: [1],Expected: [1]
  Test Case #2
  Input: [1,2],Expected: [1,2]
  Test Case #3
  Input: [1,3,1],Expected: [1,1,3]
  Test Case #4
  Input: [3,1,2,4,6,5],Expected: [1,2,3,4,5,6]
  Test Case #5
  Input: [10,9,8,7,6,5,4,3,2,1],Expected: [1,2,3,4,5,6,7,8,9,10]
  Test Case #6
  Input: [10,9,8,6,7,5,4,3,2,1,9,10,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1],
  Expected: [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10],Actual:
*/
});

