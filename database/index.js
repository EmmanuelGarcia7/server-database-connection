const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'demo_db'
});

connection.connect();

module.exports = connection;