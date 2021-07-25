--O que é SELF JOIN e quando utilizá-lo
--Há certos cenários nos quais faz sentido pesquisar e tirar alguma conclusão analisando apenas uma única tabela. Os tipos de JOIN que você viu até agora precisam necessariamente que mais de uma tabela seja incluída em uma query para que um resultado possa ser gerado. O SELF JOIN não possui esse requisito. Vamos ver a seguir algumas das aplicações do SELF JOIN .

--Como foi visto no vídeo acima, podemos fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN . Lembre-se dessa opção sempre que a informação que você precisa filtrar ou comparar para encontrar algo estiver em uma única tabela.
--Note que um SELF JOIN não é um tipo diferente de JOIN . É apenas um caso em que uma tabela faz join consigo mesma. Você pode utilzar qualquer dos tipos de JOIN vistos ao realizar um SELF JOIN .
--Como visto no vídeo, utilizando o schema sakila como exemplo, se quisermos buscar o título e o custo de substitução ( replacement_cost ) dos filmes que possuem a mesma duração, podemos montar a seguinte query usando SELF JOIN :

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;
--Para fixar esses conceitos, tente encontrar as seguintes informações:
--Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
--Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
--Lembre-se de usar o SELF JOIN em situações em que as informações que estiver buscando estejam armazenadas em apenas uma tabela.
--A seguir, veremos como é possível combinar os resultados de uma query com outra por meio do UNION .
