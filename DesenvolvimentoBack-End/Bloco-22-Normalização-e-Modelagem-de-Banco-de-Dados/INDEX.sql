--Como usar um INDEX
--Quando se fala em otimização de queries, o termo índice (ou INDEX ) pode vir a ser mencionado como solução para problemas de performance. Mas o que são índices, e quando se deve usá-los?
--Hora de conferir no vídeo a seguir:

--No vídeo acima você viu que há algumas opções diferentes quanto ao uso de índices. É possível conferir um resumo dessas opções logo abaixo:

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;
--Entenda o impacto do INDEX
--Para entender o impacto de um INDEX , hora de comparar o antes e o depois da adição de um INDEX à coluna first_name da tabela sakila.actor e verificar seu impacto no custo de uma query.
Execute o comando abaixo para criar um índice na coluna first_name dentro da tabela actor .

CREATE INDEX index_first_name ON sakila.actor(first_name);
Execute a query abaixo e verique seu custo através do execution plan.

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

--Custo da query `SELECT * FROM sakila.actor WHERE first_name = 'RITA'` com índice
--Agora, exclua o índice para fazer a comparação:

DROP INDEX index_first_name ON sakila.actor;
--Veja o custo da mesma query, quando executada sem um índice na coluna first_name :

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

--Custo da query `SELECT * FROM sakila.actor WHERE first_name = 'RITA'` sem índice
--Como se vê, neste caso o índice possui uma melhor performance.
--Entenda o impacto do FULLTEXT INDEX
--Hora de fazer outro exemplo para analisar o impacto que um FULLTEXT INDEX , em conjunto com uma full-text search, , possui na performance de uma query. Para esse exemplo será alterada a coluna address da tabela sakila.address . Veja a criação do índice logo abaixo:

CREATE FULLTEXT INDEX index_address ON sakila.address(address);
--Para verificar a diferença na performance, deve-se utilizar os comandos MATCH e AGAINST , conforme foi visto anteriormente no texto sobre full-text search. . Execute a query abaixo e verifique seu custo através do execution plan:

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

--Custo da query `SELECT * FROM sakila.address WHERE MATCH(address) AGAINST('drive')` com índice em `address`
--Agora, exclua o índice para fazer a comparação:

DROP INDEX index_address ON sakila.address;
--Veja o custo da query, quando executada sem um índice na coluna address :

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

--Custo da query `SELECT * FROM sakila.address WHERE address LIKE '%drive%'` sem índice
--Novamente, houve uma melhoria na performance.
--Entenda o impacto do UNIQUE INDEX
--A Sintaxe para criar um UNIQUE INDEX é a seguinte:

CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);
--Para dropar (excluir), pode-se usar:

DROP INDEX nome_do_indice ON nome_tabela;
--O UNIQUE INDEX é utilizado em uma coluna para, principalmente, prevenir a duplicação de dados em uma tabela e, secundariamente, melhorar a performance de busca.
--Colunas que fazem uso dessa restrição podem receber valores nulos . É importante lembrar também que a restrição PRIMARY KEY , quando aplicada a uma coluna, insere por padrão as restrições UNIQUE INDEX + NOT NULL naquela coluna.
--Logo, pode-se entender que a PRIMARY KEY também é um UNIQUE INDEX que não permite valores nulos .
--Isso pode ser confirmado usando o comando SHOW INDEX , que lista os detalhes sobre um índice em uma tabela. Veja abaixo um exemplo de uso do comando.

SHOW INDEX FROM sakila.actor;

--Coluna `actor_id`, que possui um `UNIQUE INDEX`
--Como se pode ver acima, embora nenhum índice tenha sido criado ainda, todas as colunas do banco de dados que usam a restrição PRIMARY KEY possuem internamente um UNIQUE INDEX . Isso pode ser confirmado na coluna actor_id pelo Non_Unique = 0 , que quer dizer que a coluna possui um índice único.
--Um exemplo de uso do UNIQUE INDEX
--Hora de verificar a performance de uma query antes de inserir um UNIQUE INDEX na coluna name da tabela language .

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

--Resultado da busca COM uso do `UNIQUE INDEX`

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';

--Resultado da busca SEM uso do `UNIQUE INDEX`
--Aqui, mais uma vez, teve-se uma melhoria na performance.
--Quando não utilizar índices
--Mesmo notando que os resultados foram favoráveis para o uso de índices nesses exemplos, é importante ressaltar que eles nem sempre devem ser utilizados. Abaixo, segue uma lista das situações em que o uso de índices deve ser evitado:
--Em tabelas pequenas, pois a diferença de performance será mínima, se houver;
--Em colunas que retornarão uma grande quantidade dados quando filtradas. Por exemplo, você não adicionaria os artigos "o" e "a" ao índice de um livro;
--Em tabelas que frequentemente têm atualizações em grande escala, uma vez que a performance dessas atualizações será afetada;
--Em colunas que são frequentemente manipuladas, haja vista que a manutenção do índice dessa coluna pode demandar muito tempo quando feita em excesso;
--Em colunas que possuem muitos valores nulos.
