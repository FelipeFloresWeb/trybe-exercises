// Expressão $abs

// A expressão $abs retorna o valor absoluto de um número.

// Essa expressão é muito útil para encontrar a diferença entre dois valores. Veja um exemplo considerando os documentos da coleção ratings :

{ _id: 1, start: 5, end: 8 },
{ _id: 2, start: 4, end: 4 },
{ _id: 3, start: 9, end: 7 },
{ _id: 4, start: 6, end: 7 }

// Aplicando a expressão $abs combinada com a expressão $subtract no estágio $project , podemos retornar a diferença entre os valores dos campos start e end :

db.ratings.aggregate([
  {
    $project: {
      delta: {
        $abs: { $subtract: ["$start", "$end"] }
      }
    }
  }
]);

{ "_id" : 1, "delta" : 3 }
{ "_id" : 2, "delta" : 0 }
{ "_id" : 3, "delta" : 2 }
{ "_id" : 4, "delta" : 1 }

// Para Fixar

// Utilizando o banco de dados storage , faça o seguinte exercício:

// Calcule o valor absoluto do lucro total de cada produto.
use('storage');
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      delta: {
        $abs: {
          $subtract: [
            "$sale_price",
            { $add: ["$taxes", "$purchase_price"] }
          ]
        }
      }
    }
  }
]);
