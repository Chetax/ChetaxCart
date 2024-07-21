const express=require('express');
const productroute=require('./route/productroute');
const userroute=require('./route/userRoute');
const ErrorHandler=require('./middleware/Error')
const app=express();
app.use(express.json());
app.use("/api/v1",productroute);
app.use("/api/v1",userroute);
// Middle 
app.use(ErrorHandler);

module.exports=app;