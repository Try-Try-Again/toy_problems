const checkIfExist = require('./checkIfExist');

describe('checkIfExist', () => {
  it('returns true if a value and its double exist', () => {
    const nums = [10,2,5,3];

    const result = checkIfExist(nums);

    expect(result).toBe(true);
  });

  it('returns false when no element has a double', () => {
    const nums = [3,1,7,11];

    const result = checkIfExist(nums);

    expect(result).toBe(false);

  });

  it('finds a double for a value other that 5', () => {

    const nums = [7,1,14,11];

    const result = checkIfExist(nums);

    expect(result).toBe(true);
  });
});
