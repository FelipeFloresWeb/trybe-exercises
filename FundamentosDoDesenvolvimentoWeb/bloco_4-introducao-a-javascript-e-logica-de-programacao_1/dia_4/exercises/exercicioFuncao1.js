// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindromo(text) {
  
  text = text.toLowerCase();text.split('');

  let word = '';


  for(let index = text.length -1; index >= 0; index -= 1) {

    word += text[index];

  }

  if(text == word) {

    return text == word;

  } else {

    return text == word;

  }

}

console.log(isPalindromo('OsSo'));