const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'postgres', // nombre del servicio en docker-compose
  database: 'postgres',
  password: 'example',
  port: 5432,
});

module.exports = pool;
