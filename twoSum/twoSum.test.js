const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('returns the first and second indices when those elements equal the target', () => {
    const nums = [2, 7, 11, 15], target = 9;

    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });

  it('returns other values than first and second when other values equal target', () => {
    const nums = [11, 7, 15, 2, 1], target = 8;

    const result = twoSum(nums, target);

    expect(result).toEqual([1, 4]);

  });
});
