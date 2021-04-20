// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];

function theBiggestIndexArray(array) {

  let biggerIndex = [];
  let biggerDecresOrder = [];
  let theBiggerNumber = 0;
  
  for(let index in array) {
    biggerIndex.push(array[index]);
  }

  for(let index = 0; index <= biggerIndex.length - 1; index += 1) {
    if(biggerIndex[index] == biggerIndex.length - 1) {
      biggerIndex[index] = biggerIndex[index];
    } else if(biggerIndex[index] < biggerIndex[index + 1]) {
      biggerDecresOrder.push(biggerIndex[index + 1]);
    } else {
      biggerIndex[index] = biggerIndex[index];
    }
  }

  theBiggerNumber = biggerDecresOrder[biggerDecresOrder.length - 1];

  return biggerIndex.indexOf(theBiggerNumber);
  
  }
  
  console.log(theBiggestIndexArray(array));