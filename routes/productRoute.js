const express = require('express');

const { addProduct,listProducts,removeProduct,singleProduct } = require('../controller/productController');

const productRouter = express.Router();

productRouter.post('/add',addProduct);

productRouter.post('/remove',removeProduct); 

productRouter.post('/single',singleProduct);

productRouter.get('/list',listProducts);

module.exports = productRouter;