// DB TEST

// Database connection configuration
const dbConfig = {
  host: 'sql10.freesqldatabase.com',
  user: 'sql10627826',
  password: 'YH6I5nV7ny',
  database: 'sql10627826',
  port: 3306,
};

const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Define a route to fetch table names from the database
app.get('/getData', (req, res) => {
  // Query the database
  pool.query("SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE'", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error retrieving data from the database' });
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Define a route to fetch products from the database
app.get('/getProducts', (req, res) => {
  // Query the database
  pool.query("SELECT * FROM product", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error retrieving data from the database' });
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Serve HTML page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
