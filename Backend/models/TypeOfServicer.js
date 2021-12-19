const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TypeOfService = new Schema({

 
price: {
    type:Number,
    required:[true,"Price is required ."],
},
 
userId:{
    type:Schema.Types.ObjectId,ref:'Provider'
},

serviceId:{
    type:Schema.Types.ObjectId,ref:'Service'
},
})

module.exports=mongoose.model('Type',TypeOfService)