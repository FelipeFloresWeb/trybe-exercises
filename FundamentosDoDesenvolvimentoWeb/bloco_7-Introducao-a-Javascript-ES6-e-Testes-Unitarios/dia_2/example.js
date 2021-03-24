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
