const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const msg = readline.questionInt(`which script do you want to run??
1- IMC
2- Velocidade
3- Sorteio\n`);

require(scripts[msg - 1].script);
