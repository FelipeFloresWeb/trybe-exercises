--Clonar tabelas existentes
--Antes de trabalhar com a alteração ou manipulação de tabelas existentes, existe uma operação que é extremamente útil e simples: clonar tabelas.
--Para clonar uma tabela, é preciso fazer apenas um comando:

-- Sintaxe:
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exemplo:
CREATE TABLE actor_clone LIKE sakila.actor;
--Ao fazer isso, você terá criado uma tabela com a estrutura exatamente igual (chave primária, chave estrangeira, tipos, restrições etc.) usando apenas uma linha de código!
--Pontos de Atenção
--Esse comando não copia os dados, apenas a estrutura;
--Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.

USE nome_do_banco_de_dados;
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;