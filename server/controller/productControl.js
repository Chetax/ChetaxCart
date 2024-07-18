const Product=require('../Models/productsmodel');


//Create Prdouct 

exports.createProduct=async (req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        sucess :true,
        product
    })
}

exports.getAllproducts=(req,res)=>{
    res.status(200).json({meassage:"Routes is working"})
}