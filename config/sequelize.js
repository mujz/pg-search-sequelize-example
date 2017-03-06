module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'films',
  host: process.env.DB_HOST || 'pg-search-sequelize-example-db',
  port: process.env.DB_PORT || '5432',
  dialect: 'postgres'
};
