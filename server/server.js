const app=require('./app')
const dotenv=require('dotenv');
const connnectDb=require("./DB");

// config
dotenv.config();
// connecting to db
connnectDb();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server tarted At PORT ${process.env.PORT}`)
})



// unhadlles Promie Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`);
    console.log(`Shuting down the server due to Unhandles Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    })
})