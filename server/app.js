const express=require('express');
const productroute=require('./route/productroute');
const errorMiddleware=require('./utils/errorHandler');
const app=express();
app.use(express.json());
app.use("/api/v1",productroute);
// Middle 
app.use(errorMiddleware);

module.exports=app;