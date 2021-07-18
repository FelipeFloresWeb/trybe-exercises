## Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
DONE

## Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
DONE

## Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;
````
CREATE TABLE `sakila`.`Filmea` (
  `FilmeId` INT NOT NULL,
  `Descricao` VARCHAR(100) NULL,
  `AnoLancamento` INT NOT NULL,
  `Nota` INT NULL,
  PRIMARY KEY (`FilmeId`));
````
DONE

## Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
#### Faz referencia com a tabela country;
DONE

## Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
#### Podem existir muitos CountryId's da tabela city que se referem ao country_id da tabela Country.
DONE

## Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
#### O CountryId da tabela city se refere ao country_id da tabela Country;
#### O country_id não se repete e fazem referencia aos country-id's da tabela city.
DONE

## Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
DONE