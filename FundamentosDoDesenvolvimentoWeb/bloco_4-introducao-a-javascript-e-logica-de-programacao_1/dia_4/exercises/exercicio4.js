// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// Valor esperado no console:
// Copiar
//   Margarida
//   Pato Donald
//   Namorada do personagem principal nos quadrinhos do Pato Donald
//   Sim

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = 'Sim';

for(let index in info) {
  console.log(info[index]);
}