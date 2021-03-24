// Função 1 : Escreva uma função que vai receber uma string como
// parâmetro. Sua função deverá procurar pela letra x em uma string
// qualquer que você determinar e substituir pela string que você passou
// como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS ,
// nesse caso, contendo cinco strings com suas principais skills.

// consulta método .replace() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceola%20tenho%2032%20anos%20e%20faz%202%20dias%20let%20numbers%20=%20frase(//w(x)+/g)

function addTrybexWin(string) {
  // let re = /x/gi;
  let output = 'Tryber x aqui!';
  let result = output.replace('x', string);
  return result;
}
const word = 'Willian';
console.log(addTrybexWin(word));

// function addTrybexWin(string) {
//   let output = 'Tryber x aqui!';
//   let result = '';
//   let arrayOutput = output.split(' ');
//   for (let index = 0; index < arrayOutput.length; index += 1) {
//     if (arrayOutput[index] === 'x') {
//       result += ` ${string} `;
//     } else {
//       result += `${arrayOutput[index]}`;
//     }
//   }
//   return result;
// }

// Função 2 : Escreva uma função que vai receber a string
// retornada da Função 1 como parâmetro. Essa função deve concatenar
// as skills do array global à string que foi passada para a Função 2
// via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua
// função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
