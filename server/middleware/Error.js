 const ErrorHandle=require('../utils/errorHandler');
 module.exports=(err,req,res,next)=>{
err.statusCode=err.statusCode||500;
err.message=err.message||"Internal Server Error";

if(err.name==="CastError"){
  const message=`Resource Not Found. Invalid : ${err.path}`;
  err=new ErrorHandle(message,400);
}

res.status(err.statusCode).json({
  success: false,
  message: err.message,
});
};