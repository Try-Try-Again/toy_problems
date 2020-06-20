const almostIncreasingSequence = require('./almostIncreasingSequence');

describe('almostIncreasingSequence', () => {
  it('returns false when it requires removal of more than one element', () => {
    const nums = [1, 3, 2, 1];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(false);
  });

  it('returns true when less than 2 elements need to be removed [1, 3, 2]', () => {
    const nums = [1, 3, 2];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(true);

  });

  it('returns false if there are more than one duplicate number', () => {
    const nums = [1, 2, 1, 2];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(false);
  });

  it('returns true if only the first element needs to be removed', () => {
    const nums = [10, 1, 2, 3, 4, 5]

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(true);
  });

  it('does not care if numbers are skipped', () => {
    const nums = [0, -2, 5, 6];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(true);

  });

  it('accepts a single large number hiding in middle of array', () => {
    const nums = [1, 2, 5, 3, 5];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(true);
  });

  it ('returns false if two are out of place', () => {
    const nums = [3, 6, 5, 8, 10, 20, 15]

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(false);
  });

  it('denies a sequence resetting after 2 consecutive increments', () => {
    const nums = [40, 50, 60, 10, 20, 30];

    const result = almostIncreasingSequence(nums);

    expect(result).toBe(false);
  });
});
