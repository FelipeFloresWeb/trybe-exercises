/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// crie uma função que receba três parâmetros, sendo eles:
// um objeto, o nome de uma chave e o seu valor. O retorno dessa
// função deve ser o objeto já com a nova chave adicionada nele.

const mycar = {
  engineType: 'internal combustion',
  power: '80 hp',
  cylinders: 4,
  from0To100: '14 seg',
  wheels: {
    type: 'alloy',
    size: 15,
    state: 'semi-new',
  },
};

function addPropertyToAnObject(anObect, keyName, keyValue) {
  const newPropertyObject = anObect;
  newPropertyObject[`${keyName}`] = `${keyValue}`;
  return newPropertyObject;
}

console.log(addPropertyToAnObject(mycar, 'flex', true));

// O método Object.entries retorna um array com os pares
// chave / valor do objeto. Para visualizar seu retorno, veja o exemplo abaixo:

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
// eslint-disable-next-line no-console
console.log(pairKeyValue);

// Observe que o retorno dele é um array e que cada um de
// seus elementos é um outro array com apenas dois dados, a chave
// do objeto e o seu valor. Para ver os valores separadamente,
// adicione o for abaixo ao código anterior e execute-o novamente.

// eslint-disable-next-line guard-for-in
// eslint-disable-next-line no-restricted-syntax
// eslint-disable-next-line guard-for-in
for (index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  // eslint-disable-next-line no-undef
  console.log('Capital:', pairKeyValue[index][1]);
}

// Método Assign:
// recebe pelo menos dois parâmetros, de forma que o primeiro
// sempre será o objeto de destino, e os parâmetros restantes serão
// os valores que serão adicionados a esse objeto destino.

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family);
console.log(person);

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
