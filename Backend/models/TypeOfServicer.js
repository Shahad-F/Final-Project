const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TypeOfService = new Schema({

userName: {
    type:String,
    required:[true,"userNameis required ."],
},
Phone: {
    type:Number,
    required:[true,"Phone is required ."],
},
Price: {
    type:String,
    required:[true,"Price is required ."],
},

})

module.exports=mongoose.model('Type',TypeOfService)