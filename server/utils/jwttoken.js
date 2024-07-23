const sendtoken=function(user,statuscode,res){
    const token=user.getJWTToken();
    const options={
       expires:new Date(
        Date.now()+process.env.COOKIE_EXP*24*60*60*1000
       ),
       httpOnly:true,
    }
    res.status(statuscode).cookie("token",token,options).json({
        sucess:true,
        user,
        token,
    });
};
module.exports=sendtoken;