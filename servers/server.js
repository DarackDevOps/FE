const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const dbTest = require('./routes/dbTest');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', index);
app.use('/dbTest', dbTest);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
