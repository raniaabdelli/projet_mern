const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String},
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})
const Person=mongoose.model('persons',userSchema)
module.exports=Person