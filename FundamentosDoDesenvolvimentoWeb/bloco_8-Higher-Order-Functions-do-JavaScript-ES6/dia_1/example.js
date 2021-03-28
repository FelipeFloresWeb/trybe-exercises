// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
function wakeUp() {
  return console.log('Acordando!!');
}
// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const breakfast = () => console.log('Bora tomar café!!');

// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const goSleep = () => console.log('Partiu dormir!!');

/* Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das
funções de primeira classe que você criou nos exemplos anteriores. */

// const printAnything = () => console.log();

const doingThings = (whichthing) => whichthing();

doingThings(wakeUp);
doingThings(breakfast);
doingThings(goSleep);
