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

const skills = [' Javascipt', ' HTML', ' CSS', ' Git', ' GitHub'];

const addTrybexAqui = (string) => {
  // let re = /x/gi;
  const output = 'Tryber x aqui!';
  const result = output.replace('x', string);
  return result;
};

// eslint-disable-next-line no-console
console.log(addTrybexAqui(skills));

// Segunda Opção:

// function addTrybexAqui(string) {
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

// const phrase = addTrybexWin(skills);
const phrase2 = (string) => {
  // const rep = /x/g;
  const phrase = string;
  const orderArray = skills.sort();
  const newphrase = 'Minhas cinco principais habilidades são:';

  return `${phrase} ${newphrase} ${orderArray} #goTrybe`;
};

// eslint-disable-next-line no-console
console.log(phrase2(addTrybexAqui(skills)));
