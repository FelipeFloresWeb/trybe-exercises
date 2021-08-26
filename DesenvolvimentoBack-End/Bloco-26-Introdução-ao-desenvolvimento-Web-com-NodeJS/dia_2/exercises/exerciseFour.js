const fs = require('fs').promises;

// 1.Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
console.log('---------------------------Exercicio 1---------------------------\n');
fs.readFile('simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}`))
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

// 2.Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return console.log('\n---------------------------Exercicio 2---------------------------\n',
    `\nA personagem que voce selecionou é ${chosenSimpson.name}, id: ${chosenSimpson.id}\n`);
}

getSimpsonById('2');

// 3.Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  console.log('---------------------------Exercicio 3---------------------------\n', newArray);
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

filterSimpsons();

// 4.Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = simpsons.filter((simpson) => ['1', '2', '3', '4'].includes(simpson.id));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

  console.log('\n---------------------------Exercicio 4---------------------------\n\n', simpsonsFamily);
}

createSimpsonsFamily();

// 5.Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addPersonSimpson() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newPerson = {
    id: (simpsonsFamily.length + 1).toString(),
    name: 'Nelson Muntz',
  };

  simpsonsFamily.push(newPerson);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

  console.log('\n---------------------------Exercicio 5---------------------------\n', simpsonsFamily);
}

addPersonSimpson();

// 6.Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function updateSimpson() {
  const simpsons = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  console.log(simpsons);
  const simpsonsUpdated = simpsons.filter((simpson) => simpson.id !== '5')
    .concat([{ id: '5', name: 'Maggie Simpson' }]);
  console.log(simpsonsUpdated);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsUpdated));
}

updateSimpson();
