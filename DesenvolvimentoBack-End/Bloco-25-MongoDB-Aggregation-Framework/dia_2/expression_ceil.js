// Expressão $ceil

// A expressão $ceil basicamente arredonda o número especificado para "cima". Ela executa a função matemática teto que converte um número x no número inteiro mais próximo, que seja maior ou igual a x .

// Considere os seguintes documentos na coleção samples :

{ _id: 1, value: 9.25 },
{ _id: 2, value: 8.73 },
{ _id: 3, value: 4.32 },
{ _id: 4, value: -5.34 }

// A operação a seguir utiliza a expressão $ceil no estágio $project para retornar um novo campo chamado ceilingValue :

db.samples.aggregate([
  { $project: { value: 1, ceilingValue: { $ceil: "$value" } } }
]);

// O valor original também é retornado:

{ "_id" : 1, "value" : 9.25, "ceilingValue" : 10 }
{ "_id" : 2, "value" : 8.73, "ceilingValue" : 9 }
{ "_id" : 3, "value" : 4.32, "ceilingValue" : 5 }
{ "_id" : 4, "value" : -5.34, "ceilingValue" : -5 }