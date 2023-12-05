const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'sql10.freesqldatabase.com',
  user: 'sql10627826',
  password: 'YH6I5nV7ny',
  database: 'sql10627826',
  port: 3306,
});

module.exports = pool;