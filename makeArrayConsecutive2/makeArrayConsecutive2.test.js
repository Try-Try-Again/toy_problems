const makeArrayConsecutive2 = require('./makeArrayConsecutive2');

describe('makeArrayConsecutive2', () => {
  it('returns 3 when we need 3 more statues', () => {
    const nums = [6, 2, 3, 8];

    const result = makeArrayConsecutive2(nums);

    expect(result).toEqual(3);
  });

  it('returns 4 when 4 statues are needed', () => {
    const nums = [5, 7, 3, 8, 11];

    const result = makeArrayConsecutive2(nums);

    expect(result).toEqual(4);

  });
});
