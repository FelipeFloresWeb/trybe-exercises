--Criando reações dinâmicas com Triggers

--O que são triggers?
--Triggers são blocos de código SQL que são disparados em reação a alguma atividade que ocorre no banco de dados. Eles podem ser disparados em dois momentos distintos, e é possível definir condições para esse disparo.
--Momentos em que um trigger pode ser disparado
--BEFORE : antes que alguma ação seja executada;
--AFTER : após alguma ação já ter sido executada.
--O que pode ativar um Trigger?
--INSERT ;
--UPDATE ;
--DELETE .
--O que pode ser acessado dentro de um trigger?
--O valor OLD de uma coluna: valor presente em uma coluna antes de uma operação;
--O valor NEW de uma coluna: valor presente em uma coluna após uma operação.
--Em quais operações os valores OLD e NEW estão disponíveis?
--Operação	OLD	NEW
INSERT	Não	Sim
UPDATE	Sim	Sim
DELETE	Sim	Não
--Sintaxe

DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER $$ ;
--Exemplos das três operações
--Para os próximos exemplos, considere as seguintes tabelas e banco de dados:

CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;
--Exemplo de trigger para o INSERT :
--Considerando a tabela perfil , hora de montar um Trigger que define a data de inserção e o tipo de operação, quando um novo registro é inserido.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;
--No trigger acima, o valor da coluna ultima_atualizacao está sendo definido para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "INSERT". A palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.
--Para ver o resultado do uso do Trigger na prática, execute o exemplo abaixo:

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;



  

    
--Colunas `ultima_atualizacao` e `acao` preenchidas dinamicamente pelo `Trigger`

  


--Exemplo de trigger para o UPDATE :
--Considerando a tabela perfil , hora de montar um Trigger que define a data de atualização e o tipo de operação, quando algum registro for modificado.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;
--No Trigger acima, o valor da coluna ultima_atualizacao está sendo atualizado para a data atual com o comando NOW() e, na sequência, definindo o valor da coluna acao para "UPDATE". Novamente, a palavra-chave NEW é utilizada para acessar e modificar as propriedades da tabela.
Para ver o resultado do uso do Trigger na prática, execute o exemplo abaixo:

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;
--Exemplo de trigger para o DELETE :
--Considerando a tabela log_perfil , hora de criar um trigger que envia informações para essa tabela quando um registro da tabela perfil é excluído.

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;
--O trigger acima envia informações para a tabela log_perfil , dizendo qual foi o tipo da operação e o horário do ocorrido.
--Pode-se confirmar o seu funcionamento excluindo um registro do banco de dados e depois fazendo uma pesquisa na tabela log_perfil . Veja o exemplo abaixo:

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;

--Colunas `acao` e `data_acao` preenchidas dinamicamente pelo `trigger`
--It's Trigger Time
--Alright, people! Hora de montar uns triggers.
--Considerando as tabelas e os banco de dados abaixo:

CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;
--Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
--Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
--Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
