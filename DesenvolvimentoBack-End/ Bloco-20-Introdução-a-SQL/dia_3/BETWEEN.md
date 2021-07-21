# Operador BETWEEN

## Uma outra opção quando queremos trabalhar com faixas de resultados é o BETWEEN , que torna possível fazer pesquisas dentro de uma faixa inicial e final.
expressão BETWEEN valor1 AND valor2;
-- a expressão é a sua query
-- e valor1 e valor2 delimitam o resultado
Então, quando você faz uma query como essa, você terá o resultado da imagem a seguir:

-- Note que o MySQL inclui o valor inicial e o final nos resultados
````
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
````

# Usando o BETWEEN com strings
Para encontrar uma faixa de valores em que os valores são strings, podemos digitar a palavra por completo para encontrar os valores. Exemplo:
````
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
````

# Usando o BETWEEN com datas
Para usar o BETWEEN com datas, basta que você digite o valor no formato padrão da data, que é YYYY-MM-DD HH:MM:SS , sendo os valores de horas, minutos e segundos opcionais. No exemplo abaixo, estamos filtrando os resultados para exibir o rental_id e rental_date apenas entre o mês 05 e o mês 07:
````
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
````