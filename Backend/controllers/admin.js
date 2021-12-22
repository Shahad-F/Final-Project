//  relation between collections and how to write it in code.
//  work with mongodb. 


 const Admin = require('../models/Admen')

module.exports ={

            index:(req,res)=>{

                Admin.find({})
                
                .then(admins=>{
                 res.json(admins)
           })
        .catch(error=>{
            res.json({error:error})
        })
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