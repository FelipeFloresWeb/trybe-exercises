let salarioBruto = 3000;
let aliquota;

if (salarioBruto < 1556.94) {
  aliquota = salarioBruto * 0.08
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquota = salarioBruto * 0.09
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquota = salarioBruto * 0.11
} else {
  aliquota = 570.88
}

let salarioBase = salarioBruto - aliquota;

if (salarioBase <= 1903.98) {
  impostoRenda = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  impostoRenda = 0.075 * salarioBase - 142.8
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  impostoRenda = 0.15 * salarioBase - 354.8
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  impostoRenda = 0.225 * salarioBase - 636.13
} else {
  impostoRenda = 0.275 * salarioBase - 869.36
}

let salarioLiquido = salarioBase - impostoRenda;

console.log(aliquota);
console.log(impostoRenda);
console.log(salarioLiquido);