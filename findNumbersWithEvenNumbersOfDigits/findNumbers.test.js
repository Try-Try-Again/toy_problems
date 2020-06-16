const findNumbers = require('./findNumbers');

describe('findNumbers', () => {
  it('finds 2 even lengthed numbers in array', () => {
    const arrayToTest = [12,345,2,6,7896];

    const result = findNumbers(arrayToTest);

    expect(result).toEqual(2);
  });

  it('finds 1 even length number in array', () => {
    const arrayToTest = [1,345,2,6,7896]

    const result = findNumbers(arrayToTest);

    expect(result).toEqual(1);
  });

  it('finds 0 even length numbers in array', () => {
    const arrayToTest = [1,345,2,6,789];

    const result = findNumbers(arrayToTest);

    expect(result).toEqual(0);
  });
});
