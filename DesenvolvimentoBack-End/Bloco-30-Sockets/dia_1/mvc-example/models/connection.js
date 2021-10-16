const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: '12345trybe',
  database: 'mvc_example'});

module.exports = connection;