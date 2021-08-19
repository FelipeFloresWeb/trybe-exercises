/* Aplicando condições ao Join com $lookup
Aprendemos a base do operador $lookup no último conteúdo, mas você pode incrementar ainda mais adicionando a ele expressões mais elaboradas e aplicando vários operadores que você já conhece. Também pode referenciar campos dos documentos de entrada para serem utilizados nas condições e até mesmo montar um pipeline dentro dele.
Para isso, existem mais dois parâmetros, ambos opcionais:
let : define as variáveis que serão utilizadas no estágio pipeline dentro do $lookup . É necessário porque o estágio pipeline não consegue acessar diretamente os campos dos documentos de entrada, então esses campos precisam ser definidos previamente e transformados em variáveis;
pipeline : define as condições ou o pipeline que será executado na coleção de junção. Se você quiser todos os documentos da coleção de junção, é só especificá-lo como vazio ( [] ).
Vamos observar na imagem a seguir o fluxo completo do lookup com let e pipeline :
Operador $lookup
Observamos as collections orders e stocks neste fluxo e aplicamos o operador lookup na collection orders com let e pipeline. O nosso from e as , continuam com as mesmas funcionalidades explicadas no dia anterior, ou seja, o from indica qual collection desejamos realizar a integração e o as indica a chave de destino que o resultado da nossa pipeline era ser arquivada.
Agora vamos olhar com mais cuidado as funcionalidades do let e pipeline nas imagens a baixo:
Operador $lookup
Operador $lookup
Nesses dois exemplos anteriores, foi destacado o processo ao aplicarmos o $match em conjunto com os demais operadores $eq e $gte .
O $eq é responsável por verificar quais itens tem os mesmos valores para o que declaramos em $$ordem_item e $stock_item que é o nome da nossa chave proveniente da nossa collection stocks . Passando por este filtro o próximo passo será aplicação do operador $gte para os documentos que foram alinhados. Nos exemplos anteriores simulamos dois itens passando por este processo e nosso exemplo 1 chegou ao fim sem valor em nossa chave stock_data , pois o valor da ordem foi superior ao que tinhamos em estoque.
Agora vamos colocar mão no código e entender ainda mais na prática.
Considere os seguintes documentos na coleção orders : */

use example_db;
db.orders.insertMany([
  { _id: 1, item: "almonds", price: 12, ordered: 2 },
  { _id: 2, item: "pecans", price: 20, ordered: 1 },
  { _id: 3, item: "cookies", price: 10, ordered: 60 }
]);
E os seguintes documentos na coleção warehouses :

use example_db;
db.warehouses.insertMany([
  { _id: 1, stock_item: "almonds", warehouse: "A", instock: 120 },
  { _id: 2, stock_item: "pecans", warehouse: "A", instock: 80 },
  { _id: 3, stock_item: "almonds", warehouse: "B", instock: 60 },
  { _id: 4, stock_item: "cookies", warehouse: "B", instock: 40 },
  { _id: 5, stock_item: "cookies", warehouse: "A", instock: 80 }
]);
// A operação a seguir junta todos os documentos da coleção orders com a coleção warehouse através do campo item se a quantidade em estoque ( instock ) for suficiente para cobrir a quantidade vendida ( ordered ). Os documentos que dão match são colocados no campo stockdata .

db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] }
              ]
            }
          }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);
// Note que, dentro do estágio pipeline , temos um operador $match que utiliza uma expressão ( $expr ). Esta, por sua vez, utiliza o operador $and . Dentro do $and , são utilizados operadores de igualdade ( $eq ) e de comparação ( $gte ). O símbolo $ é utilizado para se referir aos campos da coleção warehouse (a coleção de junção), enquanto $$ se refere às variáveis definidas no estágio let (os campos da coleção orders ). Os campos _id e stock_item da coleção de join ( warehouse ) são excluídos com o uso do operador $project .
// Como resultado, os documentos abaixo serão retornados:

{
  "_id" : 1,
  "item" : "almonds",
  "price" : 12,
  "ordered" : 2,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 120
    },
    {
      "warehouse" : "B",
      "instock" : 60
    }
  ]
}
{
  "_id" : 2,
  "item" : "pecans",
  "price" : 20,
  "ordered" : 1,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 80
    }
  ]
}
{
  "_id" : 3,
  "item" : "cookies",
  "price" : 10,
  "ordered" : 60,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 80
    }
  ]
}
// Em um novo paralelo com a linguagem SQL , teríamos algo como o seguinte:

SELECT * stockdata
FROM orders
WHERE stockdata IN (
  SELECT warehouse, instock
  FROM warehouses
  WHERE stock_item = orders.item
  AND instock >= orders.ordered
);
// Para Fixar
// Utilizando o banco de dados agg_example , adicione a seguinte collection e faça os exercícios:

use agg_example;
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);
// Selecione todos os clientes com as suas respectivas transações feitas;
use('agg_example');
db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
match: {
expr: {
eq: ["$from", "$$user_name"],
            }
          }
        }
      ],
      as: "transactions"
    }
  }
]);

// Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
use('agg_example');
db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
  {
sort: { State: 1 }
  },
  {
limit: 4
  }
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
use('agg_example');
db.clients.aggregate([
  {
match: { State: "Florida" }
  },
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name"},
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
]);

// Antes de avançarmos no conteúdo, crie um banco de dados chamado storage e rode a query abaixo. Ele será necessário para os próximos exercícios de fixação.

db.products.insertMany([
  { "name": "Ball", "purchase_price": 7.6, "taxes": 1.9, "sale_price": 12.5, "quantity": 5 },
  { "name": "Baseball bat", "purchase_price": 18.5, "taxes": 5.3, "sale_price": 39.9, "quantity": 12 },
  { "name": "Sneakers", "purchase_price": 10.4, "taxes": 1.50, "sale_price": 14.9, "quantity": 3 },
  { "name": "Gloves", "purchase_price": 2.85, "taxes": 0.90, "sale_price": 5.70, "quantity": 34 },
  { "name": "Jacket", "purchase_price": 28.9, "taxes": 10.80, "sale_price": 59.9, "quantity": 20 },
  { "name": "Mousepad", "purchase_price": 16.6, "taxes": 3.40, "sale_price": 29.9, "quantity": 8 },
  { "name": "Monitor", "purchase_price": 119.9, "taxes": 39.20, "sale_price": 240.6, "quantity": 11 },
]);
