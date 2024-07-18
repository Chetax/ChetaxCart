const app=require('./app')
const dotenv=require('dotenv');
const connnectDb=require("./DB");

// config
dotenv.config();
// connecting to db
connnectDb();

app.listen(process.env.PORT,()=>{
    console.log(`Server tarted At PORT ${process.env.PORT}`)
})