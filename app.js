const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const path = require('path');
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const dbConnection = mysql.createPool({
  connectionLimit: 10,
  host: 'sql10.freesqldatabase.com',
  user: 'sql10627826',
  password: 'YH6I5nV7ny',
  database: 'sql10627826',
  port: 3306,
});

// Asignar la conexión a la aplicación
app.locals.db = dbConnection;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));
