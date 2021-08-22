const readline = require('readline-sync');

const number = readline.questionInt('What number do you bet (0 - 10)?');

const randomNumber = () => Math.floor(Math.random() * 11);

const checkNumber = () => {
  const generatedNumber = randomNumber();
  console.log(`Generated number: ${generatedNumber}`);
  if (generatedNumber === number) return 'Congratulations you got it right!!!!!!!!!!!!!!!!!';
  return 'more luck next time';
};

console.log(checkNumber());
