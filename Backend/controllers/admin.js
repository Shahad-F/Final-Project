const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');
const Admin = require('../models/Admen')

module.exports ={


    create:(req,res)=>{
        let newAdmin = new Admin({

            name:req.body.name, 
            email:req.body.email,

        })
        Admin.register(newAdmin ,req.body.password,(error,admin)=>{
            if(admin){
                res.json({message:"Admin inserted successfully !"})
            }else{
                res.json({error:"Email is taken"})
                console.log(error)
            }
        })
    },
            index:(req,res)=>{
                Admin.find({})
                .then(admins=>{
                    res.json(admins)
        })
        .catch(error=>{
            res.json({error:error})
        })
    },
authenticate:(req,res,next)=>{

    passport.authenticate('local',(error,admin)=>{

        if(admin){
            let signedToken = jsonWebToken.sign({
                data:admin._id,
                exp:new Date().setDate(new Date().getDate()+1)
             },'Locorbi86');

            res.json({
                success:true,
                token:signedToken
            });
            console.log(admin)
        }else{
            res.json({
                success:false,
                message:"Could not authenticate admin"
            });
        }
    })(req,res,next)
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