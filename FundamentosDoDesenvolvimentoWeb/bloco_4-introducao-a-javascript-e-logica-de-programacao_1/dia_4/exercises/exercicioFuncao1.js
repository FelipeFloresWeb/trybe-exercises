// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindromo(text) {
  paramText = text.toLowerCase();
  let word = '';
  for (let index = paramText.length - 1; index >= 0; index -= 1) {
    word += paramText[index];
  }
  return (paramText === word) ? paramText === word : paramText === word;
}

console.log(isPalindromo('OsSo'));