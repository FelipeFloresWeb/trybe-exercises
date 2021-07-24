--Manipulação de strings
--Uma das responsabilidades das pessoas que lidam com o registro de informações em um banco de dados é se certificar de que esses dados estão coerentes, normalizados e cadastrados no formato correto. O MySQL possui algumas funções de manipulação de string que facilitam essas tarefas.
--As principais podem ser vistas a seguir:

-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6);

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 12, 3);

-- Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);

--Algo importante a se notar sobre strings em SQL é que, diferente de várias linguagens de programação, no SQL strings são indexadas a partir do índice 1 e não no índice 0. Caso tenha resultados inesperados, essa pode ser uma das razões.
--Observe que, apesar de ter usado strings temporárias nos exemplos acima, também é possível fazer essas operações diretamente nas colunas de uma tabela.
--Para testar, execute o código abaixo no seu ambiente local, brinque com as linhas a seguir e depois volte aqui.

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;