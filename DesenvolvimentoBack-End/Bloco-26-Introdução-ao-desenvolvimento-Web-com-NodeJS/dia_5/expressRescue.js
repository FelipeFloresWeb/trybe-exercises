/* Pacote express-rescue
O pacote express-rescue está disponível no npm e nos ajuda com a tarefa de garantir que os erros sempre sejam tratados. Para utilizá-lo, primeiro faça a instalação usando o comando npm i express-rescue
Para adicionarmos os express-rescue , basta passarmos o nosso middleware como parâmetro para ele. Ele irá gerar um novo middleware, que devemos passar para o Express. Vamos refatorar o exemplo que fizemos no final da seção anterior para substituirmos o try/catch por rescue , função que exportamos do express-rescue . */

/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);
/* O que o novo middleware faz é simplesmente executar nosso middleware original dentro de um bloco de try ... catch . Caso ocorra qualquer erro no nosso middleware, esse erro é capturado pelo catch e passado para o next , dando início ao fluxo de erro do Express.
Faça os mesmos testes que fizemos no final da seção anterior e vai ver que o fluxo continua acontecendo da mesma forma, quando a excessão é disparada, a diferença é que nosso código ficou mais enxuto.
Através do uso correto de middlewares de erro, é possível centralizar o tratamento de erros da aplicação em partes específicas dela. Isso facilita a construção dos middlewares de rotas, pois você não precisa ficar tratando erros em todos esses middlewares. Se algo der errado em qualquer rota que estiver envelopada pelo express-rescue , esse erro vai ser tratado pelo middleware de erros mais próximo.
Por último, um padrão muito comum é ter um middleware de erro genérico, e outros middlewares que convertem erros para esse formato genérico. Por exemplo: */

//*/ errorMiddleware.js */

module.exports = (err, req, res, next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
}
/* O middleware acima verifica se o erro possui um código e um status HTTP . Caso possua, o código e a mensagem são devolvidas na response. Caso contrário um erro genérico de servidor é utilizado.
*/
// */ index.js */
const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/products/:id', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
  (err, req, res, next) => {
    if (err.code ==- 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);
/* Nesse trecho de código, convertemos um erro de leitura de arquivo para um erro que nosso middleware de erros conhece e sabe formatar. Dessa forma, nos middlewares comuns, precisamos nos preocupar apenas com o caminho feliz ao passo que, nos middlewares de erro, nos preocupamos apenas com o fluxo de erros.
Repare, também, que estamos utilizando um Array para passar mais de um middleware para uma mesma rota. Poderíamos passar cada middleware como um parâmetro, mas um Array deixa mais explícita a intenção de, realmente, utilizarmos vários middlewares numa mesma rota.
 */