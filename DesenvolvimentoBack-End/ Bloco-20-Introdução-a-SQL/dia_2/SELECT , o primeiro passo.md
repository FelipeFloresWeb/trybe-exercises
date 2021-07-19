Antes da aula a seguir, temos dois conceitos importantes que podem ser utilizados já no início do seu aprendizado de SQL . Esses conceitos são usar o SELECT para gerar valores e usar o AS para dar nomes às suas colunas, como nos exemplos a seguir. Rode cada um deles em uma janela de query para verificar os resultados:
````Language
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
````

Depois de rodar cada um desses comandos, vemos que é possível fazer algumas coisas apenas usando o SELECT , ainda sem alterar o banco de dados.
É possível gerar e calcular valores usando apenas SELECT valor_a_ser_calculado_ou_exibido ;
Perceba que a palavra-chave AS permite que você dê nome às suas colunas para que elas façam mais sentido quando estiver lendo os resultados. Lembre-se de que, caso o nome tenha mais de uma palavra, devemos usar aspas simples para nomear as colunas;
Note que sempre finalizamos uma query usando o ponto e vírgula ( ; );
Observe também que as palavras-chave (reservadas) estão em maiúsculo. Isso é uma convenção para facilitar a leitura da query . É recomendado que faça o mesmo.