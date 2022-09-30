// Módulos
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
app.use(express.static('public'));

app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})