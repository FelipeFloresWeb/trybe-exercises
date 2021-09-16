/* Implementando JWT
Para começar, vamos instalar o pacote jsonwebtoken . Ele é quem será responsável por gerar e validar os tokens para nós:

npm install jsonwebtoken

Agora, vamos editar o arquivo controllers/login.js . Lá, vamos trabalhar na geração do nosso JWT e adicionar os seguintes trechos de código: */

// const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.
   Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela, pois só quem tem acesso
   a ela poderá criar ou alterar tokens JWT. */
const secret = 'seusecretdetoken';

// module.exports = async (req, res) => {
//   try {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!username || !password)
//       return res
//         .status(401)
//         .json({ message: 'É necessário usuário e senha para fazer login' });

//     const user = await User.findUser(username);

//     if (!user || user.password !== password)
//       return res
//         .status(401)
//         .json({ message: 'Usuário não existe ou senha inválida' });

    /* Criamos uma config básica para o nosso JWT, onde:
      expiresIn -> significa o tempo pelo qual esse token será válido;
      algorithm -> algoritmo que você usará para assinar sua mensagem
                  (lembra que falamos do HMAC-SHA256 lá no começo?). */

    /* A propriedade expiresIn aceita o tempo de forma bem descritiva. Por exemplo: '7d' = 7 dias. '8h' = 8 horas. */
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    /*
      Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
      Mensagem essa que contém dados do seu usuário e/ou demais dados que você
      quiser colocar dentro de "data".
      O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlNTQ1OTBiYTQ5NDQ4ZjdlNWZhNzNjMCIsInVzZXJuYW1lIjoiaXRhbHNzb2RqIiwicGFzc3dvcmQiOiJzZW5oYTEyMyIsIl9fdiI6MH0sImlhdCI6MTU4MjU4NzMyNywiZXhwIjoxNTg0Nzc0NzE0OTA4fQ.UdSZi7K105aaVnoKSW-dnw-Kv7H3oKMtE9xv4jwyfSM
      */
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    /* Por fim, nós devolvemos essa informação ao usuário. */
    res.status(200).json({ token });
//   } catch (e) {
//     return res.status(500).json({ message: 'Erro interno', error: e });
//   }
// };

/* Feito isso, nós já podemos nos autenticar de verdade, não é mesmo? Ao fazer uma nova requisição POST para /api/login , passando nome de usuário e senha corretos, obtemos um resultado semelhante ao seguinte: */

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYTIyNTU3ODNkNGJjNjExNzNjZDFlNiIsInVzZXJuYW1lIjoidHVsaW9zdGFybGluZyIsInBhc3N3b3JkIjoiMTIzNDU2IiwiX192IjowfSwiaWF0IjoxNTg3Njg1MTAwLCJleHAiOjE1ODk4Nzc1ODU2MTR9.Y0JzzSuSwrl2OXugqDd0UxY7D0g0HpW3gglSLdop4KU"
}

/* Eis o nosso token! É ele que vamos ficar transitando pra lá e pra cá, então ele precisa ser guardado! Mas caso ele seja perdido, não se preocupe; é só gerar outro token. 🙂
Agora temos que usar esse token de alguma forma, não é mesmo? Para isso, vamos criar uma pasta chamada auth dentro do diretório api ; e, dentro dela, um arquivo chamado validateJWT.js .
Esse arquivo conterá uma função que será usada como middleware para as nossas requisições, validando todas as rotas em que nós solicitarmos autenticação. */

// validateJWT.js
const jwt = require('jsonwebtoken');
const model = require('../../models/user');

/* Mesma chave privada que usamos para criptografar o token.
   Agora, vamos usá-la para descriptografá-lo.
   Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
   e muitos menos de forma duplicada, mas aqui só estamos interessados em
   ilustrar seu uso ;) */
const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  /* Aquele token gerado anteriormente virá na requisição através do
     header Authorization em todas as rotas que queremos que
     sejam autenticadas. */
  const token = req.headers['authorization'];

  /* Caso o token não seja informado, simplesmente retornamos
     o código de status 401 - não autorizado. */
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, segredo);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123'
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */

    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então buscamos o usuário na base para obter seus dados atualizados */
    const user = await model.findUser(decoded.data.username);

    /* Não existe um usuário na nossa base com o id informado no token. */
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    /* O usuário existe! Colocamos ele em um campo no objeto req.
       Dessa forma, o usuário estará disponível para outros middlewares que
       executem em sequência */
    req.user = user;

    /* Por fim, chamamos o próximo middleware que, no nosso caso,
       é a própria callback da rota. */
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
/* No arquivo api/server.js , onde definimos as rotas, usamos esse middleware para adicionar autenticação na nossa rota de listagem de posts. */

// const express = require('express');
// const bodyParser = require('body-parser');
// const routes = require('./routes');

/* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
   const validateJWT = require('./auth/validateJWT');

// const port = process.env.PORT || 8080;

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const apiRoutes = express.Router();

/* E a usamos como middleware na nossa rota, colocando-a antes do nosso controller. */
   apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
// apiRoutes.post('/api/users', routes.createUsers);
// apiRoutes.post('/api/login', routes.login);

// app.use(apiRoutes);

// app.listen(port);
// console.log('conectado na porta ' + port);

/* Note que não queremos autenticar o login e nem criação de usuários, pois precisamos deles para o processo de autenticação! Se houvesse outras rotas protegidas na nossa aplicação, usaríamos o middleware nelas também!
Agora que já estamos logados, vamos requisitar nossos posts!


Você deve estar pensando: ué! Já fizemos o login, então, por que não podemos pegar os posts? Olhe com mais atenção para a resposta da API. Ela está dizendo que o token não foi informado. Nós conseguimos um token através do endpoint de login, mas não fizemos nada com ele. Nesse caso, vamos mandar o token para a API via Headers , que são informações extras que podemos passar em uma requisição.

Adicionamos um header chamado Authorization porque é o que nosso middleware espera. Se não se lembra, dê uma olhada de novo no arquivo /api/auth/validateJWT.js .
Feito isso, é só mandar bala na requisição e ser feliz! */

{
  "mockPosts": [
    {
      "title": "titulo fake",
      "content": "conteudo conteudo conteudo conteudo conteudo "
    },
    {
      "title": "titulo fake",
      "content": "conteudo conteudo conteudo conteudo conteudo "
    },
    {
      "title": "titulo fake",
      "content": "conteudo conteudo conteudo conteudo conteudo "
    },
    {
      "title": "titulo fake",
      "content": "conteudo conteudo conteudo conteudo conteudo "
    }
  ]
}
/* Voltamos a conseguir recuperar nossos posts. Mas, antes de terminarmos, um último comentário sobre nossa API. Você notou que nossos posts são fake e são sempre os mesmos, independente do usuário logado, certo? Numa API real, buscaríamos esses posts de um banco de dados, por exemplo. Mas como faríamos para recuperar apenas os posts do usuário logado?
Lembra-se de que o middleware de autenticação recupera o usuário do banco de dados e o coloca no req ? Esse objeto é o mesmo que é passado para todos os middlewares e para a callback da rota. Como o middleware de autenticação é executado antes das funções dos controllers, req conterá o usuário logado quando o controller em /controllers/posts for executado, e poderíamos utilizá-lo para fazer uma consulta ao banco de dados que trouxesse somente seus posts. Para confirmar isso, basta colocar um console.log dentro do controller: */

module.exports = (req, res, next) => {
  console.log(req.user);
  res.status(200).json({ mockPosts });
};
// Você deverá ver algo assim, no terminal onde executou a API:

/* {
  _id: 5ea2255783d4bc61173cd1e6,
  username: 'italssodj',
  password: 'senha123'
} */