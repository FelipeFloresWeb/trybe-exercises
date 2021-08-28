const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const simpsonsUtils = require('./fs-util');

const app = express();
app.use(bodyParser.json());

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await simpsonsUtils.getSimpsons();

  if (simpsons.map((simpson) => simpson.id.includes(id))) {
    return res.status(409).json({ message: 'id already exists' });
  }

  simpsons.push({ id, name });

  await simpsonsUtils.setSimpsons(simpsons);

  return res.status(204).end();
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  const simpson = simpsons.find(({ id }) => id === req.params.id);

  if (!simpson) return res.status(404).json({ message: 'simpson not found' });

  return res.status(202).json(simpson);
}));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
