let text = 'HoRse';

result = text.toLowerCase()

if (result == 'bishop') {
  console.log('diagonal');
} else if (result == 'horse') {
  console.log('"L" (can jump over the pieces)');
} else if (result == 'tower') {
  console.log('horizontal');
} else if (result == 'queen'){
  console.log('diagonal and horizontal');
} else if (result == 'king'){
  console.log('diagonal and horizontal(1 square)');
} else if (result == 'pawn'){
  console.log('horizontal(1 square) diagonal for kill');
} else {
  console.log('This is not a valid piece')
}
