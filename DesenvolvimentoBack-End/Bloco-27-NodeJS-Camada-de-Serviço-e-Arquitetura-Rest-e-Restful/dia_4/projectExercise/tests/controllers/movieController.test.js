const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/movieService');
const MovieController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'getAll')
        .resolves([]);
    })

    after(() => {
      MovieService.getAll.restore();
    })

    it('é chamado o método "status" passando 200', async () => {
      await MovieController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MovieController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    })

    after(() => {
      MovieService.getAll.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MovieController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MovieController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'create')
        .resolves(false);
    })

    after(() => {
      MovieService.create.restore();
    })

    it('é chamado o status com o código 400', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'create')
        .resolves(true);
    });

    after(() => {
      MovieService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de findById', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves(null);
    })

    after(() => {
      MovieService.findById.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Filme não encontrado."', async () => {
      await MovieController.findById(request, response);

      expect(response.send.calledWith('Filme não encontrado.')).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MovieService, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    })

    after(() => {
      MovieService.findById.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MovieController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MovieController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});