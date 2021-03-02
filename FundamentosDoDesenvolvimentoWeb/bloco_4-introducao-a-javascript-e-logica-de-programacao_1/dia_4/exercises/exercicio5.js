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

info.recorrente = 'Sim';

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};

info2.recorrente = 'Sim';

if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
  info.recorrente = 'Ambos '
  info2.recorrente = 'recorrentes'
}

if (info2.personagem === 'Tio Patinhas') {
  info2.personagem = " e Tio Patinhas";
  info2.origem = " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info2.nota = " e O último MacPatinhas";
}

for(let index in info) {
  console.log(info[index] + info2[index]);
}
