const decrypt = (msg) => {
  let decoded = '';

  for (let i = 0; i < msg.length; i += 1) {
    let charCode = msg.charCodeAt(i) - (i === 0 ? 1 : msg.charCodeAt(i - 1));
    decoded += String.fromCharCode(charCode + Math.ceil((97 - charCode) / 26) * 26);
  }

  return decoded;
};

  //String.fromCharCode(...msg.split('')
  //  .map(character => character.charCodeAt(0))
  //  .map((charCode, index, codes) =>
  //    index === 0
  //      ? charCode - 1
  //      : charCode - codes[index - 1])
  //  .map(charCode => charCode + Math.max(0, Math.ceil((97 - charCode) / 26) * 26)))

module.exports = decrypt;
