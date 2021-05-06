
const pgp = require('pg-promise')();
const cn = {
  host: 'localhost',
  port: 5432,
  database: process.env.PGPDB_NAME,
  user: process.env.PGPDB_USER,
  password: process.env.PGPDB_PASS,
  max: 30
};

const db = pgp(cn);

module.exports = db;