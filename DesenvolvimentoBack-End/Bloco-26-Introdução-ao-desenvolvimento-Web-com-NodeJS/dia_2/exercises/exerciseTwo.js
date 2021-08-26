// Escreva um código para consumir a função construída no exercício anterior.
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

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
myFunction(getRandomNumber(),
  getRandomNumber(),
  getRandomNumber())
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

// const randomNumbers2 = Array.from({ length: 3 }).map(getRandomNumber);

// myFunction(...randomNumbers2)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));
