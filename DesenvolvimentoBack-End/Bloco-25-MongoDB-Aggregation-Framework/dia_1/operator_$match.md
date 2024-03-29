# Operador $match

## O estágio representado pelo operador $match filtra os documentos da mesma maneira que os filtros no método find({ $match }).

# Operador $match

## É recomendado sempre priorizar o $match o mais "cedo" possível no pipeline . Isso melhora muito a performance, uma vez que o $match limita o número de documentos passados para o próximo estágio. E se o $match for utilizado bem no começo do pipeline , a query tem a vantagem da utilização de índices.

## Veja esses documentos na coleção articles :

````
db.articles.insertMany([
{ _id: ObjectId("512bc95fe835e68f199c8686"), author: "dave", score: 80, views: 100 },
{ _id: ObjectId("512bc962e835e68f199c8687"), author: "dave", score: 85, views: 521 },
{ _id: ObjectId("55f5a192d4bede9ac365b257"), author: "ahn", score: 60, views: 1000 },
{ _id: ObjectId("55f5a192d4bede9ac365b258"), author: "li", score: 55, views: 5000 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b259"), author: "annT", score: 60, views: 50 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b25a"), author: "li", score: 94, views: 999 },
{ _id: ObjectId("55f5a1d3d4bede9ac365b25b"), author: "ty", score: 95, views: 1000 }
])
````

## Exemplo 1: Igualdade simples
## Vamos fazer uma operação utilizando o operador $match com igualdade simples:

````
db.articles.aggregate(
  [{ $match : { author : "dave" } }]
);
````

## A operação citada seleciona todos os documentos em que o campo author seja igual a dave . Note que a sintaxe do filtro é exatamente igual à utilizada como filtro no método find() . A agregação retornará os seguintes documentos:

````
{ _id: ObjectId("512bc95fe835e68f199c8686"), author: "dave", score: 80, views: 100 }
{ _id: ObjectId("512bc962e835e68f199c8687"), author: "dave", score: 85, views: 521 }
````

## Exemplo 2: Igualdade complexa
## É possível, dentro do match , utilizar operadores como or , and , in etc.

db.articles.aggregate(
  [
    {
      $match: {
        $or: [
          { score: { $gt: 70, $lt: 90 } },
          { views: { $gte: 1000 } }
        ]
      }
    }
  ]
);

## Nessa operação de agregação, o primeiro e único estágio seleciona todos os documentos da coleção articles em que o score seja maior que 70 e menor que 90 , ou o campo views seja maior ou igual a 1000 :

````
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b257"), "author" : "ahn", "score" : 60, "views" : 1000 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b258"), "author" : "li", "score" : 55, "views" : 5000 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25b"), "author" : "ty", "score" : 95, "views" : 1000 }
````
