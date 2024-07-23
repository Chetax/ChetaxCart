const User=require('../Models/UserModel');
const catchAsyncError=require('../middleware/catchAsyncError');
const ErrorHandle = require('../utils/errorHandler');
const bcrypt=require('bcryptjs');
const sendtoken = require('../utils/jwttoken');

exports.registerUser=catchAsyncError(async (req,res,next)=>{

    const {name,email,password}=req.body;
    const user=await User.create({name,email,password,
        avatar:{
            public_id:"this is smaple id",
            url:"dumy profile"
        }
    });
       sendtoken(user,201,res);
})

exports.loginUser=catchAsyncError(async (req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password)
        return next(new ErrorHandle("Please Enter Email & password ",404));

    let user=await User.findOne({email}).select('+password');
 
    if(!user)
        return next(new ErrorHandle("Invalid Email Or Password",401));

   let ismatch=await bcrypt.compare(password,user.password)
   console.log(ismatch);
   if(!ismatch)
    return next(new ErrorHandle("Invalid Email Or Password",401));
   
   sendtoken(user,200,res);
}
)