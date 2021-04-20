let a = 3;
let b = 5;
let c = 1;

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function bigNumber(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

function bigNumber2(a, b, c) {
  if(a > b && a > c) {
    return a;
  } else if(b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

function posNegZero(a) {
  if(a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

function isTriangle(a, b, c) {

  let aTriangle = a + b + c;

  if(aTriangle === 180) {
    return 'Is triangle';
  } else if (a < 0 || b < 0|| c < 0) {
    return 'Enter a valid number';
  } else {
    return 'Is not Triangle';
  }
}

function movPieceChess (text) {

  let text = 'BISHOP';

  result = text.toLowerCase()
  
  if (result == 'bishop') {
    console.log('diagonal');
  } else if (result == 'horse') {
    console.log('"L" (can jump over the pieces)');
  } else if (result == 'tower') {
    console.log('horizontal and vertical');
  } else if (result == 'queen') {
    console.log('diagonal, horizontal and vertical');
  } else if (result == 'king') {
    console.log('diagonal and horizontal(1 square)');
  } else if (result == 'pawn') {
    console.log('horizontal(1 square) diagonal for kill');
  } else {
    console.log('This is not a valid piece')
  }
  
}

function whatIsMyNote(Porcentagem) {
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

return 'Sua Nota final é ' + Porcentagem;

}