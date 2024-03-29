/* Passando valores entre middlwares com objeto req
Middlewares também podem modificar o objeto req , e essas modificações serão recebidas pelos próximos middlewares, caso next seja chamado. Isso geralmente é utilizado para propagar informações de um middleware para o outro.
Por exemplo, vamos considerar que agora além de um único usuário válido para o nome de um restaurante temos vários usuários válidos, e ao cadastrar e editar queremos passar o objeto do usuário encontrado para os middlewares do CRUD terem acesso a esse usuário válido. */

/* auth-middleware.js */
const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  if (!(username == validUser.username  && password == validUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username == validUser.username  && password == validUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser;

  next();
};

module.exports = authMiddleware;

/* Vamos mudar na definição do nosso método de cadastrar uma receita para que ele tenha acesso ao objeto user que foi anexado ao objeto req para poder salvar o respectivo username desse usuário como um atributo do receita. */

// ...
app.use(authMiddleware);

// ...

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...
/* Observe que tivemos acesso ao objeto req.user que veio do nosso middleware authMiddleware . Dessa forma aproveitando o encadeamento entre middlewares conseguimos passar informações entre middleware sempre que for necessário. O objeto req praticamente aceita qualquer atributo que você quiser definir, só é preciso tomar cuidado para não sobrescrever nenhum dos atributos padrão (req.body, req.headers, req.params, req.query, etc).
Pacotes que são middlewares
Existem alguns pacotes que nos fornecem ferramentas necessárias para o desenvolvimento de nossas aplicações. Um exemplo disso é o módulo body-parser, que utilizamos ontem. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o conteúdo do corpo lá. Para utilizá-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo com npm i body-parser e registrá-lo na nossa aplicação:
A função json() utilizada na linha app.use(bodyParser.json()); diz ao body-parser que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos nossa API script acima e fizermos uma requisição do tipo POST conseguimos ter acesso aos valores enviados no body da requisição. Porém se tirarmos o uso deste middleware, você irá perceber que as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.
ℹ️ Faça o teste ℹ️ : Copie o script abaixo, cole-o em um arquivo chamado server.js e execute-o com o comando node server.js . Em seguida, abra o Postman ou o Insomnia e realize a request  */POST localhost:3000/hello , passando o JSON { "name": "<seu nome aqui">" } .

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` });
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });

/* Experimente comentar a linha 5 do script, executar novamente o arquivo e realizar uma nova request para o endpoint POST /hello e perceba que, sem o body-parser , req.body é undefined.
Outro middleware bem comum de utilizarmos nas nossas aplicações back-end é o cors , que permite que nossa API receba requisições de outras aplicações, como por exemplo, uma aplicação front-end que consuma nossa API. O uso básico desse módulo é instalá-lo usando npm i cors e adicionando as seguintes linha no nosso código. */

const cors = require('cors');

app.use(cors());

/* Agora, qualquer requisição que você fizer de outra aplicação vai responder, pois temos o middleware cors . Caso não o tivéssemos, o navegador bloquearia as requests do nosso front-end para nossa API. O cors tem um conjunto de configurações que permitem criar regras específicas, de quem e como as requisições podem ser feitas. Por enquanto, não precisamos nos preocupar com isso já que estamos desenvolvendo aplicações apenas em ambiente de desenvolvimento. Porém é importante ter cuidado com essa configuração ao subir uma aplicação para ambiente de produção.
Para aprofundar-se mais em middlewares, assista a este vídeo. */