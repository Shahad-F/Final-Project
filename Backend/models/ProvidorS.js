const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProviderSchema = new Schema({ 


firstName:{
    type:String,
    required:[true,'firstName should be provided']
},
lastName:{
    type:String,
    required:[true,'lasttName should be provided']
},
phone:{
    type:Number,
    required:[true,'phone should be provided']
},
image:{
    type:String,
    required:[true,'image should be provided']},
city:{
    type:String,
    required:[true,'city should be provided'],
},
price:{
    type:String,
    required:[true,'price should be provided'],
}

})

module.exports = mongoose.model('Provider',ProviderSchema)
