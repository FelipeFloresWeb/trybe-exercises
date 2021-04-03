/* Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula
ou minúscula. */

const assert = require('assert');
// const { rollbacks } = require('npm');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const checkFirstInex = (letter) => {
  let times = 0;
  for (let index = 0; index < letter.length; index += 1) {
    if (letter[index] === 'A' || letter[index] === 'a') {
      times += 1;
    }
  }
  return times;
};

function containsA() {
  return names.reduce((acc, item) => checkFirstInex(item) + acc, 0);
}
assert.deepStrictEqual(containsA(), 20);
