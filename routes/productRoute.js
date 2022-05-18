const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router.patch('/update/:id', productController.updateProduct)
router.delete('/delete/:id', productController.deleteProduct)
module.exports = router;