const mongoose = require('mongoose');
const {isEmail} = require('validator');


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
        required:[true,' please enter an email '],
        unique:true,
        lowercase: true,
        validate:[isEmail ,'please enter a valid email']
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
        required:[true ,'please enter an password '],
        minlength:[6, 'Minimum password length i 6 characters']
    }

})

UserSchema.plugin(passportLocalMongoose,{
    usernameField:'email'
})

module.exports = mongoose.model('User',UserSchema)
