const {createPool} = require("mysql");
const pool=createPool({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12649222',
  password: 'VvZsJWFIGh',
  database: 'sql12649222'
})


module.exports.pool= pool;
