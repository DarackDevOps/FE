const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;
const app = express();

const routes = require('./routes');
const resolver = require('./graphql/resolvers');

const { GraphQLServer } = require('graphql-yoga');

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

app.use('/', routes);

const options = {
  port: 8000,
  endpoint: '/graphql',
};

const server = new GraphQLServer({
  typeDefs: './servers/graphql/schema.graphql',
  resolvers: resolver,
});

server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`),
);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
