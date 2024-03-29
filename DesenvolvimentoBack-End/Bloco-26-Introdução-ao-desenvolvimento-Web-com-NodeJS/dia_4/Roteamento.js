/* Roteamento
O aspecto mais básico de uma API HTTP se dá através de suas rotas , também chamadas de endpoints . Uma rota ou endpoint é definida pelo método HTTP e caminho .
Na nossa aplicação de "Hello, world!", por exemplo, registramos uma rota GET /hello . Repare que, se tentarmos utilizar qualquer outro método ou qualquer outro caminho para acessar essa rota, receberemos um erro do Express, juntamente com um status 404 - Not Found .
A forma que o Express trabalha com rotas é a seguinte: ao registrarmos uma rota, estamos dizendo para o Express o que fazer com requisições que contenham aquele método e caminho . Voltando para a nossa cozinha, é como se estivéssemos definindo, no nosso quadro de pedidos, que os pedidos que levam carne devem ser, primeiro, preparados pela pessoa responsável pela chapa, enquanto pedidos que sejam compostos apenas de vegetais (como saladas) devem ser preparados pela pessoa responsável pelo corte de legumes e verduras.
Ou seja, o roteamento consiste em "direcionar" uma requisição para que seja atendida por uma determinada parte do nosso sistema.
No Express, nós registramos uma rota utilizando a assinatura app.METODO(caminho, callback) , onde a função de callback recebe três parâmetros: request , response e next .
request : comumente chamado de req ; contém as informações enviadas pelo cliente ao servidor.
response : geralmente chamado de res ; permite o envio de informações do servidor de volta ao cliente.
next : função que diz para o Express que aquele callback terminou de ser executado, e que ele deve prosseguir para executar o próximo callback para aquela rota. Este parâmetro é opcional e você entenderá melhor o uso do next em breve.
As rotas respondem a requisições que satisfaçam a condição método HTTP + caminho. */

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
    res.send('hello world get');
  })
  .post(function (req, res) {
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});