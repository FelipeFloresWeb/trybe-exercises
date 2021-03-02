// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(text) {

  text = [];
  let biggerNameCrescentOrder = [];
  let theBiggerName = '';

  for(let index in array) {

    text.push(array[index]);

  }

  for(let index = 0;index < text.length; index += 1) {

    if (text[index] == text.length - 1) {
      text[index] = text[index];
    } else if(text[index] > text[index+1]) {
      biggerNameCrescentOrder.push(text[index]);
    } else {
      text[index] = text[index];
    }

  }

  theBiggerName += biggerNameCrescentOrder[biggerNameCrescentOrder.length - 1];

  return theBiggerName;

}

console.log(biggestName(array));