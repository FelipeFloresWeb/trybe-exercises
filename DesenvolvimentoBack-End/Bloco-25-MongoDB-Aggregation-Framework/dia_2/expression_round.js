// Expressão $round

// A expressão $round retorna o número inteiro mais próximo do valor atual e também permite definir a quantidade de casas decimais que você quer manter ao arredondar.

// Considere os mesmos documentos da coleção sample utilizados no exemplo anterior. Se você aplicar a expressão $round no estágio $project :

db.samples.aggregate([
  { $project: { value: 1, roundedValue: { $round: ["$value"] } } }
]);

// Terá o retorno do valor original e o calculado:

{ "_id" : 1, "value" : 9.25, "roundedValue" : 9 }
{ "_id" : 2, "value" : 8.73, "roundedValue" : 9 }
{ "_id" : 3, "value" : 4.32, "roundedValue" : 4 }
{ "_id" : 4, "value" : -5.34, "roundedValue" : -5 }

// Observe que para todos os valores, o $round arredondou os valores para o mais próximo, podendo ser maior ou menor. O que interessa aqui é qual o inteiro mais próximo, independente se for maior ou menor que o valor anterior. Essa é uma das diferenças do $round para o $ceil e para o $floor .

// Outra diferença é que para o $round nós passamos uma array como argumento, em vez de um valor plano , isso acontece, para caso, passemos um segundo parâmetro ele vai arredondar mantendo a quantidade de casas decimais que for definida. Vamos ver um exemplo.

db.samples.aggregate([
  { $project: { value: 1, roundedValue: { $round: ["$value", 1] } } }
]);

// Terá o retorno do valor original e o calculado:

{ "_id" : 1, "value" : 9.25, "roundedValue" : 9.2 }
{ "_id" : 2, "value" : 8.73, "roundedValue" : 8.7 }
{ "_id" : 3, "value" : 4.32, "roundedValue" : 4.3 }
{ "_id" : 4, "value" : -5.34, "roundedValue" : -5.3 }

// Perceba que ele arrendodou para o valor em float mais próximo do valor atual, considerando que vai precisar manter uma casa decinmal. É assim que funciona o $round .

// Funções de arredondamento podem ser úteis em vários casos de cálculos na camada de banco de dados.

// Para Fixar

// Utilizando o banco de dados storage , faça os seguintes exercícios:

// Retorne o menor número inteiro relativo ao preço de venda de cada produto;
use('storage');
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      floored_price: { $floor: "$sale_price" }
    }
  }
]);

// Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
use('storage');
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ceiling_price: { $ceil: "$sale_price" }
    }
  }
]);
