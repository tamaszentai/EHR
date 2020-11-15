const {Pool} = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "tamaszentai",
  host: "localhost",
  port: 5432,
  database: "EHR"
})

module.exports = pool;