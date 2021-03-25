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

// console.log(addPropertyToAnObject(lesson2, 'turno', 'manhã'));

// 2. Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.

const showObjectKeys = (obj) => Object.keys(obj);

// console.log(showObjectKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const showObjectLenght = (obj) => Object.keys(obj).length;

// console.log(showObjectLenght(lesson2));

// 4.Crie uma função para listar os valores de um
// objeto. Essa função deve receber um objeto como parâmetro.

const showObjectValue = (obj) => Object.values(obj);

// console.log(showObjectValue(lesson3));

// 5.Crie um objeto de nome allLessons , que deve agrupar
// todas as aulas através do Object.assign . Cada chave desse
// novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2
// e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

/* 6. Usando o objeto criado no exercício 5, crie uma função
que retorne o número total de estudantes em todas as aulas. */

function sumStudents(numeros) {
  let total = 0;
  let students = Object.keys(numeros);
  for (let key in students) {
    total += numeros[students[key]].numeroEstudantes;
  }
  return total;
}

console.log(sumStudents(allLessons));

/* 7. Crie uma função que obtenha o valor da chave de
acordo com a sua posição no objeto. Por exemplo: */

const getValue = (obj, posicao) => Object.keys(obj)[posicao];

console.log(getValue(allLessons, 0));

/* 8. Crie uma função que verifique se o par (chave / valor)
existe na função. Essa função deve possuir três parâmetros,
sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */

const checkPropertyofAnObject = (anObect, keyName, keyValue) => {
  const newPropertyObject = anObect;
  const keysOfObject = Object.keys(newPropertyObject);
  const valuesOfObject = Object.values(newPropertyObject);
  if (valuesOfObject.includes(keyValue) && keysOfObject.includes(keyName)) {
    return `A propridade ${keyName} e o valor ${keyValue}, existe neste objeto`;
  }
  return `A propridade ${keyName} e o valor ${keyValue}, não existe neste objeto`;
};

console.log(checkPropertyofAnObject(lesson1, 'materia', 'Matemática'));

// const checkPropertyofAnObject = (anObect, keyName, keyValue) => {
//   const newPropertyObject = anObect;
//   const entrieObject = Object.entries(newPropertyObject);
//   for (const key in entrieObject) {
//     if (entrieObject[key][0] === keyName && entrieObject[key][1] === keyValue) {
//       return true;
//     }
//   }
// };

// console.log(checkPropertyofAnObject(lesson1, 'materia', 'Matemática'));
