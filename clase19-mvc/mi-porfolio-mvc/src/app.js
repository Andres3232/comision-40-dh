const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routers/main');
/* 
*  almacenamos en app la ejecucion de express para tener todos
*  los metodos disponibles en un objeto
*/
app.use(express.static(path.join(__dirname, '../public')));

// ************ Sistema de Ruteo require y use() ************
app.use('/', mainRouter);

// ************ Levantamos el servidor en el puerto 3000 ************
app.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');    
});
