function encode(phrase) {
  let numberWord = '';
  const strings = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < phrase.length; index += 1) {
    if (strings[phrase[index].toLowerCase()]) {
      numberWord += strings[phrase[index]];
    } else {
      numberWord += phrase[index];
    }
  }
  return numberWord;
}

function decode(phrase) {
  let wordNumber = '';
  const strings = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < phrase.length; index += 1) {
    if (strings[phrase[index].toLowerCase()]) {
      wordNumber += strings[phrase[index]];
    } else {
      wordNumber += phrase[index];
    }
  }
  return wordNumber;
}

module.exports = { decode, encode };
