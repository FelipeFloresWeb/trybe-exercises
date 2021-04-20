function hydrate(string) {
  let agua = '';
  let filterString = /\d+/g; // consultado uso do regex em https://www.youtube.com/watch?v=pfkkdzeyx6U&t=232s
  let strindFiltred = string.match(filterString);
  let resultFinal = 0;
  for (let index = 0; index < strindFiltred.length; index += 1) {
    resultFinal += parseInt(strindFiltred[index], 10);
  }
  let waterDrink = ' copo de água';
  if (resultFinal > 1) {
    waterDrink = ' copos de água';
  }
  resultFinal = `${resultFinal}`;
  agua += resultFinal + waterDrink;
  return agua;
}

module.exports = hydrate;
