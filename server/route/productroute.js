const express=require('express');
const { getAllproducts ,createProduct,updateProduct} = require('../controller/productControl');
const router=express.Router();

router.route('/products').get(getAllproducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').put(updateProduct);

module.exports=router;
