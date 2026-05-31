const mongose=require('mongoose')

const blacklistToken=new mongose.Schema({
    token:{
        type:String,
        required:[true,"token is required for blacklisting"]

    }

},{
    timestamps:true
})

const tokenBlacklistModel=mongose.model("blacklistTokens",blacklistToken)

module.exports=tokenBlacklistModel