// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

const phrase1 = 'Antônio foi no banheiro e não sabemos o que aconteceu';

function longestWord(phrase) {
  let bigger = '';
  const arrayPhrase = phrase.split(' ');
  arrayPhrase.forEach((word) => {
    if (word.length > bigger.length) {
      bigger = word;
    }
  });
  return bigger;
}

console.log(longestWord(phrase1));
