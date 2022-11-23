const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.list2);
router.get('/genres/detail/:id', genresController.detail);


module.exports = router;