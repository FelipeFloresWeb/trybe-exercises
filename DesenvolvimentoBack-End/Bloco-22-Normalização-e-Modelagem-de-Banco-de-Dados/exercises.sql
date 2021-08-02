--Desafios sobre VIEW
--Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
USE sakila;
CREATE VIEW film_with_categories AS (
  SELECT f.title as film, fc.category_id, c.name FROM sakila.film AS f
  JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
  JOIN sakila.category AS c ON fc.category_id = c.category_id
  ORDER BY 1
);

--Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
USE sakila;
CREATE VIEW film_info AS (
  SELECT
  a.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) as `actor`,
  f.title
  FROM sakila.film AS f
  JOIN sakila.film_actor AS fa ON f.film_id = fa.film_id
  JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
  ORDER BY 2
);

--Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
USE sakila;
CREATE VIEW address_info AS (
  SELECT
  a.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) as `actor`,
  f.title
  FROM sakila.film AS f
  JOIN sakila.film_actor AS fa ON f.film_id = fa.film_id
  JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
  ORDER BY 2
);

--Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.
USE sakila;
CREATE VIEW movies_languages AS (
SELECT
  f.title,
  l.language_id,
  l.name
FROM
  sakila.film AS f
INNER JOIN
  sakila.language AS l ON f.language_id = l.language_id
);

--Desafios sobre INDEX
--Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila), adicionando-o na coluna name. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
USE sakila;
CREATE FULLTEXT INDEX categoryIndex ON sakila.category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');


-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
--Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

USE sakila;
CREATE FULLTEXT INDEX categoryIndex ON sakila.address(postal_code);

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

SELECT *
FROM sakila.address
WHERE MATCH(postal_code) AGAINST('36693');

--Desafios sobre ALTER TABLE
--Restaure o banco de dados HR abaixo antes de continuar, caso não o tenha restaurado em alguma lição anterior:
--O banco de dados usado como base para os próximos exercícios pode ser restaurado através deste arquivo SQL.
--Baixe o conteúdo do arquivo .sql linkado acima;
--Copie todo o código SQL;
--Abra o MySQL Workbench e abra uma nova janela de query;
--Cole o SQL para dentro dessa janela;
--Selecione todo o código usando CTRL + A;
--Execute-o teclando CTRL + ENTER.
--Desafios:
--Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
--Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
--Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.