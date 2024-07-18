const mongoose=require('mongoose');

const connnectDb=()=>{
    mongoose.connect(process.env.DB_URI).then(data=>console.log(`MongoDB connected With Server ${data} `)).catch(err=>console.log(err));
}

module.exports=connnectDb;