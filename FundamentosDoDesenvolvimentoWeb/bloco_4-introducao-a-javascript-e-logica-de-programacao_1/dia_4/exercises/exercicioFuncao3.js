// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array = [2, 4, 6, 7, 10, 0, -3];

function theSmallerIndexArray(array) {

  let smallerIndex = [];
  let smallerCresentOrder = [];
  let theSmallerNumber = 0;
  
  for(let index in array) {
    smallerIndex.push(array[index]);
  }
  
  for(let index = smallerIndex.length - 1; index >= 0; index -= 1) {
    if(index == 0) {
      smallerIndex[index] = smallerIndex[index];
    } else if(smallerIndex[index] < smallerIndex[index - 1]) {
      smallerCresentOrder.push(smallerIndex[index]);
    } else {
      smallerIndex[index] = smallerIndex[index];
    }
  }
  
  theSmallerNumber = smallerCresentOrder[0];
  
  return smallerIndex.indexOf(theSmallerNumber);
  
  }
  
  console.log(theSmallerIndexArray(array));