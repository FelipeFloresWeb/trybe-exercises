const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const getByID = async (req, res) => {
  const { id } = req.params;
  const movies = await MovieService
    .getByID(id);

  if (!movies) return res.status(404).json({ mensagem: 'Filme não encontrado.' });

  res.status(200).json(movies);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .send('Dados inválidos');
  }

  res.status(201)
    .send('Filme criado com sucesso!');
};

module.exports = {
  getAll,
  create,
  getByID,
};