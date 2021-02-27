let n = 5;
let symbol = '*';
let imputLine = '';
let spaceCount = 0;
let canImput = Math.round(n / 2);


for (let index = 1; index < n; index += 1) {
  
  for (let index2 = 1; index2 < n; index2 += 1) {

    if(index2 === canImput){
      imputLine += symbol;
    } else {
      imputLine += imputLine;
    }


    console.log(imputLine);
    imputLine = '';
    spaceCount -= 1;
  }
}

// for (let index3 = 1; index3 < n; index23 += 1) {
//   if (index3 < canImput) {
//     imputLine = imputLine + ' ';
//     } else {
//       imputLine = imputLine + symbol;
//     }
//   }