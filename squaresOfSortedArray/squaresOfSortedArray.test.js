const sortedSquares = require('./sortedSquares');

describe('sortedSquares', () => {
  it('squares an sorts a specific array', () => {
    const input = [-4,-1,0,3,10];

    const result = sortedSquares(input);

    expect(JSON.stringify(result)).toEqual(JSON.stringify([0,1,9,16,100]));
  });

  it('', () => {
    const input = [-7,-3,2,3,11];

    const result = sortedSquares(input);

    expect(JSON.stringify(result)).toEqual(JSON.stringify([4,9,9,49,121]));
  });
});
