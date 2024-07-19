const Product=require('../Models/productsmodel');


//Create Prdouct 

exports.createProduct=async (req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        sucess :true,
        product
    })
}

//Update product 

exports.updateProduct=async (req,res,next)=>{
      let product=await Product.findById(req.params.id);
     if(!product){return res.status(500).json({success :false,massage:"Product Not Found"})}
    
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json({sucess:true,
        massage:"Update Product",
        product
    })
}

exports.getAllproducts= async (req,res)=>{
   const products=await Product.find();
   res.status(201).json({sucess:true,products})

}