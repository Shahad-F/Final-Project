const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User')

module.exports={

siginUp: (res,req)=>{


    let newUser = new User({

        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        image:req.body.image,
        city:req.body.city,
    })
    
}, 

}