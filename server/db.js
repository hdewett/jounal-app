const Pool = require("pg").Pool;
const dotenv = require('dotenv');
dotenv.config({ path: './.env.development' });
const dbparams = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT
}
const pool = new Pool(
 dbparams
 );
 console.log(dbparams)
pool.connect().then(() => {
console.log("db connected")
}).catch((error) =>{
console.log("db connection error", error)
})

module.exports = pool;