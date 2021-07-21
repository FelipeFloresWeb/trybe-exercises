# Operador IN
## Como você viu no início do dia hoje, é possível juntar várias condições nas suas queries usando os operadores AND e OR . No entanto, você ainda terá que digitar cada condição separadamente, como no exemplo a seguir:
````
SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';
````
## Uma forma melhor de fazer essa mesma pesquisa seria usando o IN :
````
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
````
## Você poderia fazer esse mesmo processo para números também:
````
SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);
````

## Então, para que você faça pesquisas utilizando o IN , a sintaxe que deve ser usada é a seguinte:
````
SELECT * FROM banco_de_dados
WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);
````
## ou também
````
SELECT * FROM banco_de_dados
WHERE coluna IN (expressão);
````