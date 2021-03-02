// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
// Valor esperado no console:
// Copiar
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem2: "Tio Patinhas",
  origem2: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota2: "O último MacPatinhas",
}

info.recorrente = 'Sim';
info2.recorrente2 = 'Sim';

for(let index in info in info2) {
  console.log(info[index] + ' e ' + info2[index]);
}