const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
    imsge:String,
    name:String,
    price:String,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String
})

module.exports=mongoose.model('product',productSchema)