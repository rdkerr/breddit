const user = require('./db/config.js').user;
const password = require('./db/config.js').password;

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: user,
      password: password,
      database: 'breddit_test',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user,
      password,
      database: 'breddit',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user,
      password,
      database: 'breddit',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};
