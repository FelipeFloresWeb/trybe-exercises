## Operador $project

## O operador $project tem como uma de suas funções passar adiante no pipeline apenas alguns campos dos documentos vindos do estágio anterior, fazendo isso por meio de uma "projeção", como no método find({}, { $project }) . Mas aqui temos uma diferença: esses campos podem ser novos, sendo resultado de um cálculo ou de uma concatenação.

## Assim como numa projeção comum, o único campo que precisa ser negado explicitamente é o _id .

## Se você especificar um campo que não existe, o $project simplesmente ignorará esse campo, sem afetar em nada a projeção.

## Veja alguns exemplos, considerando este documento da coleção books .
````
db.books.insertOne(
  {
    _id: 1,
    title: "A Fundação",
    isbn: "0001122223334",
    author: { last: "Asimov", first: "Isaac" },
    copies: 5
  }
)
````

## Exemplo 1: Incluindo campos específicos

## Para incluir apenas os campos _id , title e author no documento de saída, utilize o operador $project da seguinte maneira:

````
db.books.aggregate(
  [
    {
      $project : {
        title : 1,
        author : 1
      }
    }
  ]
);
````

## Exemplo 2: Excluindo o campo _id

## Como você já viu, o campo _id é padrão e é o único que necessita de uma negação explícita para que não seja incluído no documento de saída:

````
db.books.aggregate([
  {
    $project : {
      _id: 0,
      title : 1,
      author : 1
    }
  }
]);
````

## Exemplo 3: Excluindo outros campos

## Quando você nega um campo específico, todos os outros serão incluídos no documento de saída. O exemplo abaixo exclui do documento de saída apenas o campo copies :

````
db.books.aggregate([
  {
    $project : {
      copies: 0
    }
  }
]);
````

## Exemplo 4: Excluindo campos em subdocumentos
## Para documentos embedados , seguimos os mesmos conceitos de dot notation :

````
db.books.aggregate([
  {
    $project : {
      "author.first": 0,
      copies: 0
    }
  }
]);
````

## Para inclusão de campos embedados , utilize a mesma lógica, apenas substituindo o 0 por 1 .

## Exemplo 5: Incluindo campos calculados

## Podemos usar uma string iniciada com o caractere $ para indicar que queremos projetar um campo, assim: "$nomeDoCampo".

## A operação a seguir adiciona os novos campos isbn , lastname e copiesSold :

````
db.books.aggregate([
  {
    $project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);
````

## Depois disso, o documento terá o seguinte formato:

````
{
  "_id" : 1,
  "title" : "A Fundação",
  "isbn" : {
    "prefix" : "000",
    "group" : "11",
    "publisher" : "2222",
    "title" : "333",
    "checkDigit" : "4"
  },
  "lastName" : "Asimov",
  "copiesSold" : 5
}
````

## Lembre-se: esses novos campos são apenas adicionados para a visualização final, não serão salvos no banco.
