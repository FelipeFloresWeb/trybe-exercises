--O que é e como lidar com uma VIEW
--Agora que você já sabe como clonar a estrutura de uma tabela, imagine ter que ficar montando a mesma query repetidamente. Deve haver uma maneira mais ágil de fazer isso, não é?
--Claro, pode-se criar uma VIEW .
--O que é uma VIEW ?
--Uma VIEW é nada mais nada menos que uma tabela temporária no seu banco de dados, que pode ser consultada como qualquer outra. Porém, por ser uma tabela temporária, ela é criada a partir de uma query que você definir.
--Uma VIEW te permite:
--Ter uma tabela que pode ser usada em relatórios;
--Ter uma tabela para usar como base para montar novas queries;
--Reduzir a necessidade de recriar queries utilizadas com frequência.
--Anatomia de uma VIEW

-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;
-- Comando para criar a view
CREATE VIEW nome_da_view AS query;
--Um exemplo de uso
--Suponha que a gerência quer ter uma maneira simples para sempre saber quem são os top 10 clientes que mais compram com a empresa. Pode-se criar uma view para resolver isso!

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
--Agora, caso alguém precise ter acesso a essa informação, você pode consultar a tabela temporária ( VIEW ) diretamente, sem a necessidade de montar uma nova query.

SELECT * FROM top_10_customers;

--Resultado de `SELECT * FROM top_10_customers;`
--Para excluir uma VIEW , use o seguinte comando:

DROP VIEW nome_da_view;