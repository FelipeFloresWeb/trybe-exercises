/* Estabelecendo uma conexão com o banco

Com o banco criado e populado, vamos criar nosso projeto Node.js.
Comece criando uma nova pasta para conter o projeto. Dê o nome que você quiser a ela, mas aqui vamos chamá-la de model-example : */

$ mkdir model-example
$ cd model-example
// Agora, iniciamos um novo projeto Node.js, passando a flag -y para pular as perguntas e gerar um projeto com as opções padrão:

$ npm init -y
// Para que possamos dar continuidade, precisamos antes de mais nada, criar um servidor utilizando a biblioteca express , ela vai nos fornecer o que precisamos para rodar um servidor, criar rotas e utilizar nossa conexão com o banco. Instale o express rodando o comando abaixo:

$ npm install express
// Agora, na raiz do projeto, crie um arquivo chamado index.js e preencha-o com o código abaixo:

// index.js

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

/* Em index.js , importamos o express e iniciamos uma nova aplicação. Porém, para que possamos nos comunicar com o MySQL, precisamos de um driver . Um driver é um software que permite que você se comunique com o banco de dados a partir de uma aplicação. Qual driver usar depende tanto da linguagem quanto do banco de dados que você está utilizando. Aqui na Trybe, você vai utilizar o drive chamado mysql2 . Instale-o executando o comando abaixo: */

$ npm install mysql2

/* Agora, na raiz do projeto crie uma pasta models e, dentro dela, crie um arquivo connection.js e preencha-o com o código abaixo. Lembre-se de substituir os campos user e password pelo usuário e senha que você utiliza para acessar o banco: */

// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha123',
    database: 'model_example' });

module.exports = connection;

/* Primeiro, importamos o mysql do módulo mysql2/promise , assim utilizamos a versão mais atualizada do mysql2 em vez de usar a versão com callbacks.
O método createPool cria uma pool de conexões com o banco de dados. Isso significa que a própria biblioteca irá gerenciar as múltiplas conexões que fizermos com o banco. O createPool recebe um objeto com as credenciais necessárias para estabelecer a conexão. Entre as opções possíveis, estão:
host : local onde o servidor do MySQL está armazenado. Como estamos executando localmente, usamos localhost ;
user : usuário que vamos utilizar para acessar o banco. Estamos usando o usuário root nesse exemplo;
password : senha do usuário especificado. Coloque '' se não houver senha para o usuário;
database : nome do banco ao qual queremos nos conectar;
O método createPool retorna um objeto Pool representando uma sessão com o banco.
Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, armazenamos nossa pool na variável connection .
Criando o model
Agora, podemos de fato começar a escrever nossa aplicação. A primeira coisa que faremos é criar uma rota que retornará uma lista com os nomes de todos os autores. Queremos também que seja exibido o nome completo do escritor, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome .
O model deverá expor alguma interface que seja capaz de buscar essa lista do banco de dados e retorná-la. Ele deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados. Ele também fará o mapeamento dos dados para um formato que seja mais adequado para o domínio da aplicação. Esse mapeamento pode envolver conversão de dados, renomear campos, esconder ou criar novos campos derivados dos dados existentes, por exemplo.
A camada de modelo pode ser implementada de várias formas. Aqui, vamos seguir esta abordagem:
Haverá uma entidade chamada Author na aplicação;
A entidade vai conter os campos firstName , middleName e lastName . Note que os nomes estão em camelCase , enquanto as colunas do banco estão em snake_case ;
No código, um objeto contendo os campos mencionados acima será utilizado para representar um autor.
Existirão funções para ler e criar escritores do banco de dados;
A rota só irá interagir com os dados através da interface do model Author .
Dando continuidade à nossa aplicação, crie o arquivo Author.js , dentro da pasta models . Adicione o código abaixo ao arquivo criado: */

// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
};
};

// Converte o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
    getAll,
};

/* O model Author exporta uma função getAll . Essa função retornará todos os escritores cadastrados no banco de dados. Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.
No exemplo, desconstruímos essa resposta utilizando [Authors] que chega para nós da seguinte forma: */

[
{
    id: 1,
    first_name: 'George',
    middle_name: 'R. R.',
    last_name: 'Martin'
},
{
    id: 2,
    first_name: 'J.',
    middle_name: 'R. R.',
    last_name: 'Tolkien'
},
{
    id: 3,
    first_name: 'Isaac',
    middle_name: null,
    last_name: 'Asimov'
},
{
    id: 4,
    first_name: 'Frank',
    middle_name: null,
    last_name: 'Herbert'
},
{
    id: 5,
    first_name: 'Júlio',
    middle_name: null,
    last_name: 'Verne'
}
]
Repare que função getAll faz o mapeamento dos dados do banco para a aplicação, convertendo os nomes de snake_case para camelCase , utilizando a função serialize . Note também o uso da função getNewAuthor , que formata os dados para que seja exibido o nome completo do autor em uma única string.
Com o model criado devemos então criar a rota que o utilizará. Adicione ao conteúdo do index.js o seguinte:

// index.js

// const express = require('express');

const Author = require('./models/Author');

// const app = express();

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });
A essa aplicação, adicionamos uma nova rota GET /authors . Então fazemos como já havíamos aprendido anteriormente, passamos uma função que acessa os parâmetros req e res , que chama a função getAll do nosso model , aguarda sua execução e então retorna um JSON com os dados enviados pelo banco.
Vamos praticar
Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo

CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(90) NOT NULL,
    author_id INT(11) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
    ('A Game of Thrones', 1),
    ('A Clash of Kings', 1),
    ('A Storm of Swords', 1),
    ('The Lord of The Rings - The Fellowship of the Ring', 2),
    ('The Lord of The Rings - The Two Towers', 2),
    ('The Lord of The Rings - The Return of The King', 2),
    ('Foundation', 3);
Depois de criar a tabela no banco de dados, faça as seguintes implementações.
Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
Crie uma rota /books para trazer a lista de todos os livros.
Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.
Buscando pelos detalhes de um escritor
Veja o vídeo a seguir ou leia o conteúdo para aprender a implementar uma busca por id.

Agora vamos criar um método e um endpoint para obter os detalhes de um escritor. A rota do endpoint é /authors/:id , onde id corresponde ao id do escritor.
Na model Authors crie o seguinte método.

// models/Authors.js
// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;
//
// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');
//
// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/

const findById = async (id) => {
// Repare que substituímos o id por `?` na query.
// Depois, ao executá-la, informamos um array com o id para o método `execute`.
// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
const [ authorData ] = await connection.execute(query, [id]);

if (authorData.length === 0) return null;

// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
const { firstName, middleName, lastName } = serialize(authorData[0]);

return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName});
};

// module.exports = {
// getAll,
        findById,
// };

// index.js

// const express = require('express');

// const Author = require('./models/Author');

// const app = express();

// app.get('/authors', async (_req, res) => {
// const authors = await Author.getAll();
//
// res.status(200).json(authors);
// });

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });
/* No index.js , registramos uma nova rota para obter os detalhes de um autor, onde adicionamos uma função para responder a requisições para essa rota. Ela funciona de forma muito semelhante a da rota /authors . A diferença é que ela extrai o parâmetro id da URL e o usa para consultar o model pelo escritor requisitado. Caso o model não encontre um escritor, setamos o código de status para 404 (Not Found) e retornamos um JSON com uma mensagem informando o que ocorreu.
No model, adicionamos o método findById . Esse método é muito semelhante a getAll . A grande diferença é que usamos o where na nossa query para limitar o escopo da busca ao escritor procurado. No entanto, em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática separar os valores da query. Fazemos isso usando ? como parâmetros na string e usando, como segundo argumento, um array que contém os valores que devem substituir todos os ? utilizados, na ordem.
Veja o resultado iniciando o servidor e acessando a rota /authors em seu navegador.
Vamos praticar!
Continuando o exercício anterior faça o seguinte.
Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .
Criando um novo escritor
Veja o vídeo a seguir ou leia o conteúdo para aprender a implementar um cadastro de autor.

Agora vamos incrementar nossa aplicação para permitir a criação de novos escritores.
Primeiro, vamos adicionar dois métodos no nosso model Authors . */

// models/Authors.js

// const connection = require('./connection');

// Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
// const { id, firstName, middleName, lastName } = authorData;

// const fullName = [firstName, middleName, lastName]
//  .filter((name) => name)
//  .join(' ');

// return {
//  id,
//  firstName,
//  middleName,
//  lastName,
//  name: fullName,
// };
// };

// Serializa o nome dos campos de snake_case para camelCase

// const serialize = (authorData) => ({
//  id: authorData.id,
//  firstName: authorData.first_name,
//  middleName: authorData.middle_name,
//  lastName: authorData.last_name,
// });

// Busca todos os autores do banco.

// const getAll = async () => {
//  const [authors] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//  );
//  return authors.map(serialize).map(getNewAuthor);
// };

//
// Busca um autor específico, a partir do seu ID
// @param {String} id ID do autor a ser recuperado
//
// const findById = async (id) => {
// const [
//  authorData,
//  ] = await connection.execute(
//      'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
//      [id],
//  );

// if (authorData.length === 0) return null;

// const { firstName, middleName, lastName } = authorData.map(serialize)[0];

// return getNewAuthor({ id, firstName, middleName, lastName });
// };

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

// module.exports = {
// getAll,
// findById,
        isValid,
        create,
// };
isValid é uma função que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName , caso seja informado, é uma string. create é uma função que recebe firstName, middleName e lastName e salva um autor no banco.
Como agora teremos requisições POST, precisaremos fazer o parsing do corpo da requisição. O middleware body-parser é capaz de fazer isso automaticamente para nós.

$ npm install body-parser

// const express = require('express');
const bodyParser = require('body-parser');

// const Author = require('./models/Author');

// const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (\_req, res) => {
//  const authors = await Author.getAll();
//
//  res.status(200).json(author);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//  console.log(`Ouvindo a porta ${PORT}`);
// });

/* A rota POST /authors extrai as informações do autor que chegam em req.body e verifica se os dados enviados são válidos. Caso não sejam, o endpoint retorna um JSON com uma mensagem informando o que houve, juntamente como o status 400 , que indica uma requisição ruim, no caso com dados inválidos. Caso os dados sejam válidos, pede ao modelo para criar um novo escritor e retorna um JSON com uma mensagem indicando que o autor foi criado com sucesso.
Vamos praticar
Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
Título não pode ser vazio;
Título precisa ter pelo menos três caracteres;
O campo author_id não pode ser vazio;
O campo author_id só é válido se existir um autor com esse id;
Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 . */
