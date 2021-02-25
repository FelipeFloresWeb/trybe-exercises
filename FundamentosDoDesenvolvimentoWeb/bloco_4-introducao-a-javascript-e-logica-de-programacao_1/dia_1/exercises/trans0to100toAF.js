let Porcentagem = 52;

if (Porcentagem > 100 || Porcentagem < 0) {
  Porcentagem = Porcentagem;
} else if (Porcentagem >= 90) {
  Porcentagem = 'A';
} else if (Porcentagem >= 80) {
  Porcentagem = 'B';
} else if (Porcentagem >= 70) {
  Porcentagem = 'C';
} else if (Porcentagem >= 60) {
  Porcentagem = 'D';
} else if (Porcentagem >= 50) {
  Porcentagem = 'E';
} else if (Porcentagem < 50) {
  Porcentagem = 'F';
}

switch (Porcentagem) {
  case 'A':
    console.log(Porcentagem);
    break;

  case 'B':
    console.log(Porcentagem);
    break;

  case 'C':
    console.log(Porcentagem);
    break;

  case 'D':
    console.log(Porcentagem);
    break;

  case 'E':
    console.log(Porcentagem);
    break;

  case 'F':
    console.log(Porcentagem);
    break;

  default:
    console.log('Error');
}