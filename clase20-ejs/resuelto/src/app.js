// Módulos
const express = require('express');
const app = express();
var path = require('path');
const indexRouter = require('./routes/indexRouter');

// Configuración
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder ../public
// Acá falta el template engine
app.set('views',path.join(__dirname,'/views'));   
app.set('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', indexRouter);

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})