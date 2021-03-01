// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

// n = 7

//    *
//   * *
//  *   *
// *******

// _________________________________________________________________________________

// n = 7;   - É impresso somente as linhas ímpares;

//   *     - linha 1: Espaço inicial 3; espaço entre asteriscos 0; asteriscos 1; 
//         - linha 2: Ignorada (não impressa);
//  * *    - linha 3: Espaço inicial 2; espaço entre asteriscos 1; asteriscos 2;
//         - linha 4: Ignorada (não impressa);
// *   *   - linha 5: Espaço inicial 1; espaço entre asteriscos 3; asteriscos 2;
//         - linha 6: Ignorada (não impressa);
//*******  - linha 7: Espaço inicial 0: espaço entre asteriscos 0; asteriscos 7;

// 1. Para encontrar o numero de espaços inicias: linha 1: ((linha)1 - (n)7) / 2 = 3;
//                                                linha 3: ((linha)3 - (n)7) / 2 = 2;
//                                                linha 5: ((linha)5 - (n)7) / 2 = 1;
//                                                linha 7: ((linha)7 - (n)7) / 2 = 0;

// 2. Para encontrar os espaço entre os asteriscos: linha 1: (index0) (n)7 - (n)7 = 0;
//                                                  linha 3: (index)2 - 1 = 1;
//                                                  linha 5: (index)4 - 1 = 3;
//                                                  linha 7: (n)7 - (linha)7 = 0;

// 3. Para encontrar a quantidade de asteriscos: linha 1: (linha)1 = 1; if
//                                               linha 3: 2; else
//                                               linha 5: 2; else
//                                               linha 7: (linha)7 = 7; else if



let n = 7;

for(let linha = 0; linha < n; linha += 1) {

let symbol = '';
let initspace = '';
let spacesSymbols = '';

if () {
  
}

}