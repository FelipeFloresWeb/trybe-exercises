let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 0

for(let index = 0; index < numbers.length; index += 1) {
  let numeroAtual = numbers[index];
   resultadoSoma = resultadoSoma + numeroAtual;
}

arithmeticAverage = resultadoSoma / numbers.length;

console.log(arithmeticAverage);