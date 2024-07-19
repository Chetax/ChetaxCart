const express=require('express');
const productroute=require('./route/productroute');
const app=express();
app.use(express.json());


app.use("/api/v1",productroute);

module.exports=app;