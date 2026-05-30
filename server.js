require("dotenv").config()

const app=require("./src/app")
const dbConnect=require("./src/config/db_connection")
dbConnect()

app.listen(3000,()=>{
    console.log("server is runnng on port 3000")
})
