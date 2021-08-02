--DROPando uma tabela
--Para excluir uma tabela existente, você pode utilizar o comando DROP TABLE .

DROP TABLE nome_da_tabela;
--Ponto Importante
--Você não conseguirá dropar (excluir) uma tabela que é referenciada por uma restrição de chave estrangeira. A chave estrangeira ou a tabela que a contém deve ser excluída antes.
--Por exemplo, tente dropar a tabela sakila.language com o comando abaixo:

DROP TABLE sakila.language;
--Ao executar o comando, você verá que ele não funciona, retornando a seguinte mensagem de erro:
--Error Code: 3730. Cannot drop table 'language' referenced by a foreign key constraint 'fk_film_language' on table 'film'
--Isso acontece em função de as informações da tabela language serem utilizadas na tabela film . Caso tente dropar a tabela film , você perceberá que ela também possui restrições. Essas restrições estão relacionadas ao conceito de integridade referencial , que deve ser considerado quando se cria um banco de dados. Elas têm o intuito de evitar que tabelas sejam excluídas acidentalmente.
--Integridade referencial : Propriedade que afirma que todas as referências de chaves estrangeiras devem ser válidas.
--Então, lembre-se: nem todas as tabelas podem (ou devem) ser dropadas diretamente. É necessário avaliar as restrições existentes naquela tabela para entender o que pode ser feito e como deve ser feito, caso precise excluí-la.
