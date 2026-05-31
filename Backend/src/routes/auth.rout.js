const express=require("express")
const authController=require("../controllers/auth.controller")
const authMiddleware=require("../middleware/auth.middleware")

const authRouter=express.Router()

/*POST /api/auth/register*/
authRouter.post("/register",authController.registerUserController)

/*POST /api/auth/login */
authRouter.post("/login",authController.Login)


/*GET /api/auth/logout
logout user by clearing tokens*/
authRouter.get("/logout",authController.Logout)

/*GET /aoi/auth/get-me 
info of current logged in user*/
authRouter.get("/get-me",authMiddleware.authUser,authController.getMe)

module.exports=authRouter