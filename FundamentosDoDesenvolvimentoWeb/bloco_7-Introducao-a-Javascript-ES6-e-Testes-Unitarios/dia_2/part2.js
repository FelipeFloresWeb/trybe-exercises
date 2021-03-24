/* eslint-disable no-console */
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 .
// Essa função deve possuir três parâmetros, sendo eles: o objeto a
// ser modificado, a chave que deverá ser adicionada e o valor dela.

const addPropertyToAnObject = (anObect, keyName, keyValue) => {
  const newPropertyObject = anObect;
  newPropertyObject[`${keyName}`] = `${keyValue}`;
  return newPropertyObject;
};

console.log(addPropertyToAnObject(lesson2, 'turno', 'manhã'));

// 2. Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

const showObjectKeys = (obj) => Object.keys(obj);

console.log(showObjectKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const showObjectLenght = (obj) => Object.keys(obj).length;

console.log(showObjectLenght(lesson2));

// 4.Crie uma função para listar os valores de um
// objeto. Essa função deve receber um objeto como parâmetro.

const showObjectValue = (obj) => Object.values(obj);

console.log(showObjectValue(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar
// todas as aulas através do Object.assign . Cada chave desse
// novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2
// e lesson3 .

const allLessons = Object.assign(lesson1, lesson2, lesson3);

console.log(allLessons);
