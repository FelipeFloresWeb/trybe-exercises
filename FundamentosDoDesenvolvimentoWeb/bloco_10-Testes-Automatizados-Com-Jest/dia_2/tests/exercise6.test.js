const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (animalName) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const resolved = Animals.find((animal) => animal.name === animalName);
      if (resolved) {
        return resolve(resolved);
      }
      return reject('Nenhum animal com esse nome!');
    }, 1000);
  })
);

const getAnimal = async (animal) => {
  const output = await findAnimalByName(animal);
  return output;
};

getAnimal('Dorminhoco').then((log) => console.log(log));

// ---------------------

/* 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que
deverá passar no teste abaixo. */

describe('Testando promise - findAnimalByName', () => {
  describe('Deve retornar o objeto do animal quando passado um nome que existe', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe nenhum animal com a idade passada, deve retornar a mensagem de erro \'Nenhum animal com esse nome!\'', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });
});

/* 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser
um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto
a função como o seu teste. */

const findAnimalByAge = (animalAge) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const resolved = Animals.find((animal) => animal.age === animalAge);
      if (resolved) {
        return resolve(resolved);
      }
      return reject('Nenhum animal com essa idade!');
    }, 1000);
  })
);

describe('Testando promise - findAnimalByAge', () => {
  describe('Deve retornar o objeto do animal quando passado uma idade que existe', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      return findAnimalByAge(1).then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe nenhum animal com a idade passada, deve retornar a mensagem de erro \'Nenhum animal com essa idade!\'', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      return findAnimalByAge('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com essa idade!'));
    });
  });
});
