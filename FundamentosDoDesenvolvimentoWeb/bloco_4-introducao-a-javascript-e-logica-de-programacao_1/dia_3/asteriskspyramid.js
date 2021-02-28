// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let n = 5;
let symbol = '*';
let imputLine = '';
let canImput = Math.round(n / 2);

for (let index = 1; index <= n; index += 1) {
  
  for (let index2 = 1; index2 <= n; index2 += 1) {
    
    if(index2 == canImput) {
      imputLine += symbol;
      canImput -= 2;
      symbol += '**';
      if(canImput < 1) {
        canImput == 1;
      }
    } else if(index2 != canImput) {
      imputLine += ' ';
    }
    
  }

  if (index % 2 != 0) {
    console.log(imputLine);
    imputLine = '';
  } else {
    imputLine = '';
  }
  
}