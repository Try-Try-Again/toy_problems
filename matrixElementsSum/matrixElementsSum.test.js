const matrixElementsSum = require('./matrixElementsSum');

describe('matrixElementSum', () => {
  it('skips any element which had a 0 in a previous array', () => {
    const matrix = [
      [1, 1, 1, 0],
      [0, 5, 0, 1],
      [2, 1, 3, 10],
    ];

    const result = matrixElementsSum(matrix);

    expect(result).toEqual(9);
  });

  it('returns 0 if every element in the first array is 0', () => {
    const matrix = [
      [0, 0, 0, 0],
      [0, 5, 0, 1],
      [2, 1, 3, 10],
    ];

    const result = matrixElementsSum(matrix);

    expect(result).toEqual(0);
  });

  it('adds every element if there are no 0s', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 5, 1, 1],
      [2, 1, 3, 10],
    ];

    const result = matrixElementsSum(matrix);

    expect(result).toEqual(28);
  });

});

