const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const bodyParser = require('body-parser'); 
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views');

// Middleware for parsing the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging all incoming requests
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.path);
  next();
});

// Middleware for method override
app.use(methodOverride('_method'));

// Route handlers
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));