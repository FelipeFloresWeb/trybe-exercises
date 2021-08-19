// Expressão $multiply

// A expressão $multiply multiplica dois valores numéricos. Esses valores devem ser passados num array , como nas outras expressões anteriores.

// Vamos considerar os seguintes documentos na coleção sales :

{ _id: 1, item: "abc", price: 10, quantity: 2, date: ISODate("2014-03-01T08:00:00Z") },
{ _id: 2, item: "jkl", price: 20, quantity: 1, date: ISODate("2014-03-01T09:00:00Z") },
{ _id: 3, item: "xyz", price: 5, quantity: 10, date: ISODate("2014-03-15T09:00:00Z") }

// Na agregação a seguir, utilizamos o $multiply no estágio $project para projetar um novo campo chamado total , que conterá o valor da multiplicação entre os campos price e quantity :


db.sales.aggregate([
  {
    $project: {
      date: 1,
      item: 1,
      total: {
        $multiply: ["$price", "$quantity"]
      }
    }
  }
]);

// Retornando o seguinte resultado:

{ "_id" : 1, "item" : "abc", "date" : ISODate("2014-03-01T08:00:00Z"), "total" : 20 }
{ "_id" : 2, "item" : "jkl", "date" : ISODate("2014-03-01T09:00:00Z"), "total" : 20 }
{ "_id" : 3, "item" : "xyz", "date" : ISODate("2014-03-15T09:00:00Z"), "total" : 50 }

// Para Fixar

// Utilizando o banco de dados storage , faça os seguintes exercícios:

// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);

// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
multiply: [
          {
subtract: [
              "$sale_price",
              { $add: ["$taxes", "$purchase_price"] }
            ]
          }, 
          "$quantity"
        ]
      }
    }
  }
]);
