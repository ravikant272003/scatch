const mongoose=require('mongoose')
const dbgr=require('debug')("development:mongoose")
const config=require('config')

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("connected to db")
})
.catch(function(err){
    dbgr(err)
})

module.exports=mongoose.connection