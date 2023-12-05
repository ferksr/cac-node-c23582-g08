// Prueba de DB
// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'sql10.freesqldatabase.com', // Dirección del host de la base de datos
  user: 'sql10627826', // Nombre de usuario para la base de datos
  password: 'YH6I5nV7ny', // Contraseña para la base de datos
  database: 'sql10627826', // Nombre de la base de datos
  port: 3306, // Puerto para la base de datos
};

// Requerir el módulo mysql
const mysql = require('mysql');
// Requerir el módulo express
const express = require('express');
// Requerir el módulo path
const path = require('path');
// Crear una nueva aplicación express
const app = express();
// Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Establecer el motor de vistas a ejs
app.set('view engine', 'ejs');
// Establecer la ruta de las vistas
app.set('views', path.join(__dirname, 'src/views'));

// Crear un pool de conexiones
// ...
app.get('/getTableColumns/:tableName', (req, res) => {
  const tableName = req.params.tableName;
  pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = ?`, [tableName], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error retrieving data from the database' });
    }
    res.json(results);
  });
});
// ...
const pool = mysql.createPool(dbConfig);

// Definir una ruta para obtener los nombres de las tablas de la base de datos
app.get('/getData', (req, res) => {
  // Consultar la base de datos
  pool.query("SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE'", (error, results) => {
    if (error) {
      // Imprimir el error en la consola
      console.error(error);
      // Enviar una respuesta de error
      return res.status(500).json({ error: 'Error retrieving data from the database' });
    }

    // Enviar los resultados como JSON
    res.json(results);
  });
});

// Definir una ruta para obtener productos de la base de datos
app.get('/getProducts', (req, res) => {
  // Consultar la base de datos
  pool.query("SELECT * FROM product", (error, results) => {
    if (error) {
      // Imprimir el error en la consola
      console.error(error);
      // Enviar una respuesta de error
      return res.status(500).json({ error: 'Error retrieving data from the database' });
    }

    // Enviar los resultados como JSON
    res.json(results);
  });
});

// Servir la página HTML
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});