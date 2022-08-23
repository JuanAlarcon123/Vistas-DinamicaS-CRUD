// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //recibe los datos del formulario
router.post('/store', productsController.store); // este los procesa


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productsController.update); // el PUT actualiza la informacion del Get


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 
 

module.exports = router;
