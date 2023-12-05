const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'sql10.freesqldatabase.com',
    user:'sql10627826',
    password: 'YH6I5nV7ny',
    database: 'sql10627826',
    port: 3306,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0,
});

module.exports = {
    conn: pool.promise()
};