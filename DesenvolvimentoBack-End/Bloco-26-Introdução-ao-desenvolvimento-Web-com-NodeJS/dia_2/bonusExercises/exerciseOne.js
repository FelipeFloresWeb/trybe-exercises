const fs = require('fs').promises;
const readline = require('readline');
const path = require('path');

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    console.log(fileName);
    // const fileContent = await fs.readFile(fileName, 'utf-8');
    const fileContent = await fs.readFile(path.resolve(__dirname, '../io-local', 'meu-arquivo.txt'), 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();
