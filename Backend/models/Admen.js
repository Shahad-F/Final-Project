const mongoose = require('mongoose');

const Schema = mongoose.Schema 

const passportLocalMongoose = require('passport-local-mongoose');

const AdminSchema = new Schema ({


    name:{
        type:String, 
        required:[true,'Admin name should be provided']
    },
    email:{
        type:String, 
        required:[true,'Admin email should be provided'],
        unique:true
    },
     
    
})

AdminSchema.plugin(passportLocalMongoose,{ 
    usernameField:'email'
})

module.exports =mongoose.model('Admin',AdminSchema)