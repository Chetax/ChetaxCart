const User=require('../Models/userModel');
const catchAsyncError=require('../middleware/catchAsyncError');
const ErrorHandle = require('../utils/errorHandler');

exports.registerUser=catchAsyncError(async (req,res,next)=>{

    const {name,email,password}=req.body;
    const user=await User.create({name,email,password,
        avatar:{
            public_id:"this is smaple id",
            url:"dumy profile"
        }
    });
    res.status(201).json({
        sucess:true,
        user,
    });
})