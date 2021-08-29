const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./routers/teamRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);

app.listen(3000, () => console.log('Run server http://localhost:3000'));
