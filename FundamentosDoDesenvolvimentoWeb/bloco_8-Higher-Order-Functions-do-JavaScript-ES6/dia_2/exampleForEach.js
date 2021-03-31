/* eslint-disable no-console */
// Método for each:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

/* A arrow function passada para o forEach possui element , index e array como parâmetros, onde:
element - Valor do elemento do array;
index - Índice em cada iteração ou posição do elemento no array, começando do 0;
array - Array original que está sendo percorrido. */

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

showEmailList(emailListInData.forEach((el) => {
  console.log(`O email ${el} esta cadastrado em nosso banco de dados!`);
}));

/* Para fixar, você pode praticar com este exemplo do forEach feito no CodePen.
Agora vamos usar o forEach , para realizar a tabuada do 2. Veja o exemplo abaixo:
Copiar */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
/* No exemplo acima, foi executado para cada elemento do array a função multipliesFor2,
que imprime o parâmetro element * 2 no console.
Agora estamos tratando de uma HOF , sendo assim é possível se utilizar também dos
demais parâmetros para se resolver um problema. Como se pode fazer isso? Veja este
exemplo abaixo com o uso de index no forEach : */

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
