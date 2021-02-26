/* Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] > numbers[index2]) {
      let position2 = numbers[index];
      let position = numbers[index2]

      numbers[index] = position;
      numbers[index2] = position2;
    }
  }
}

console.log(numbers);