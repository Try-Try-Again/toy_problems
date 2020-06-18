const findDisappearedNumbers = require('./findDisappearedNumbers');

describe('findDisappearedNumbers', () => {
  it('returns 5 and 6 when they are missing', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];

    const result = findDisappearedNumbers(nums);

    expect(JSON.stringify(result)).toEqual(JSON.stringify([5, 6]));
  });

  it('returns 2 and 4 when they are missing', () => {
    const nums =[ 8, 8, 7, 3, 5, 6, 6, 1 ];

    const result = findDisappearedNumbers(nums);

    expect(JSON.stringify(result)).toEqual(JSON.stringify([2, 4]));
  });
});
