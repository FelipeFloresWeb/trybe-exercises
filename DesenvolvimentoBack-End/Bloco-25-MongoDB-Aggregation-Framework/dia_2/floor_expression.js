// Expressão $floor

// Já a expressão $floor retorna o maior número inteiro menor ou igual ao número especificado, ou seja, faz um arredondamento para baixo.
// Considere os mesmos documentos da coleção sample utilizados no exemplo anterior. Se você aplicar a expressão $floor no estágio $project :

db.samples.aggregate([
  { $project: { value: 1, floorValue: { $floor: "$value" } } }
]);

// Terá o retorno do valor original e o calculado:

{ "_id" : 1, "value" : 9.25, "floorValue" : 9 }
{ "_id" : 2, "value" : 8.73, "floorValue" : 8 }
{ "_id" : 3, "value" : 4.32, "floorValue" : 4 }
{ "_id" : 4, "value" : -5.34, "floorValue" : -6 }

// Funções de arredondamento podem ser úteis em vários casos de cálculos na camada de banco de dados.
