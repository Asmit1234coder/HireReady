const userModel=require("../models/user.model")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const tokenBlacklistModel=require("../models/blacklist.model")

async function registerUserController(req,res) {
    const{username,email,password}=req.body

    if(!username|| !password|| !email){
        return res.status(400).json({
            message:"Please Fill all Fields!"
        })
    }
    const isUserAlreadyRegistered=await userModel.findOne({
        $or :[{username},{email}]
    })

    if(isUserAlreadyRegistered){
         return res.status(400).json({
            message:"Account already exists with this email or username"

        })
    }
    const hash=await bcrypt.hash(password,10)
    const user=await userModel.create({
        username,
        email,
        password:hash
    })

    const token=jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    res.cookie("token",token)

    res.status(201).json({
        message:"user registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}

async function Login(req,res) {
    const {email,password}=req.body
    const user=await userModel.findOne({email})
    if(!user){
        return res.status(400).json({
        message:"Invalid email or password"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password)
     if(!isPasswordValid){
        return res.status(400).json({
        message:"Invalid email or password"
        })
    }
    const token=jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    res.cookie("token",token)
    res.status(200).json({
        message:"User LoggedIn successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
}

async function Logout(req,res) {
    const token=req.cookies.token
    if(token){
        await tokenBlacklistModel.create({token})
    }
    res.clearCookie("token")
    res.status(200).json({
        message:"user logged out successfully"
    })
    
}

module.exports={
    registerUserController,
    Login,
    Logout
}