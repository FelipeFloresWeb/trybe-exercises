// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let nArray = [];
// let simbol = '*';

// for (let index = 1; index <= n; index += 1) {

//   nArray.push(simbol);

//   console.log(nArray);
  
// }
let n = 5;
let simbol = '*';
let imputLine = '';

for (let index = 1; index <= n; index += 1) {
  imputLine = imputLine + simbol;  
}

for (let index = 1; index <= n; index += 1) {
  console.log(imputLine);
}
