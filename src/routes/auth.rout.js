const express=require("express")
const authController=require("../controllers/auth.controller")

const authRouter=express.Router()

/*POST /api/auth/register*/
authRouter.post("/register",authController.registerUserController)

/*POST /api/auth/login */
authRouter.post("/login",authController.Login)


/*GET /api/auth/logout
logout user by clearing tokens*/
authRouter.get("/logout",authController.Logout)

module.exports=authRouter