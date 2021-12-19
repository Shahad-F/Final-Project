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

})

module.exports=mongoose.model('Type',TypeOfService)