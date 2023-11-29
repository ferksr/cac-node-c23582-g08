const express = require('express');
const app = express();
const mainRoutes= require('./src/routes/mainRoutes');
const shopRoutes= require('./src/routes/shopRoutes');
const path = require('path');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.static('public'));
app.set('views');

//app.get('/home', (req, res)=> res.sendFile(__dirname+'/public/index.html'))
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);



app.listen(4000, ()=> console.log("Servidor corriendo en http://localhost:4000"));