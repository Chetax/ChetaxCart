 const errorHandler=require('../utils/errorHandler');
 module.exports=(err,res,req,next)=>{
err.statusCode=err.statusCode||500;
err.message=err.message||"Internal Server Error";
  res.staus(err.statusCode).json({
    sucess :false,
    error:err   
  });
 }