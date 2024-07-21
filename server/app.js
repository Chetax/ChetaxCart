const express=require('express');
const productroute=require('./route/productroute');
const ErrorHandler=require('./middleware/Error')
const app=express();
app.use(express.json());
app.use("/api/v1",productroute);
// Middle 
app.use(ErrorHandler);

module.exports=app;