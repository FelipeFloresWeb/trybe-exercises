--Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
--Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY , o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.
--O GROUP BY pode ser construído da seguinte forma:

SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
--Uma das formas como podemos utilizar o GROUP BY é agrupar os registros pelo valor de uma coluna, exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.

SELECT first_name FROM sakila.actor
GROUP BY first_name;

--Tabela sakila.actor
--Se você executar a query anterior no seu banco de dados sakila , verá que são retornados 108 resultados. Porém, se retirar o GROUP BY , como na query abaixo, notará que existem 200 registros na tabela actor , isso acontece, pelo fato de ele agrupar todos os registros que possuem o mesmo first_name , evitando duplicações na hora de retornar os dados.

SELECT first_name FROM sakila.actor;
--Como dito, o GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento.
--Porém é mais comum utilizar o GROUP BY em conjunto com o AVG , MIN , MAX , SUM ou COUNT . Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT() . Assim, teremos uma informação mais fácil de ser compreendida.

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

--Tabela sakila.actor
--Tendo visto isso, agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções de agregação que foram estudadas até aqui, através alguns exemplos feitos com o nosso banco de dados sakila .

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

--Média de duração dos filmes por classificação indicativa

--Valores mínimos de substituição dos filmes por classificação indicativa

--Valores máximos de substituição dos filmes por classificação indicativa

--Soma total do custo de substituição dos filmes por classificação indicativa
--Praticando GROUP BY
--Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
--Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
--Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
--Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
--Assista ao vídeo para ver outros exemplos de utilização do GROUP BY e também como funciona o HAVING:

--Filtrando Resultados do GROUP BY com HAVING
--Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.
--A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING , para que somente os nomes que estão cadastrados duas ou mais vezes sejam exibidos.

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
--É importante entender que quando usamos o HAVING estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.
--Para Fixar
--Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

    SELECT rating, AVG(length) AS 'length'
    FROM sakila.film
    GROUP BY rating
    HAVING length BETWEEN 115.0 AND  121.50
    ORDER BY length DESC;
--Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

    SELECT rating, SUM(replacement_cost) AS 'replacement_cost'
    FROM sakila.film
    GROUP by rating
    HAVING replacement_cost > 3950.50
    ORDER BY replacement_cost;
