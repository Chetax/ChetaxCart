const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxLength:[30,"Name Can't Excedd 30 Character"],
        minLength:[5,"Name Can't Be Less Than 5"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a Valid Email"]

    },
    password:{
        type:String,
        required:[true,"Please Enter Your Paword"],
        minLength:[8,"Name Can't Be Less Than 5"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
         },
         url:{
            type:String,
            required:true,
         }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
});

userschema.pre("save",async function(next){
    if(!this.isModified("password"))next();
    this.password=await bcrypt.hash(this.password,10)
})

module.exports=mongoose.model("User",userschema);

