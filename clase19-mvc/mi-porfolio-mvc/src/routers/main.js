var express = require('express');
const mainController = require('../controllers/mainController');

/**
 * Para poder modularizar y utilizar el sistema de ruteo
 * con express
 */
var router = express.Router(); 


router.get('/', mainController  .index); /* GET - home page  */
router.get('/about', mainController.about); /* GET - about page  */

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
