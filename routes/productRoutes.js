const express = require('express')
const router = express.Router();

const { getAllProducts, getSingleProduct } = require('../controllers/productController')


router.get('/products', getAllProducts)
router.get('/products/:id', getSingleProduct)

module.exports = router

