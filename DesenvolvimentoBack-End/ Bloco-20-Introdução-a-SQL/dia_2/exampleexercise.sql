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


