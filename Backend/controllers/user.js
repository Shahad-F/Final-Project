const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User')

module.exports={


// display all users
    index:(req,res)=>{

  User.find({})
.then(user=>{
    res.json(user);
})
.catch(error =>{
    res.json({error:error})
})
    },
 
 
delete:(req,res)=>{
    let _id = req.params.uid

    User.findByIdAndDelete(_id)
    .then(()=>{

        res.json({mesage:"This User is Remove !"})
    })
    .catch(error =>{
        res.json({error:error})
    })
},

update:(req,res)=>{
let _id = req.params.uid

let userInfo={ 

    fullName:req.body.fullName,
    userName:req.body.userName,
    phone:req.body.phone,
    email:req.body.email,
    image:req.body.image,
    password:req.body.password 
}
User.findByIdAndUpdate(_id,{$set:userInfo})
.then(user =>{
    res.json({message:"User Information is updated"})
})
.catch(error =>{
    res.json({error:error})
})
},

}