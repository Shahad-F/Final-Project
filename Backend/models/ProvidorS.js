const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const Schema = mongoose.Schema

 
const ProviderSchema = new Schema({ 

fullName:{
    type:String,
    required:[true,"fullName should be provided"]
},
userName:{
    type:String,
    required:[true,'username should be provided']
},
 
phone:{
    type:Number,
    required:[true,'phone should be provided']
},
email:{
    type:String, 
    required:[true,' email should be provided'],
    unique:true
},
image:{
    type:String,
    default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
},
    password:{
        type:String, 
        required:[true,'provider password should be provided']

    }
 
})


// fire a function after document saved to DB
ProviderSchema.post("save", function (doc, next) {
    console.log("new provider created & saved", doc);
    next();
  });
  //fire a function before document saved to DB
  // this refer to Author that in const author = await Author.create({ email, password });
  ProviderSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("provider about to created and saved ", this);
    next();
  });
  //static method to login author
  ProviderSchema.statics.login = async function (email, password) {
    //this refer to Author model
    const provider = await this.findOne({ email });
    if (provider) {
      const pro = await bcrypt.compare(password, provider.password);
      //auth from authenticate, true or false
      if (pro) {
        return provider;
      }
      //this what will be print if handleErrors in authController fires
      throw Error("incorrect password");
    }
    //this what will be print if handleErrors in authController fires
    throw Error("incorrect email");
  };

// ProviderSchema.plugin(passportLocalMongoose,{ 
//     usernameField:'email'
// })

const Provider = mongoose.model('Provider',ProviderSchema)

module.exports =Provider;