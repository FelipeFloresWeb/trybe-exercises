## O LIKE é usado para buscar por meio de uma sequência específica de caracteres, como no exemplo acima. Além disso, dois "curingas", ou modificadores, são normalmente usados com o LIKE :
% - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres
_ - O underscore (às vezes chamado de underline, no Brasil), que representa um único caractere
Vamos ver abaixo como usá-los (todos podem ser verificados no banco sakila )
````
-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';
````