const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"], 
        trim: true,
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Decription"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price Can not Exced 8 Number"]
    },
    rating:{
        type:Number,
        default:0,
    },
    images:[{
        public_id:{
           type:String,
           required:true,
        },
        url:{
           type:String,
           required:true,
        }
   }],
    category:{
      type:String,
      required:[true ,"Please Enter Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock Cannot Excedd Length 4"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
    
});


module.exports=mongoose.model("Product",productSchema);