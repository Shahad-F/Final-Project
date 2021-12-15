const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User')

module.exports={
// Signup
signUp: (req,res)=>{


    let newUser = new User({

        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        image:req.body.image,
        city:req.body.city,
    })
    User.register(newUser ,req.body.password,(error,user)=>{

        if(user){
            res.json({message:"new User inserted successfully !"})
        }else{
            res.json({error:"Email is taken"})
            console.log(error)
        }
    })
}, 

// Login
authenticate:(req,res,next)=>{

    passport.authenticate('local',(error,user)=>{
        if(user){
            let signedToken = jsonWebToken.sign({

                data:user._id,
                exp:new Date().setDate(new Date().getDate()+1)
            },'Locorbi86')
            res.json({
                success:true,
                token:signedToken
            });
            console.log(user)
        }else{
            res.json({
                success:false,
                message:"Your passwor or email is not correct. Please try again"
            });
        }
    })(req,res,next)
}

}