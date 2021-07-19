--Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:
--Escreva uma query que selecione todas as colunas da tabela city ;

use sakila;
SELECT * from city; 

--Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;

use sakila;
SELECT first_name, last_name from customer; 

--Escreva uma query que exiba todas as colunas da tabela rental ;

use sakila;
SELECT * from rental; 

--Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;

USE sakila;
SELECT title, description, release_year FROM film; 
--Utilize o SELECT para explorar todas as tabelas do banco de dados.







-- Dados repetidos? Aqui Não! Como usar o DISTINCT
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
--Feito isso, você terá acesso à tabela Alunos do banco de dados Escola . Levando em conta a explicação que você acabou de ver, como você montaria uma query para encontrar os seguintes dados?

--Monte uma query para encontrar pares únicos de nomes e idades .
USE Escola;
SELECT distinct Nome, Idade FROM Alunos;

--Quantas linhas você encontraria na query anterior?
--5

--Monte uma query para encontrar somente os nomes únicos.
USE Escola;
SELECT distinct Nome FROM Alunos;

--Quantas linhas você encontraria na query anterior?
--4

--Monte uma query para encontrar somente as idades únicas.
USE Escola;
SELECT distinct Idade FROM Alunos;

--Quantas linhas você encontraria na query anterior?
--4




--Contando resultados com o COUNT
--SELECT COUNT(DISTINCT first_name) FROM sakila.actor
--WHERE first_name = 'felipe';


--Essa é a tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões?
--Quantas senhas temos cadastradas nessa tabela?

USE sakila;
SELECT COUNT(password) FROM staff;

--Quantas pessoas temos no total trabalhando para nossa empresa?
USE sakila;
SELECT COUNT(active) FROM staff;

--Quantos emails temos cadastrados nessa tabela?
USE sakila;
SELECT COUNT(email) FROM staff;






--Pesquisas gigantes? LIMIT isso ae!
--Se você abrir agora o nosso banco de dados de prática sakila e executar a query a seguir, verá que o resultado é 16044, ou seja, existem 16044 linhas na tabela rental .

SELECT COUNT(*) FROM sakila.rental;

--Uma curiosidade é que, usando o MySQL Workbench , caso você faça uma consulta que inclui todas as linhas da tabela e rolar a listagem até o fim, verá que o resultado da consulta são 16044 linhas (desde que o Workbench não limite os resultados da sua consulta, como você verá na próxima seção).

SELECT * FROM sakila.rental;

--Isso não é sempre necessário e pode até ser um problema em bancos de dados gigantes, em que as tabelas podem conter milhares ou milhões de linhas. Resolver isso é bem simples: tudo que você precisa fazer é limitar o resultado usando o LIMIT :

--# Query + LIMIT quantidade_de_resultados
SELECT * FROM sakila.rental LIMIT 10;
