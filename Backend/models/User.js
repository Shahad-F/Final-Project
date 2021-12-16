const mongoose = require('mongoose');

const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({


    firstName:{
        type:String,
        required:[true,'firstName should be provided']
    },
    lastName:{
        type:String,
        required:[true,'lasttName should be provided']
    },
    phone:{
        type:Number,
        required:[true,'phone should be provided']
    },
    email:{
        type:String, 
        required:[true,'Admin email should be provided'],
        unique:true
    },
    image:{
        type:String,
        required:[true,'image should be provided']},
    city:{
        type:String,
        required:[true,'city should be provided'],
    },
    roles:{
        type:String,
        enum : ['user','Admin','provider']
        ,default:'user'
        
    }

})

UserSchema.plugin(passportLocalMongoose,{
    usernameField:'email'
})

module.exports = mongoose.model('User',UserSchema)
