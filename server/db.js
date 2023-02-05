const Pool = require("pg").Pool;

const pool = new Pool({
  user: "development",
  password: "",
  database: "journal",
  host: "localhost",
  port: 5432
});

module.exports = pool;