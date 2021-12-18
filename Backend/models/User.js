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
    // userName:{
    //     type:String, 
    // },
    // phone:{
    //     type:Number,
    //     required:[true,'phone should be provided']
    // },
    useremail:{
        type:String, 
        required:[true,' please enter an email '],
        unique:true,
        lowercase: true,
        validate:[isEmail ,'please enter a valid email']
    },
    // image:{
    //     type:String,
    // },
    // city:{
    //     type:String,
    //     required:[true,'city should be provided'],
    // },

    // roles:{
    //     type:String,
    //     enum : ['user','Admin','provider']
    //     ,default:'user'
    // },
    // password:{
    //     type:String,
    //     required:[true ,'please enter an password '],
    //     minlength:[6, 'Minimum password length i 6 characters']
    // }

})

// fire a function after doc saved to db 
// UserSchema.post("save" ,function (doc, next){
//     console.log('new user was created & saved' ,doc);
// next()
// });

// fire a funct''ion before doc savd to db 
// UserSchema.pre('save', async function(next){
//  const salt = await bcrypt.genSalt();
//  this.password = await bcrypt.hash(this.password,salt);
//  next()
// })


// UserSchema.statics.login =async function(email, password){
//     const user = await this.findOne({ email });

//     if(user){
//       const auth= await  bcrypt.compare(password,user.password) ;
//       if(auth){
//           return user;
//       }
//       throw Error('incorrect password');
//     }
//     throw Error('incorrect email')
// }

UserSchema.plugin(passportLocalMongoose,{
    usernameField:'useremail'
})

module.exports = mongoose.model('User',UserSchema)
