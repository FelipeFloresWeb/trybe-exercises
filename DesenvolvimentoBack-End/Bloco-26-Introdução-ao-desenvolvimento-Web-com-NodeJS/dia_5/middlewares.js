/* Middlewares
A primeira coisa que você precisa saber sobre middlewares é que, no Express qualquer função passada para uma rota é um middleware , seja de forma direta ou indireta. Como assim?
Para o Express, um middleware é uma função que realiza o tratamento de uma request e que pode encerrar essa request, ou chamar o próximo middleware.
Bom, para te contar um segredo : estamos usando middlewares desde o começo desse conteúdo, mas com outro nome! Até agora, nos referimos aos middlewares como callback ao falar sobre roteamento e definição de endpoints. Acontece que todos os callbacks que mostramos nessas rotas são middlewares.
Na prática, essas funções recebem três parâmetros: req , res e next , exatamente como as funções callback que usamos até agora para registrar rotas. Middlewares podem retornar qualquer coisa , incluindo Promises. O fato é que o Express ignora o retorno dos middlewares, visto que o importante é se aquele middleware chamou ou não um método que encerra a request, ou a função next .
Por exemplo, vamos considerar que temos o seguinte cenário onde na nossa API de CRUD de receitas precisamos validar se o nome não foi enviado vazio ao cadastrar uma nova receita. */

// ...
app.post('/recipes',
  (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' }); // 1

    next(); // 2
  },
  (req, res) => {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price });
    res.status(201).json({ message: 'Recipe created successfully!' });
  });
// ...
/* No exemplo acima, temos uma rota que utiliza dois middlewares, onde:
Fizemos uma validação que retorna uma resposta para requisição caso seja enviada no body da requisição um nome vazio. O middleware retorna uma resposta com status 400 e um json com uma mensagem dizendo que os dados enviados foram inválidos.
Caso não caia no if , este middleware endereça a requisição para o próximo middleware que por sua vez salva o dado em um array e retorna uma mensagem de sucesso dizendo que o produto foi cadastrado.
Uma das vantagens do Express suportar diversos middlewares é que podemos reaproveitar alguns deles para serem utilizados por diversas rotas. No nosso caso essa função que valida se o nome foi enviado poderia ser também aproveitada para a rota PUT /recipes/:id . Para isso vamos tirar a definição dessa função de dentro da rota POST /recipes e aplicá-la para ser usada nas duas rotas. */

// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

  next();
}

app.post('/recipes', validateName, (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.put('/recipes/:id', validateName, (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...
/* Pronto. Agora o middleware que valida se o nome foi enviado foi isolado para uma função e conseguimos aplicá-la nas rotas para cadastrar e editar uma receita.
Para ficar nítido, todo middleware, pode receber o next como um terceiro parâmetro, mas geralmente no caso do último middleware de uma rota, que processa a resposta da requisição caso todos os middlewares anteriores não tenham encerrado o fluxo, não temos necessidade de usar o objeto next por isso podemos simplesmente receber apenas os objetos req e res. */

/* Para Fixar
Crie uma função validatePrice para validar o preço foi enviado. O preço deve ser obrigatório, ser um número e não pode ser menor que 0. Aplique essa função como um middleware nas rotas POST /recipes e PUT /recipes/:id. */

const validatePrice = (price) => {
  if (price < 0) return false;
  return true;
};

app.post('/recipes', validatePrice, (req, res) => {
  const { price } = req.body;
  if (!validatePrice(price)) return res.status(404).json({ message: 'Data Error' });
  return res.status(201).json({ message: 'Price OK!' });
});

app.put('/recipes/:id', validatePrice, (req, res) => {
  const { price } = req.body;
  if (!validatePrice(price)) return res.status(404).json({ message: 'Data Error' });
  return res.status(201).json({ message: 'Price OK!' });
});
