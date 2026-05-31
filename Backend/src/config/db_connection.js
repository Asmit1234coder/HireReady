const mongose=require("mongoose")


async function dbConnect() {
    try{
        await mongose.connect(process.env.MONGO_URI)
        console.log("db is connected")
    }catch(err){
        console.log(err)
    }

    
}
module.exports=dbConnect