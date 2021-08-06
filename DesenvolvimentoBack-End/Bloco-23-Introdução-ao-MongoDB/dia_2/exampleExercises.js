/*1.Selecione e faça a contagem dos restaurantes presentes nos bairros
Queens , Staten Island e Bronx . (utilizando o atributo borough )*/
db.restaurants.find({ 'borough': { $in: ['Bronx', 'Staten Island', 'Queens']} }).count();