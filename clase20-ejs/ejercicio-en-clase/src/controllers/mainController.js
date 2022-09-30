
var path = require('path');

// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    
    index: (req, res) => {
        const nombre = 'Gustavo';
        const array = [1,2,3,4,5,6,7,8,9,10,11];
        res.render('home',{nombre, numeros: array});  
        
    },
}
// Acá exportamos el resultado
module.exports = controller;    