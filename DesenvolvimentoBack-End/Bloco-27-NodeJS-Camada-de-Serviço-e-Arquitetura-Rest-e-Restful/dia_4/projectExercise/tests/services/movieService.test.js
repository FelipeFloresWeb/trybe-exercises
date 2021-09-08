const sinon = require('sinon');
const { expect } = require('chai');

const MovieModel = require('../../models/movieModel');
const MovieService = require('../../services/movieService');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem filmes criados', () => {
    before(() => {
      sinon.stub(MovieModel, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MovieModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MovieService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MovieService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MovieModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    })

    after(() => {
      MovieModel.create.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MovieService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Busca um filme através do ID', () => {
  describe('quando não é encontrado um filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves(null);
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna "null"', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.null;
    });
  });

  describe('quando é encontrado o filme para o ID', () => {
    before(() => {
      sinon.stub(MovieModel, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MovieService.findById();

      expect(response).to.be.an('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieService.findById();

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});