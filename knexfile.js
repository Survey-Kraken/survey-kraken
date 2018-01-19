module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/survey-kraken'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};
