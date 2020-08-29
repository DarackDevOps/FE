const express = require('express');

const bodyParser = require('body-parser');
const index = require('./routes/index');
const board = require('./routes/boardDb');
const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `http://localhost:3000`);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/api', index);
app.use('/dbTest', board);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
