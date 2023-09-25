const {createPool} = require("mysql");
const pool=createPool({
  host:'sql303.infinityfree.com',
  user:'if0_35034260',
  password:'q7MxoZdXgCnL',
  connectionLimit:10,
  database:'todo'
})


module.exports.pool= pool;
