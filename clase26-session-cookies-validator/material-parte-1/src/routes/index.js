var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const controller = require('../controllers/mainController');

//colocar nuestras validaciones

const validations = [
    check('name')
    .notEmpty().withMessage('Debes completar el nombre')
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    check('color')
    .notEmpty().withMessage('Debes seleccionar un color'),
    check('edad')
    .notEmpty().withMessage('Debes completar la edad').bail()
]

router.get('/',controller.index);

//pasar las validaciones como middleware de ruta
router.post('/', validations ,controller.store);
 
router.get('/color',controller.color)
router.get('/olvidar', controller.olvidar)

module.exports = router;
