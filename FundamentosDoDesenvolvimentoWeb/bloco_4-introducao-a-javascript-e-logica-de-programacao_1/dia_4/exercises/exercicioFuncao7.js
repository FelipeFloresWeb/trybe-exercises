/* Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */

function checkLastLetters(word, letters) {
  let index2 = word.length;
  for (let index = letters.length; index >= 0; index -= 1) {
    if (letters[index] !== word[index2]) {
      return false;
    }
    index2 -= 1;
  }
  return true;
}
console.log(checkLastLetters('trybe', 'be'));
