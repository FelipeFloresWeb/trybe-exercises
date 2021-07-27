--Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.USE Pixar;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;

--Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
USE Pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;

--Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
USE Pixar;

SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;

--Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Pixar.Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

--Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Pixar.Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

--Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
USE Pixar;

SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            rating > 7.5);

--Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT 
    rating
FROM
    Pixar.BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Pixar.Movies
        WHERE
            year > 2009);

--Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz

SELECT 
    t.name, t.location
FROM
    Pixar.Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies
        WHERE
            Movies.theater_id = t.id);

--Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT 
    t.name, t.location
FROM
    Pixar.Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies
        WHERE
            Movies.theater_id = t.id);

--Bônus
--Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL ) com avaliação maior que 8.

SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Pixar.Movies AS m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;

--Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Pixar.Movies AS t1,
    Pixar.Movies AS t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;

--Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT
    m.title
FROM
    Pixar.Movies AS m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            Pixar.BoxOffice AS b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;

--Usando INNER JOIN

SELECT 
    m.title
FROM
    Pixar.Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales >= 500000000
        AND m.length_minutes > 110;