// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let array = [2, 3, 2, 5, 8, 2, 3];

function arrayMoreRepeated(array) {

  array = array;
  let countOfArray = 0;
  let indexOfArray = [];

  for(let index in array) {

    for(let index2 in array) {

      if(array[index] === array[index2]) {

        countOfArray += 1;
  
      } 

    }

    if(array[index] != array[index]) {

      indexOfArray.push(array[index]);

    }

  }

  return indexOfArray;

}

console.log(arrayMoreRepeated(array));