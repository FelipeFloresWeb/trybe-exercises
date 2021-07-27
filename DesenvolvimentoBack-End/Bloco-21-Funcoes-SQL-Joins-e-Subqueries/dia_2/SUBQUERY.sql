--Como utilizar uma SUBQUERY
--Uma SUBQUERY é uma query aninhada que é avaliada dentro de um par de parênteses. Ela pode conter expressões simples, como adições e subtrações, mas não se limita a isso, uma vez que podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma SUBQUERY .
--Algo a se lembrar é que a subquery não é a única maneira de encontrar resultados de tabelas relacionadas. Quando se trata de SQL, os JOINs podem ser usados para encontrar os mesmos resultados.
--É recomendado tomar a decisão sobre qual opção utilizar (subquery ou JOIN ) baseando-se na performance da sua query.
--Diferentes maneiras de utilizar uma SUBQUERY
--Usando uma SUBQUERY como fonte de dados para o FROM .

SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;
    
--Resultado da subquery usada no `FROM`

--Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY .

SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;



  

    
--Resultado da subquery como uma coluna do `SELECT`

  


--Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY .

SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);



  

    
--Resultado da subquery com o `WHERE`

  


--Usando uma tabela externa, de fora da SUBQUERY , dentro dela.

SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

--Resultado da subquery usando tabela externa
--SUBQUERY ou JOIN
--Talvez você esteja se perguntando se seria possível resolver as queries anteriores através de um JOIN . De fato, podemos, como é exemplificado a seguir.
--Usando SUBQUERY

SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;
--Usando INNER JOIN

SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;
--Sabendo disso, como decidir entre as duas abordagens? Decida qual usar através de testes de performance e, em seguida, por afinidade.
--Uma maneira simples de mensurar a performance e decidir sobre qual abordagem utilizar (Execution Plan)
--Diferente da maioria dos problemas que as pessoas desenvolvedoras resolvem, é possível decidir por queries melhores que outras por meio da medição do seu custo de execução. Existem diversas maneiras para mensurar a performance e otimizar queries no MySQL Server.
--A otimização envolve configurar, ajustar e medir o desempenho em vários níveis:
--Escalar o banco de dados de forma vertical, ou seja, instanciar mais CPU e memória para o processo do Banco de dados.
--Escalar o banco de dados de forma horizontal, ou seja, instanciar mais máquinas e balancear a carga entre as diferentes instâncias.
--Escrever o código SQL de forma que aproveite melhor os recursos do SGBD;
--Nesta aula, iremos abordar apenas uma delas: o execution plan , um recurso que nos permite metrificar e comparar quais queries tem performance melhor para gerar um determinado resultado.
--Ele mensura o custo de uma query e exibe o tipo de scan (motor de busca) efetuado em cada tabela incluída na query e seu custo total. O mysql possui 2 opções de scan: table scan e index scan .
--O table scan é utilizado quando você realiza uma query inespecífica e precisa buscar todos os dados da tabela. Como, por exemplo, a query abaixo.

SELECT * FROM table
--O table scan não utiliza um mecanismo de busca por índice, e precisa percorrer todos os registros da tabela para recuperar os resultados desejados, como seria pequisar dados em um livro sem índice, que você precisa ler todo o livro para encontrar a informação desejada.
--O index scan é utilizado quando você realiza uma query específca com WHERE , em que a coluna utilizada tenha um índice clusterizado . Isso significa que, quando você adiciona uma coluna que possui uma chave primária na criação da tabela, o SQL automaticamente cria um index clusterizado nesta coluna, como um índice que contém os capítulos de um livro, que pode ser utilizado para otimizar uma busca. Assim o index scan realiza uma busca mais rápida que o table scan e possui uma performance melhor em tabelas com muitas linhas.

SELECT * FROM table
WHERE alguma_condição
--Se achar que sua consulta está lenta, você deve verificar o execution plan para confirmar se está usando index scan ou table scan . Em seguida, você pode otimizar sua consulta ajustando sua query.
--Seu uso na prática pode ser visto da seguinte forma:
--Tomando como exemplo as duas últimas queries desta página, crie dois novos arquivos SQL no seu MySQl Workbench. Em um deles, cole a query em que utilizamos a solução usada como SUBQUERY e, no outro, a que se utilizou como INNER JOIN .
--Em seguida, execute uma das queries e depois clique em Execution Plan , como na imagem abaixo, e observe o valor de "Query Cost". Quanto menor o valor, em comparação com outra versão da query, melhor a performance. Assim você pode simplesmente escolher a query que tem o menor custo.

--Como acessar o execution plan
--Execute os comandos acima e verifique o custo de cada query. Ficou claro que, nesse caso específico, a SUBQUERY tem uma performance melhor que o JOIN , em razão de ter o custo de query mais baixo