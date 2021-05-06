const pg = require('pg-promise');

const cn = {
  host: 'localhost',
  port: 5432,
  database: process.env.PSQL_DB_NAME,
  password: process.env.PSQL_DB_PASS,
}