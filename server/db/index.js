const mysql = require('mysql')
const config = require('config')

const conn = mysql.createPool({
  connectionLimit: 10,
  host     : config.get('db.host'),
  user     : config.get('db.user'),
  password : config.get('db.password'),
  database : config.get('db.database')
})

module.exports = conn