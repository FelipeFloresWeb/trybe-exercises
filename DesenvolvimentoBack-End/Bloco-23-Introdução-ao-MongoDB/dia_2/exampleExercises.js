/*1.Selecione e faça a contagem dos restaurantes presentes nos bairros
Queens , Staten Island e Bronx . (utilizando o atributo borough )*/
db.restaurants.find({ 'borough': { $in: ['Bronx', 'Staten Island', 'Queens']} }).count();

// 2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American . (utilizando o atributo cuisine )
db.restaurants.find({cuisine:{ $ne: 'American' }}).count();

//3. Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 . (utilizando o atributo rating )
db.restaurants.find({ rating :{ $gte: 8 }}).count();

// 4.Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 . (utilizando o atributo rating )

db.restaurants.find({ rating :{ $lt: 4 }}).count();