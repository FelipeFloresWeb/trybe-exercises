# Operador $limit
## O operador $limit limita o número de documentos que será passado para o próximo estágio do pipeline. Ele sempre recebe um valor do tipo inteiro e positivo.
## Limitar o número de documentos numa operação de agregação na coleção articles é bem simples:
````
db.articles.aggregate(
  [
    { $limit : 5 }
  ]
);
````

## Essa operação retorna apenas 5 documentos.