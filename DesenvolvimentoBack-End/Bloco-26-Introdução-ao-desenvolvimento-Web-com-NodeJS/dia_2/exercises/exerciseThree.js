async function myFunction(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Informe Apenas Números');
  }
  if ((a + b) * c < 50) {
    throw new Error('Valor muito baixo');
  }
  return (a + b) * c;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callMyFunction() {
  try {
    const result = await myFunction(getRandomNumber(), getRandomNumber(), getRandomNumber());
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

callMyFunction();
