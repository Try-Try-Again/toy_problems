const heightChecker = require('./heightChecker');

describe('heightChecker', () => {
  it('returns 3 when 3 elements need to move', () => {
    const nums = [1,1,4,2,1,3]

    const result = heightChecker(nums);

    expect(result).toEqual(3);
  });

  it('returns the length of array when every element needs to move', () => {
    const nums = [5,1,2,3,4];

    const result = heightChecker(nums);

    expect(result).toEqual(5);
  });

  it('returns 0 when no items in the array need to move', () => {
    const nums = [1,2,3,4,5];

    const result = heightChecker(nums);

    expect(result).toEqual(0);
  });
});
