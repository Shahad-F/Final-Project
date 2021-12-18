const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({


    fullName:{
        type:String,
        required:[true,'firstName should be provided']
    },
    userName:{
        type:String,
        required:[true,'lasttName should be provided']
    },
    
    phone:{
        type:Number,
        required:[true,'phone should be provided']
    },
    email:{
        type:String, 
        required:[true,' please enter an email '],
        unique:true,
        lowercase: true,
        validate:[isEmail ,'please enter a valid email']
    },
    image:{
        type:String,
    },
     
    password:{
        type:String,
        required:[true ,'please enter an password '],
        minlength:[6, 'Minimum password length i 6 characters']
    }

})


// fire a function after document saved to DB
UserSchema.post("save", function (doc, next) {
    console.log("new admin created & saved", doc);
    next();
  });
  //fire a function before document saved to DB
  // this refer to Author that in const author = await Author.create({ email, password });
  UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("provider about to created and saved ", this);
    next();
  });
  //static method to login author
  UserSchema.statics.login = async function (email, password) {
    //this refer to Author model
    const user = await this.findOne({ email });
    if (user) {
      const user = await bcrypt.compare(password, provider.password);
      //auth from authenticate, true or false
      if (user) {
        return user;
      }
      //this what will be print if handleErrors in authController fires
      throw Error("incorrect password");
    }
    //this what will be print if handleErrors in authController fires
    throw Error("incorrect email");
  };

// UserSchema.plugin(passportLocalMongoose,{
//     usernameField:'useremail'
// })


const User =mongoose.model('User',UserSchema)
module.exports =  User;
