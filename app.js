const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes'); 
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static('public'));
app.set('views');

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));