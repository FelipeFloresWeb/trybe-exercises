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
    return 'negative'
  } else {
    return 'zero'
  }
}
