const mongoose = require('mongoose');
const bcrypt= require('bcrypt')
const Schema = mongoose.Schema 

const passportLocalMongoose = require('passport-local-mongoose');

const AdminSchema = new Schema ({


    name:{
        type:String, 
        required:[true,'Admin name should be provided']
    },
    email:{
        type:String, 
        required:[true,'Admin email should be provided'],
        unique:true
    },
    password:{
        type:String, 
        required:[true,'Admin password should be provided']

    }
     
    
})

// fire a function after document saved to DB
AdminSchema.post("save", function (doc, next) {
    console.log("new admin created & saved", doc);
    next();
  });
  //fire a function before document saved to DB
  // this refer to Author that in const author = await Author.create({ email, password });
  AdminSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log("admin about to created and saved ", this);
    next();
  });
  //static method to login author
  AdminSchema.statics.login = async function (email, password) {
    //this refer to Author model
    const admin = await this.findOne({ email });
    if (admin) {
      const ad = await bcrypt.compare(password, admin.password);
      //auth from authenticate, true or false
      if (ad) {
        return admin;
      }
      //this what will be print if handleErrors in authController fires
      throw Error("incorrect password");
    }
    //this what will be print if handleErrors in authController fires
    throw Error("incorrect email");
  };

// AdminSchema.plugin(passportLocalMongoose,{ 
//     usernameField:'email'
// })

const Admin =mongoose.model('Admin',AdminSchema);

module.exports =Admin;