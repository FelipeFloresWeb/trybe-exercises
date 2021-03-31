/* eslint-disable no-console */
// Array.some e Array.every

/* As funções some e every são parecidas. A primeira retorna true se ao menos um elemento
de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um
array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas
funções, além de exemplos. Clique aqui e aqui para ler sobre essas funções. Leia até a
seção Exemplos .
Para visualizar melhor o retorno dos métodos some e every , brinque com esses dois exemplos
no CodePen nos links abaixo. Você pode alterar os números do array numbers para verificar o
que a função está retornando para cada caso. */

// Array.some : link: https://codepen.io/pen/?template=abZoOZz
// Array.every : link https://codepen.io/pen/?template=NWrKqME
// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

/* Observe que foi usado Object.values junto com o every . Como o Object.values retorna
um array apenas com os valores do objeto, o every percorrerá esse array retornado.
Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na
sua própria máquina agora! */
