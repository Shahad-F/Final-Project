const mongoose = require('mongoose')

const Schema =mongoose.Schema

// const providerSchema = require('./ProvidorS').schema
const providerSchema = require('./TypeOfServicer').schema
const ServiceSchema = new Schema({

nameOfService:{
    type:String,
    required:[true,"Name of service is required ."],
    // unique:true
},
image:{
    type:String,
    required:[true,"Image is required"],
    // unique:true
},
userId:{
    type:Schema.Types.ObjectId,ref:'Provider'
},

providers:[providerSchema]

// object of service.
    
})


module.exports =mongoose.model('Service',ServiceSchema)