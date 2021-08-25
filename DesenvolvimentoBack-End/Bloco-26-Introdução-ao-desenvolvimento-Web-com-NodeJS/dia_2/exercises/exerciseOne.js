// Crie uma função que recebe três parâmetros retorna uma Promise .

// Caso algum dos parâmetros recebidos não seja um número,
// rejeite a Promise com o motivo 'Informe apenas números'.

// Caso todos os parâmetros sejam numéricos, some os dois primeiros e
// multiplique o resultado pelo terceiro ( (a + b) * c ).

// Caso o resultado seja menor que 50, rejeite a Promise com o motivo 'Valor muito baixo'.

// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
function myFunction(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe Apenas Números'));
    }
    if ((a + b) * c < 50) {
      reject(new Error('Valor muito baixo'));
    }
    resolve((a + b) * c);
  });
}

// async function myFunction(a, b, c) {
//   if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//     throw new Error('Informe Apenas Números');
//   }
//   if ((a + b) * c < 50) {
//     throw new Error('Valor muito baixo');
//   }
//   return (a + b) * c;
// }

myFunction(1, '2', 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

myFunction(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

myFunction(5, 6, 7)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
