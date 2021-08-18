````
db.orders.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
]);
````
## Essa operação possui dois estágios:
### Primeiro Estágio : O estágio $match filtra os documentos pelo campo status , e passam para o próximo estágio somente os documentos que têm status igual a "A" .

### Segundo Estágio : O estágio $group agrupa os documentos pelo campo cust_id para calcular a soma dos valores do campo amount para cada cust_id único.

### Note que a sintaxe é como a de uma query em MQL ( MongoDB Query Language ). O que aparece de novo é justamente o método aggregate . Esse método recebe como primeiro parâmetro um array de documentos, que nada mais são do que os estágios do pipeline . Você pode ter quantos estágios forem necessários dentro do mesmo aggregate .

### Um estágio do pipeline , por mais básico que seja, já consegue fornecer filtros que atuam como queries e podem realizar transformações de documentos que modificam a forma de saída do documento no estágio.

### Outras operações do pipeline fornecem ferramentas para agrupamento e ordenação de documentos por campos específicos, bem como ferramentas para agregar conteúdos de arrays (incluindo arrays de documentos). Os estágios do pipeline podem utilizar operadores para tarefas que calculam médias ou concatenam strings , por exemplo.

### Para melhorar a performance durante os estágios, o aggregation pipeline pode utilizar índices e tem também uma fase interna de otimização.

### Agora que você já tem uma boa ideia do que é o aggregation pipeline , vamos explorar alguns de seus estágios para ver todo o seu poder! 😉
