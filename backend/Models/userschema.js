const mongoose = require('mongoose')


const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['Admin' , 'Teacher' , 'User'],
        default: "User"
    },

    Profilepicture:{
        type:String
    }


} , {timestamps:true})

module.exports = mongoose.model('user' , userschema)