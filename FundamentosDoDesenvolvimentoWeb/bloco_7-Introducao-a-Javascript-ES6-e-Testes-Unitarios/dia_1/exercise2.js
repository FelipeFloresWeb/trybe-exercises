// Faça uma função que retorne o array oddsAndEvens em ordem crescente.

// consulta do método ".sort()" em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

// Utilize template literals para que a chamada console.log(oddsAndEvens);

console.log(`${oddsAndEvens}`);

// retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Bônus (opcional): tente fazer o mesmo exercício utilizando o
// método array.sort() . Spoiler: É possível realizar uma
// função que ordene qualquer array de números.

function arraytoCresentOrder(array) {
  return array.sort((a, b) => a - b);
}

console.log(arraytoCresentOrder(oddsAndEvens));
