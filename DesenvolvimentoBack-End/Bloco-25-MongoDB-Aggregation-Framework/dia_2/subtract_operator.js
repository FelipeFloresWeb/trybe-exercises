// Expressão $subtract

// Com a expressão subtract , podemos subtrair dois valores numéricos para retornar a diferença entre eles, ou duas datas para retornar a diferença entre elas em milissegundos. O segundo argumento sempre será subtraído do primeiro .
// Considere os seguintes documentos na coleção sales :

{
  _id: 1,
  item: "abc",
  price: 10,
  fee: 2,
  discount: 5,
  date: ISODate("2014-03-01T08:00:00Z")
},
{
  _id: 2,
  item: "jkl",
  price: 20,
  fee: 1,
  discount: 2,
  date: ISODate("2014-03-01T09:00:00Z")
}

// Em uma única operação no estágio $project , podemos montar uma expressão um pouco mais complexa, utilizando $add para calcular o total e o $subtract para aplicar um desconto no subtotal:

db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: {
        $subtract: [
          { $add: ["$price", "$fee"] },
          "$discount"
        ]
      }
    }
  }
]);

// Observe que um dos argumentos do $subtract é o resultado de uma expressão ( $add ) que soma dois campos da coleção ( price e fee ). O segundo argumento (valor a ser subtraído) recebe o campo $discount . Os seguintes documentos serão retornados:

{ "_id" : 1, "item" : "abc", "total" : 7 }
{ "_id" : 2, "item" : "jkl", "total" : 19 }

// É possível subtrair duas datas também. A operação a seguir utiliza a expressão $subtract para subtrair o valor do campo date da data corrente, utilizando a variável de sistema NOW (disponível a partir da versão 4.2 do MongoDB ) e retorna a diferença em milissegundos:

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$$NOW", "$date"]
      }
    }
  }
]);

// Alternativamente, você pode utilizar a função Date() para obter a data corrente:

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: [new Date(), "$date"]
      }
    }
  }
]);

// Você também pode utilizar milissegundos como argumento da subtração. A operação seguinte subtrai 5 minutos do campo date :

db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$date", 5 * 60 * 1000]
      }
    }
  }
]);

// Para Fixar

// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.


use('storage');
db.products.aggregate([
  {
project: {
      _id: 0,
      name: 1,
      total_profit: {
subtract: [
          "$sale_price",
          { $add: ["$taxes", "$purchase_price"] }
        ]
      }
    }
  }
]);