// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número
// não negativo N , com a notação N! , é o
// produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo
// exercício de forma recursiva . Spoiler:

function fatorialOf(number) {
  let result = 1;
  for (let index = number; index > 0; index -= 1) {
    if (number === 0) {
      return result;
    } result *= index;
  }
  return result;
}
console.log(fatorialOf(6));

// É possível resolver com uma linha usando ternary operator .

function fatorialOfInTernary(number) {
  let result = 1;
  for (let index = number; index > 0; index -= 1) {
    result *= index;
  }
  return result;
}
console.log(fatorialOfInTernary(0));
