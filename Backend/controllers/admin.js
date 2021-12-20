const passport = require('passport');

const jsonWebToken = require('jsonwebtoken');
const Admin = require('../models/Admen')

module.exports ={



            index:async(req,res)=>{

                Admin.find({})

                try{(admins=>{
                 res.json(admins)
                 res.status(200)
           })}
             catch(error){
            res.status(400).json({error:error})
        }
    },

 

delete:(req,res)=>{

    let _id=req.params.uid

    Admin.findByIdAndDelete(_id)
    .then(()=>{
        res.json({message:"This Admin is Remove !"})
    })
    .catch(error =>{
        res.json({error:error})
    })


   
},

update:(req,res)=>{
    let _id = req.params.uid

    let admininfo={
            name:req.body.name, 
            email:req.body.email,
            password:req.body.password

    }

    Admin.findByIdAndUpdate(_id,{$set:admininfo})
    .then(admin=>{
        res.json({message:"Admin Information is updated"})
    })
    .catch(error =>{
        res.json({error:error})  
    })
},



}