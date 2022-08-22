// ************ Require's ************
const express = require('express');/* requiero Express */
const router = express.Router(); // llamo a ejecucion de Router Express
  
// ************ Controller Require ************
const {index, search} = require('../controllers/mainController');
router.get('/',index); 
router.get('/search',search); /* por lo general un seach esta relacionada con un formulario que esta en el head, lo cual hiria por GET */

module.exports = router;
