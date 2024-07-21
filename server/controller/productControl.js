const Product=require('../Models/productsmodel');
const catchAsyncError=require('../middleware/catchAsyncError');
const ErrorHandle = require('../utils/errorHandler');

//Create Prdouct 

exports.createProduct=catchAsyncError(async (req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        sucess :true,
        product
    })
});

//Update product 

exports.updateProduct=catchAsyncError(async (req,res,next)=>{
      let product=await Product.findById(req.params.id);
     if(!product)
        return next(new ErrorHandle("Product Not Found",404));
    
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json({sucess:true,
        massage:"Update Product",
        product
    })
})

exports.getAllproducts=catchAsyncError( async (req,res,next)=>{
   const products=await Product.find();
   if(!products)
    return next(new ErrorHandle("Product Not Found",404));
   res.status(201).json({sucess:true,products})

})


exports.getProductById= catchAsyncError(async (req,res,next)=>{
    
        let product=await Product.findById(req.params.id);
        if(!product)
            return next(new ErrorHandle("Product Not Found",404));

          res.status(201).json({sucess :true,message:"Product Found Successfully",product});

});

// to delete the pridcut 

exports.deleteProductById=catchAsyncError(async(req,res,next)=>{

        let product=await Product.findById(req.params.id);
        if(!product)
            return next(new ErrorHandle("Product Not Found",404));

        product=await Product.deleteOne({_id:req.params.id});
          res.status(201).json({sucess :true,message:"Dealete Successfully"});

})