# Operador $group

## Este é provavelmente o operador que você mais utilizará nas operações de agregação. Com ele é possível agrupar valores de diversas formas, desde um "distinct" simples até cálculos mais elaborados com a ajuda de outros operadores.

## O principal parâmetro do $group é o _id (que não tem nada a ver com o campo _id das coleções). Neste caso, ele é responsável por conter o campo ou os campos que serão utilizados no agrupamento.

# Operador $group com id específico

## No documento de saída, o _id contém um agrupamento exclusivo para cada valor. Esses documentos de saída também podem conter campos calculados , que conterão valores de alguma expressão de acumulação.

# Operador de Acumulação

## Para fazer operações sobre os campos de documentos agrupados usamos operadores de acumulação.

## A seguir há uma lista com alguns dos mais utilizados:

## $addToSet : retorna um array com os valores únicos da expressão para cada grupo;
## $avg : retorna a média de valores numéricos. Valores não numéricos são ignorados;
## $first : retorna um valor do primeiro documento de cada grupo;
## $last : retorna um valor do último documento de cada grupo;
## $max : retorna o maior valor de cada grupo;
## $sum : retorna a soma de valores numéricos. Valores não numéricos são ignorados.

## Veja alguns exemplos considerando os seguintes documentos na coleção sales :

````
db.sales.insertMany([
{
  _id: 1,
  item: "Código Limpo",
  price: NumberDecimal("10"),
  quantity: NumberInt("2"),
  date: ISODate("2014-03-01T08:00:00Z")
},
{
  _id: 2,
  item: "O Homem e Seus Símbolos",
  price: NumberDecimal("20"),
  quantity: NumberInt("1"),
  date: ISODate("2014-03-01T09:00:00Z")
},
{
  _id: 3,
  item: "Comunicação Não-Violenta",
  price: NumberDecimal("5"),
  quantity: NumberInt( "10"),
  date: ISODate("2014-03-15T09:00:00Z")
},
{
  _id: 4,
  item: "Comunicação Não-Violenta",
  price: NumberDecimal("5"),
  quantity:  NumberInt("20"),
  date: ISODate("2014-04-04T11:21:39.736Z")
},
{
  _id: 5,
  item: "Código Limpo",
  price: NumberDecimal("10"),
  quantity: NumberInt("10"),
  date: ISODate("2014-04-04T21:23:13.331Z")
},
{
  _id: 6,
  item:"A Coragem de Ser Imperfeito",
  price: NumberDecimal("7.5"),
  quantity: NumberInt("5" ),
  date: ISODate("2015-06-04T05:08:13Z")
},
{
  _id: 7,
  item: "A Coragem de Ser Imperfeito",
  price: NumberDecimal("7.5"),
  quantity: NumberInt("10"),
  date: ISODate("2015-09-10T08:43:00Z")
},
{
  _id: 8,
  item: "Código Limpo",
  price: NumberDecimal("10"),
  quantity: NumberInt("5" ),
  date: ISODate("2016-02-06T20:20:13Z")
}
])
````

## Exemplo 1: Contando o número de documentos
## Você pode utilizar o operador $group para contar o número de documentos da coleção sales :

````
db.sales.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);
````

## Note que o _id está setado como null , porque nesse caso queremos todos os documentos. O retorno dessa operação é:

````
{ "_id" : null, "count" : 8 }
````

## Você também poderia utilizar o método count() para realizar essa operação:

````
db.sales.count();
````

## O equivalente em SQL para essa operação seria:

````
SELECT COUNT(*) AS count FROM sales;
````

## Exemplo 2: Retornando valores distintos
## O operador $group também pode ser utilizado para encontrar os valores distintos de um campo. Por exemplo, se quiser saber todos os valores únicos do campo item e quantos são, faça como o exemplo seguinte:

````
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);
````

## Note que o campo deve ser precedido de $ . O resultado da operação é:

````
{ "_id" : "A Coragem de Ser Imperfeito", "count" : 2 }
{ "_id" : "O Homem e Seus Símbolos", "count" : 1 }
{ "_id" : "Código Limpo", "count" : 3 }
{ "_id" : "Comunicação Não-Violenta", "count" : 2 }
````

## Exemplo 3: Somando valores

## Para saber o valor das vendas, você deve utilizar o operador $sum , que, por sua vez, aceita mais modificadores. No exemplo que se segue, multiplica-se o valor do campo price pelo valor do campo quantity :

````
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);
````

## Retornando os seguintes documentos:

````
{ "_id" : "A Coragem de Ser Imperfeito", "totalSaleAmount" : NumberDecimal("112.5") }
{ "_id" : "O Homem e Seus Símbolos", "totalSaleAmount" : NumberDecimal("20") }
{ "_id" : "Código Limpo", "totalSaleAmount" : NumberDecimal("170") }
{ "_id" : "Comunicação Não-Violenta", "totalSaleAmount" : NumberDecimal("150") }
````

## O equivalente em SQL seria:

````
SELECT item, SUM(price * quantity) AS totalSaleAmount
FROM sales
GROUP BY item;
````

## Exemplo 4: Having (do Mysql), combinando estágios no aggregate
## Também é possível realizar operações equivalentes ao HAVING do SQL , que nada mais é que um filtro depois de um agrupamento. Por exemplo, se você quiser manter o agrupamento anterior, mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline :

````
db.sales.aggregate([
  // Primeiro Estágio
  {
    $group: {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  }
]);
````

## Trazendo apenas os seguintes documentos:

````
{ "_id" : "A Coragem de Ser Imperfeito", "totalSaleAmount" : NumberDecimal("112.5") }
{ "_id" : "Código Limpo", "totalSaleAmount" : NumberDecimal("170") }
{ "_id" : "Comunicação Não-Violenta", "totalSaleAmount" : NumberDecimal("150") }
````

## Em SQL , seria algo como:

````
SELECT item, SUM(price * quantity) AS totalSaleAmount
FROM sales
GROUP BY item
HAVING totalSaleAmount >= 100;
````

## Exemplo 5: Agrupando por null
## Você pode executar operações matemáticas em todos os documentos de uma coleção. Basta passar null no _id e seguir com os operadores de acumulação.

## No exemplo a seguir, a operação de agregação retornará um documento com o valor total da venda, a quantidade média de itens vendidos e o total de vendas:

````
db.sales.aggregate([
  {
    $group : {
      _id : null,
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);
````

## O retorno então será:

````
{
  "_id" : null,
  "totalSaleAmount" : NumberDecimal("452.5"),
  "averageQuantity" : 7.875,
  "count" : 8
}
````

## E seu equivalente em SQL :

````
SELECT SUM(price * quantity) AS totalSaleAmount,
       AVG(quantity)         AS averageQuantity,
       COUNT(*)              AS count
FROM sales;
````
