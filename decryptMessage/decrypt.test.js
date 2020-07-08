const decrypt = require('./decrypt');

describe('decrypt', () => {
  it('decrypts the word "crime"', () => {
    const input = "dnotq"

    const result = decrypt(input);

    expect(result).toEqual("crime");
  });

  it('decrypts the word "encyclopedia"', () => {
    const input = "flgxswdliefy"

    const result = decrypt(input);

    expect(result).toEqual("encyclopedia");
  });

  it('decrypts "abcde"', () => {
    const input = "bvqmj"

    const result = decrypt(input);

    expect(result).toEqual("abcde");
  });
});

