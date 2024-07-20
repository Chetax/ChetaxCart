const express=require('express');
const { getAllproducts ,createProduct,updateProduct,deleteProductById, getProductById} = require('../controller/productControl');
const router=express.Router();

router.route('/products').get(getAllproducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').put(updateProduct).delete(deleteProductById).get(getProductById);

module.exports=router;
