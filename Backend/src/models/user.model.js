const mongose=require("mongoose")

const userSchema=mongose.Schema({
    username:{
        type:String,
        unique:[true,"Username is already taken!"],
        required:true,

    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongose.model("users",userSchema)

module.exports=userModel