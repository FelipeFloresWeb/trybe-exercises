// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindromo(text) {

  text.toLowerCase();

  let textArray = [''];
  let textArray2 = [''];

  for(let index = 0; index < text.leght; index +=1) {
    
    textArray.push = text[index]

  }

  for(let index = text.leght; text.leght >= 1; index +=1) {

    textArray2.push = text[index]

  }

  if(textArray == textArray2) {

    return textArray == textArray2;

  } else {

    return textArray == textArray2;

  }

  

}