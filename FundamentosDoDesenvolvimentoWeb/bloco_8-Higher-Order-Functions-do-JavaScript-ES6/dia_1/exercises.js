/* eslint-disable no-console */
/* 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email }
de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees
para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como
parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um
email no formato nome_da_pessoa@trybe.com . */

const newEmail = (name, lastname) => `${name}_${lastname}@trybe.com`;

const newEmployees = (addMail) => {
  const employees = {
    id1: addMail('Pedro', 'Guerra'),
    id2: addMail('Luiza', 'Drumond'),
    id3: addMail('Carla', 'Paiva'),
  };
  return employees;
};

console.log(newEmployees(newEmail));

/* 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar
um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função
que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma
string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const generateAnNumber0to5 = () => Math.ceil(Math.random() * 5);

const prizeDraw = (randomNumber) => {
  if (randomNumber() === 3) {
    return 'Parabéns você ganhou';
  } return 'Tente Novamente';
};

console.log(prizeDraw(generateAnNumber0to5));

/* 3. Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta
correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma
  pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a
  função retorna true , se não for, a função retorna false . */

const correctAnswer = (answer) => {
  let feedback = false;
  if (answer === 'A') {
    feedback = true;
  }
  return feedback;
};

const studentResponse = (gabarito) => console.log(`Sua resposta está: ${correctAnswer(gabarito)}`);

studentResponse('A');

/* 4. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas
corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da
  pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a
  contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o
  total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e
quando não houver resposta ("N.A") não altera-se a contagem. */

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (trueArray, otherArray) => {
  let correctAnswers = 0;
  let naAnswers = 0;

  for (let index = 0; index < otherArray.length; index += 1) {
    const element = otherArray[index];
    if (element === trueArray[index]) {
      correctAnswers += 1;
    } if (element === 'N.A') {
      naAnswers += 1;
      console.log(naAnswers);
    }
  }
  const wrongAnswers = trueArray.length - correctAnswers - naAnswers;
  const result = correctAnswers - (wrongAnswers * 0.5);
  return result;
};

const checkPoints = (correctArray, studentArray, action) => {
  const points = action(correctArray, studentArray);
  console.log(`A pontuação final deste candidato é ${points}`);
};

checkPoints(rightAnswers, studentAnswers, checkAnswers);
