// Expressão $divide

// A expressão $divide , como o próprio nome sugere, divide dois valores. O primeiro argumento é o dividendo , e o segundo é o divisor .

// Considere os seguintes documentos na coleção planning :

{ _id: 1, name: "A", hours: 80, resources: 7 },
{ _id: 2, name: "B", hours: 40, resources: 4 }

// A agregação abaixo utiliza o $divide para dividir o valor do campo hours por 8 e calcular o número de dias de trabalho ( workdays ):

db.planning.aggregate([
  {
    $project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);

// Retornando os seguintes documentos:

{ "_id" : 1, "name" : "A", "workdays" : 10 }
{ "_id" : 2, "name" : "B", "workdays" : 5 }

// Para Fixar

// Utilizando o banco de dados storage , faça o seguinte exercício:

// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      new_price: {
subtract: [
          "$sale_price", {
multiply: [{ $divide: [50, 100] }, "$sale_price"
            ]
          }
        ]
      }
    }
  }
]);
