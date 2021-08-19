// Estágio $addFields

// O $addFields é um estágio que adiciona novos campos aos documentos. A saída desse estágio conterá todos os campos existentes nos documentos de entrada e adicionará os novos campos especificados.

// Você pode incluir subdocumentos ou arrays de subdocumentos, utilizando o conceito de dot notation . Um pipeline pode conter mais de um estágio $addFields .


// Considere os documentos abaixo na coleção scores :

{
  _id: 1,
  student: "Maya",
  homework: [10, 5, 10],
  quiz: [10, 8],
  extraCredit: 0
},
{
  _id: 2,
  student: "Ryan",
  homework: [5, 6, 5],
  quiz: [8, 8],
  extraCredit: 8
}

// A operação de agregação abaixo utiliza o $addFields duas vezes para incluir três novos campos nos documentos de saída:

db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);

// O primeiro estágio adiciona o campo totalHomework somando os valores contidos no array homework . Também adiciona outro campo chamado totalQuiz somando os valores do array quiz .

// O segundo estágio adiciona o campo totalScore , que, por sua vez, soma os valores dos campos totalHomework , totalQuiz e extraCredit .

// Note que o resultado mantém os campos originais do documento de entrada, juntamente com os três novos campos adicionados:

{
  "_id" : 1,
  "student" : "Maya",
  "homework" : [ 10, 5, 10 ],
  "quiz" : [ 10, 8 ],
  "extraCredit" : 0,
  "totalHomework" : 25,
  "totalQuiz" : 18,
  "totalScore" : 43
}
{
  "_id" : 2,
  "student" : "Ryan",
  "homework" : [ 5, 6, 5 ],
  "quiz" : [ 8, 8 ],
  "extraCredit" : 8,
  "totalHomework" : 16,
  "totalQuiz" : 16,
  "totalScore" : 40
}

// Para Fixar

// Utilizando o banco de dados storage , faça o seguinte exercício:

// Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

use('storage');
db.products.aggregate([
  {
addFields: {
      stock_total_value: {
multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);
