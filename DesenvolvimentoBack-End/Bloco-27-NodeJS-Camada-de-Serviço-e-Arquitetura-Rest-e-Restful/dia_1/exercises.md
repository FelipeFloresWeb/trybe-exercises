# Agora, a prática

## Você criará uma aplicação que faz CRUD ( C reate, R ead, U pdate e D elete) de usuários. A entidade que representa um usuário se chamará user .

## Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MongoDB .

## Com isso em mente, prossiga para a realização dos exercícios:

## Crie o endpoint POST /user

## Seu endpoint deve receber o seguinte conteúdo no body da request:

    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }

## Todos os campos são obrigatórios;

## O campo password deve ser uma string de 6 ou mais caracteres;

## Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }

## Caso o usuário seja criado com sucesso, retorne os campos id (e não _id ), firstName , lastName e email em JSON, no formato abaixo, com o status 201 Created

    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }

## O campo _id deve ser renomeado para id , pois a nomenclatura _id trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.

## Crie o endpoint GET /user

## O endpoint sempre deve retornar um array;

## Quando não houver nenhum usuário cadastrado, retorne um array vazio;

## Deve sempre retornar o status 200 OK .

## Crie o endpoint GET /user/:id

## O endpoint deve retornar o usuário cujo id seja igual ao parâmetro id informado na URL. O status deve ser 200 OK .

## Caso um usuário com o id informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status 404 Not Found .

    {
        "error": true,
        "message": "Usuário não encontrado"
    }

## Crie o endpoint PUT /user/:id

## O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:

    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
## Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
## Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo id foi especificado na URL.
## Depois de alterar os dados do usuário no banco, retorne os novos dados com o status 200 OK , no seguinte formato:

    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
## Caso o usuário em questão não exista, retorne o status 404 Not Found e os seguintes dados em JSON no corpo da resposta:

    {
        "error": true,
        "message": "Usuário não encontrado"
    }
