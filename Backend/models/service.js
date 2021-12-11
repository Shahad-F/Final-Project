const mongoose = require('mongoose')

const Schema =mongoose.Schema
const providerSchema = require('./ProvidorS')

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

providers:[providerSchema]
// object of service.
    
})


module.exports =mongoose.model('Service',ServiceSchema)