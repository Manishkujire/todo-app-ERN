const {createPool} = require("mysql");
const pool=createPool({
  host:'localhost',
  user:'root',
  password:'',
  connectionLimit:10,
  database:'todo'
})


module.exports.pool= pool;