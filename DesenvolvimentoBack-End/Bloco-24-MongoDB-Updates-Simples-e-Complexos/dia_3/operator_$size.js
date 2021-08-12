db.products.find(
  { tags: { $size: 2 } }
);

/*
É importante saber que o operador $size aceita apenas valores númericos, não sendo possível, por exemplo, trazer arrays com comprimento maior do que 2 ($gt: 2). Se você precisar selecionar documentos com base em valores diferentes, a solução é criar um campo que se incremente quando elementos forem adicionados ao array .
*/