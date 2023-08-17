const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const teamsRoute = require('./routes/teams');
const matchesRoute = require('./routes/matches');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});

app.use('/teams', teamsRoute);
app.use('/matches', matchesRoute);
