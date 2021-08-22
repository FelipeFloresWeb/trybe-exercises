const readline = require('readline-sync');

const distance = readline.questionInt('Distance (Km)? ');
const time = readline.questionInt('How Long (hour)? ');

const getAvegareSpeed = () => distance / time;

console.log(`The average speed is ${getAvegareSpeed()}Km/h`);
