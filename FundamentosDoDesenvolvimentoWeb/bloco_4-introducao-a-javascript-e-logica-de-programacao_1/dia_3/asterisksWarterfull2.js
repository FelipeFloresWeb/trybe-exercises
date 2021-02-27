let n = 5;
let symbol = '*';
let imputLine = '';
let spaceCount = n;

for (let index = 0; index < n; index += 1) {
  for (let index2 = 1; index2 <= n; index2 += 1) {
    if (index2 < spaceCount) {
      imputLine = imputLine + ' ';
      } else {
        imputLine = imputLine + symbol;
      }
    }


    console.log(imputLine);
    imputLine = '';
    spaceCount -= 1;
}