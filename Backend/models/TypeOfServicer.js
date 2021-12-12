const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TypeOfService = new Schema({

userName: {
    type:String,
    required:[true,"userName is required ."],
},
phone: {
    type:Number,
    required:[true,"Phone is required ."],
},
price: {
    type:String,
    required:[true,"Price is required ."],
},

})

module.exports=mongoose.model('Type',TypeOfService)