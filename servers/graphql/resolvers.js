const getPostsNumber = require('./db');

const resolvers = {
  Query: {
    getTotalPosts: getPostsNumber,
  },
};

module.exports = resolvers;
