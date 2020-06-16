const validMountainArray = require('./validMountainArray');

describe('validMountainArray', () => {
  it('returns false when array length is less than 3', () => {
    const nums =  [2,1];

    const result = validMountainArray(nums);

    expect(result).toBe(false);
  });

  it('returns true if valid mountain array', () => {
    const nums = [0,3,2,1];

    const result = validMountainArray(nums);

    expect(result).toBe(true);
  });

  it('returns false if value does not descend after peak', () => {
    const nums = [3,5,5];

    const result = validMountainArray(nums);

    expect(result).toBe(false);

  });

  it('returns false if the last number in array is greater or equal to max', () => {
    const nums = [0,1,2,3,4,5,6,7,8,9];

    const result = validMountainArray(nums);

    expect(result).toBe(false);

  });
});
