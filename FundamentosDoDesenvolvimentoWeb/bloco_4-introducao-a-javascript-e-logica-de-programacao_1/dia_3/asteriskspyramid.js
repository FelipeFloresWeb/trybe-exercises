let n = 5;
let symbol = '*';
let imputLine = '';
let spaceCount = 0;
let canImput = Math.round(n / 2);


for (let index = 1; index <= n; index += 1) {
  
  for (let index2 = 0; index2 < 5; index2 += 1) {
    if(index >= canImput) {
      imputLine += symbol;
    } else {
      imputLine = imputLine + ' ';
    }
    
  }

  console.log(imputLine);
  imputLine = '';
  symbol += '**';

}

// for (let index3 = 1; index3 < n; index23 += 1) {
//   if (index3 < canImput) {
//     imputLine = imputLine + ' ';
//     } else {
//       imputLine = imputLine + symbol;
//     }
//   }