const mongoose = require('mongoose');

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({


    // firstName:{
    //     type:String,
    //     required:[true,'firstName should be provided']
    // },
    // lastName:{
    //     type:String,
    //     required:[true,'lasttName should be provided']
    // },
    // userName:{
    //     type:String, 
    // },
    // phone:{
    //     type:Number,
    //     required:[true,'phone should be provided']
    // },
    email:{
        type:String, 
        required:[true,'Admin email should be provided'],
        unique:true,
        lowercase: true
    },
    // image:{
    //     type:String,
    // },
    // city:{
    //     type:String,
    //     required:[true,'city should be provided'],
    // },

    // roles:{
    //     type:String,
    //     enum : ['user','Admin','provider']
    //     ,default:'user'
    // },
    password:{
        type:String,
        required:true,
        minlength:6
    }

})

UserSchema.plugin(passportLocalMongoose,{
    usernameField:'email'
})

module.exports = mongoose.model('User',UserSchema)
