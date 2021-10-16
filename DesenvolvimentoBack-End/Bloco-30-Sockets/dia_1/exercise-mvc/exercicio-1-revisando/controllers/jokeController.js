const jokeModel = require('../model/joke');

const listJokes = async (req, res) => {
  const joke = await jokeModel.getJokes();

  res.status(200).render('jokeView.ejs', { joke });
};

module.exports = {
  listJokes,
};
