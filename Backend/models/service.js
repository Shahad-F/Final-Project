const mongoose = require('mongoose')

const Schema =mongoose.Schema

// const providerSchema = require('./ProvidorS').schema
const providerSchema = require('./TypeOfServicer').schema
const ServiceSchema = new Schema({

nameOfService:{
    type:String,
    // required:[true,"Name of service is required ."],   
},
image:{
    type:String,
    // required:[true,"Image is required"],  
},
description:{
    type:String,
    // required:[true,"Description is required"]
},
 
providers:[{type:Schema.Types.ObjectId,ref:'Provider'}]

 
    
})


module.exports =mongoose.model('Service',ServiceSchema)