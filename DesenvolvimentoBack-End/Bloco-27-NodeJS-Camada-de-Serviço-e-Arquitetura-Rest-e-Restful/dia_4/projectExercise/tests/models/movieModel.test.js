const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MovieModel = require('../../models/movieModel');

const DBServer = new MongoMemoryServer();
let connectionMock;

const ID_EXAMPLE = '604cb554311d68f491ba5781';
const payloadMovie = {
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

before(async () => {
  const URLMock = await DBServer.getUri();
  connectionMock = await MongoClient.connect(URLMock,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  sinon.stub(MongoClient, 'connect')
    .resolves(connectionMock);
});

after(async () => {
  await connectionMock.close();
  MongoClient.connect.restore();
  await DBServer.stop();
});


describe('Insere um novo filme no BD', () => {
  describe('quando é inserido com sucesso', async () => {
    it('retorna um objeto', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Busca apenas um filme no BD através do ID', () => {
  describe('quando não existe um filme para o ID informado', () => {
    it('retorna "null"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme para o ID informado', () => {

    before(async () => {
      const moviesCollection = await connectionMock.db('model_example').collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    it('retorna um objeto', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});