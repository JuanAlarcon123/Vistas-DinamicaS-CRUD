// ************ Require's ************
const express = require('express');
const router = express.Router();

const {uploadImageProducts} =require('../middelword/upLoadFile')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //recibe los datos del formulario
router.post('/store',uploadImageProducts.single('imagen'),productsController.store); // este los procesa
/* aplico el middelware *//* aplico el middelware */


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id',uploadImageProducts.single('imagen'), productsController.update); // el PUT actualiza la informacion del Get


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 
 

module.exports = router;
