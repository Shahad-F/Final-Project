
const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');
 
const Provider = require('../models/ProvidorS')
const Service = require('../models/Service')

module.exports ={

show:(req,res)=>{

    let _id =req.params.uid

    Provider.findById(_id)
    .then(provider=>{
        res.json({provider})
    })
    .catch(error=>{

        res.json({error:error})
    })

},

    index:(req, res, ) =>{

        Provider.find({})
        .then(provider=>{
            res.json(provider)
        })
        .catch(error=>{
            res.json({ error: error})
        })
    },

create: async(req,res)=>{
    const _id =req.params.id;
    const service = await Service.findOne({_id})

    let newPrivider = new Provider({

        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        image:req.body.image,
        city:req.body.city,
        // price:req.body.price
    })
    console.log(service)
    service.providers.push(newPrivider);

    try{
        await service.save()
        res.status(201).send(service)
    }
    catch(e){
        console.log(e)
    }

},
signUp:(req,res)=>{

let newPrivider = new Provider({

        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        image:req.body.image,
        city:req.body.city,
        // price:req.body.price
})

Provider.register(newPrivider, req.body.password,(error,provider)=>{

    if(provider){
        res.json({message:"Provider inserted successfully !"})
    }else{
        res.json({error:'Email is taken'})
        console.log(error)
    }
})


},

authenticate:(req,res,next)=>{

    passport.authenticate('local',(error,provider)=>{

        if(provider){
            let signedToken = jsonWebToken.sign({

                data:provider._id,
                exp:new Date().setDate(new Date().getDate()+1)
            },'Locorbi86');

            res.json({
                success:true,
                token:signedToken
        });
        console.log(provider)
        }else{
            res.json({
                success:false, 
                message:"Could not authenticate provider"  
            });
             
        }
    })(req,res,next)
},

delete:(req,res)=>{
    let _id=req.params.uid

    Provider.findByIdAndDelete(_id)

    .then(()=>{
        res.json({message:"This Provider is Remove !"})
    })
.catch(error=>{
    res.json({error:error})

})
},

update:(req,res)=>{
    let _id = req.params.uid

    let providerinfo={

            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phone:req.body.phone,
            email:req.body.email,
            image:req.body.image,
            city:req.body.city,
            // price:req.body.price,
            password:req.body.password

    }

    Provider.findByIdAndUpdate(_id,{$set:providerinfo})
    .then(provider=>{
        res.json({message:"Provider Information is updated"})
    })
    .catch(error =>{
        res.json({error:error})  
    })
}

}