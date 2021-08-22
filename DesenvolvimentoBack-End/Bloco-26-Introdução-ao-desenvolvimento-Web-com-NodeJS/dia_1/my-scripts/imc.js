const readline = require('readline-sync');

const height = readline.questionFloat('What\'s your height? ');
const weight = readline.questionInt('What is your weight? ');

const doubleHeight = height * 2;

const getIMC = (wgt) => wgt / doubleHeight;

const getIMCDescription = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc >= 18.5 && imc <= 24.9) return 'Peso Normal';
  if (imc >= 25.0 && imc <= 29.9) return 'Acima do peso (sobrepeso)';
  if (imc >= 30.0 && imc <= 34.9) return 'Obesidade grau I';
  if (imc >= 35.0 && imc <= 39.9) return 'Obesidade grau II';
  return 'Obesidade graus III e IV';
};

console.log(`Your IMC is  ${getIMC(weight)},
Classification: ${getIMCDescription(getIMC(weight))}`);
