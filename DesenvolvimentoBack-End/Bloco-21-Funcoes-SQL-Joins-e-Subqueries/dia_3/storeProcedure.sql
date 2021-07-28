--Montando blocos de código SQL reutilizáveis com stored procedures e stored functions
--Podemos armazenar blocos de códigos (queries) para serem usados posteriormente no MySQL de duas maneiras, são elas:
--Stored procedure;
--Stored function.
--A palavra stored significa armazenado. Como o próprio nome já indica, o código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.
--Dica sobre como nomear suas procedures e functions
--Para tornar a leitura do seu código mais fácil e sua manutenção mais simples, siga o seguinte padrão ao nomear suas procedures e functions:

-- Verbo + Resultado

--ObterTotalDeVendas
--ExibirRankMaximo
--ObterClienteMaisAtivo
--CalcularNivelEngajamento
--MontarNomeCompleto
--Pontos fortes quanto ao uso de Stored Procedures
--Centraliza o código SQL em um servidor de banco de dados, o que possibilita que a manutenção das queries seja feita diretamente no servidor. Assim, mudanças são refletidas imediatamente em aplicações que utilizam o banco de dados sem haver a necessidade de refazer o deploy ;
--Evita a necessidade de reescrever algo específico para cada linguagem, plataforma ou framework;
--Propaga mudanças feitas em uma stored procedure imediatamente para todas as aplicações que a usam, reduzindo a necessidade de refatorar o código em todos os ambientes que utilizam o banco de dados.
--Pontos fracos quanto ao uso de Stored Procedures
--Viola um dos princípios de separation of concerns ou separação de conceitos em português, diz respeito a focar em resolver um único problema na sua regra de negócio, dados e apresentação permitindo então estarem separados e desacoplados, uma vez que stored procedures podem conter regras de negócio e ficam armazenadas no banco de dados;
--Debugar esse código armazenado é mais difícil;
--Não há como versionar o código de uma stored procedure tão facilmente.
--Stored Procedures
--Vamos começar a entender a sintaxe das stored procedures , veja o video do nosso instrutor ou se preferir continue lendo para se aprofundar mais no assunto.

--Agora que você teve o primeiro contato com as stored procedures , vamos continuar a olhar para a estrutura padrão das stored procedures.
--Estrutura padrão de uma stored procedure

USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
--Procedure sem parâmetros:
--Normalmente é utilizada para realizar queries mais simples.
--Exemplo: Aqui estamos apenas executando uma busca na tabela actor e exibindo os resultados.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

--Resultado da procedure ShowAllActors
--Elementos das Stored Procedures
--Verifique os elementos de uma stored procedures no passo a passo a seguir:
--1 - Delimiter
--A palavra-chave DELIMITER é usada para definir qual símbolo representa o final da procedure declarada. Aqui estamos usando $$ , porém é permitido usar outros símbolos como // ou até mesmo ; para retornar ao DELIMITER como padrão default. Atenção, não é permitido usar \ , pois é um caractere especial do MySQL.
--O DELIMITER precisa ser usado para que o MySQL não interprete o primeiro ponto e vírgula encontrado como o final da declaração na sua procedure.
--2 - Variáveis
--O MySQL possui a funcionalidade de criar e usar variáveis, assim como em outras linguagens de programação. Essas variáveis também podem ser usadas em procedures .
--No MySQL existem três principais tipos de variáveis, sendo elas:
--User-defined variables;
--Local Variables;
--Server System Variables.
--Não abordaremos todas elas, mas se quiser aprofundar em alguma delas consulte nossos recursos adicionais.
--A forma mais comum é por meio da User-defined variables que para criar variáveis e atribuir valores a elas, você pode fazer da seguinte maneira:

SET @my_school = 'BeTrybe';
SELECT @my_school;

--Resultado da query `SELECT @my_school`
--3 - Tipos de dados
--Existem vários tipos de dados no MySQL que vão além de apenas numéricos e strings. É relevante que você tenha uma noção básica, sabendo que esses tipos no MySQL são determinados por meio de algumas características:
--Tipo de valor que representa;
--O espaço ocupado e se possui comprimento fixo ou variável;
--Se os valores podem ser indexados ou não;
--Comparação de valores de um tipo de dado específico pelo MySQL .
--Os principais tipos de dados do MySQL são:
--Tipos de String
--VARCHAR : Uma string não binária de comprimento variável;
--CHAR : Uma string não binária (caractere) de comprimento fixo;
--TEXT : Uma pequena string não binária.
--Tipos Numéricos
--TYNINT : Um número inteiro muito pequeno;
--INT : Um inteiro padrão;
--BIGINT : Um grande número inteiro;
--DECIMAL : Um número de ponto fixo.
--Construindo sua primeira stored procedure
--Vamos criar nossas primeiras stored procedures . Temos os seguintes tipos:
--Procedure sem parâmetros;
--Procedure com parâmetros de entrada (IN) ;
--Procedure com parâmetros de saída (OUT) ;
--Procedure com parâmetros de entrada e saída (IN-OUT) .
--Procedure com parâmetros de entrada (IN):
--Para criar procedures com funcionalidades mais elaboradas, podemos passar parâmetros de entrada. Ao definir um parâmetro do tipo IN , podemos usá-lo e modificá-lo dentro da nossa procedure.
--Exemplo: Foi criada uma procedure que recebe como parâmetro uma sílaba (syllable) e busca na tabela actor todos atores quem contêm aquela sílaba no nome.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');

--Resultado da procedure ShowActorsWithSyllable
--Procedure com parâmetros de saida (OUT):
--O parâmetro OUT é útil quando você precisa que algo seja avaliado ou encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.
--Exemplo: Estamos recebendo aqui o título de um filme como valor de entrada e depois buscando dentro da procedure a duração média de um empréstimo daquele filme. Feito isso, ele é inserido em uma variável que pode ser usada posteriormente.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

--Resultado da procedure ShowAverageRentalDurationOfMovie
--Procedure com parâmetros de entrada-saida (IN-OUT):
--O IN-OUT deve ser usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.
--Exemplo: Estamos gerando um novo nome para um filme, usando como base a variável film_name , que deve ser criada e passada como parâmetro para a procedure. O parâmetro sofrerá alterações dentro da procedure, podendo ser usado posteriormente com o novo nome.

USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;

--Resultado da procedure ShowAverageRentalDurationOfMovie
--Após ter visto essas 4 maneiras de como montar uma procedure, você deve ter uma noção melhor de como elas podem te ajudar a agilizar diversos aspectos de suas consultas a um banco de dados.
--Para consolidar esse conhecimento, vamos tentar resolver algumas questões.
--Desafios stored procedure
--Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila .
--Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
--Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
--Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
--Stored Functions
--Na área de programação, temos uma boa prática chamada DRY (Don't Repeat Yourself) que, em resumo, sugere que você não se repita ou reescreva o mesmo código várias vezes.
--Nesse ponto, temos uma das principais ferramentas para combater esse problema no SQL: as stored functions .
--Através delas, podemos encapsular nossas queries usadas mais frequentemente dentro de um bloco de código nomeado e parametrizável.

--Sua primeira stored function
--Stored functions podem ser executadas com o comando SELECT . Ao criá-las, temos que definir o tipo de retorno que sua função possui.
--Tipos de retorno comuns:
--DETERMINISTIC - Sempre retorna o mesmo valor ao receber os mesmos dados de entrada;
--READS SQL DATA - Indica para o MySQL que sua função somente lerá dados.
--Em muitas situações, sua function estará apenas lendo e retornando dados. Nesses casos, a opção READS SQL DATA deve ser usada. No entanto, sempre avalie o tipo mais adequado à sua função.
--Estrutura padrão de uma stored function

USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function(parametro1, parametro2, ..., parametroN)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;
--Exemplo: Uma stored function que exibe a quantidade de filmes em que um determinado ator ou atriz atuou:

USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

--Resultado da stored function MoviesWithActor
--Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);

--Resultado da function GetFullName
--Assim como no caso das fuções de agregação AVG , MIN , MAX e SUM , entre outras, as stored functions são extremamente úteis e devem ser criadas sempre que percebermos que o mesmo tipo de código está sendo repetido em vários lugares diferentes.
--Isso ajuda a reduzir a quantidade de duplicação de código em seu servidor de banco de dados e deixa seu código mais legível e limpo, além de contribuir para uma melhor experiência para outras pessoas desenvolvedoras que possam ter que dar manutenção no seu código.
--Agora você vai desenvolver algumas functions
--Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
--Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
--Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.





--Stored Functions VS Store Procedures

--Functions VS Procedures
--Ou seja:
--Stored Procedures podem ser chamadas através do comando CALL , e o retorno de um valor é opcional;
--Já as Stored Functions são executadas com o comando SELECT e obrigatoriamente retornam algum valor;
--A Stored Functions não pode ser utilizada para alterar o estado global da base dados. (Ex. Por meio das instruções INSERT , UPDATE e DELETE );
--Stored Procedures permite alterar o estado global.
--Stored Procedures permitem realizar o tratamento de excepções, via try/catch .
