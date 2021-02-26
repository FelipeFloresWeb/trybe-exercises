let arrayExample = [];
let arrayDivBy2 = [];

for (let index = 1; index <= 25; index += 1) {
  arrayExample.push(index);
}

for (let index2 = 0; index2 < arrayExample.length; index2 += 1) {
  let divBy2 = arrayExample[index2] * 0.5;
  arrayDivBy2.push(divBy2);
}

console.log(arrayDivBy2);