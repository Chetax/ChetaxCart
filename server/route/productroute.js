const express=require('express');
const { getAllproducts ,createProduct} = require('../controller/productControl');
const router=express.Router();

router.route('/products').get(getAllproducts);
router.route('/products/new').post(createProduct);

module.exports=router;
