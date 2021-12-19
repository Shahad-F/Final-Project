
const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');
 
const Provider = require('../models/TypeOfServicer')
const ProviderofService=require('../models/ProvidorS')
const Service = require('../models/Service')
const TypeOfServicer =require('../models/TypeOfServicer')


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

    // _id is id in service like(towing and teach)
    ProviderofService.findById({_id:req.body.userId}).then(user=>{
        // console.log("user")
        // if _id is founded print 
        console.log(user)
        // TypeOfServicer.create({price:req.body.price,userId:user})

        // .then((Tservice)=>{
        //     Service.findByIdAndUpdate(req.params.uid,{$push:{providers:user}})
        //     .populate('providers').then(async service=>{

        //         try{
        //         await Tservice.save()
        //         await service.save()
        //         console.log({service,Tservice})
        //         res.status(201).send(service)
        //     }
        //     catch(e){
        //         console.error(e)
        //     }
        //  })
        // })
    })
    
},
change:async (req,res)=>{

ProviderofService.findById({_id:req.body.userId}).then(user=>{

TypeOfServicer.find({userId:user})
.then((Tservice)=>{

    TypeOfServicer.findByIdAndUpdate(req.params.uid,{price:req.body.price})

    .then(async(Tservice)=>{
        await console.log({Tservice})
        await Tservice.save()
        await res.send(Tservice)
    })
})

})
},

del:async(req, res)=>{


    TypeOfServicer.findByIdAndRemove(req.params.uid)
    .then(async (Tservice)=>{
        await console.log({Tservice})
        await Tservice.save()
        // await res.send(Tservice)
    })

},

show: async (req,res)=>{
    Service.find({_id:req.body.sId}).populate('providers').then(service=>{
        console.log(service)
        console.log(service[0].providers)
        // res.send(service)
        // TypeOfServicer.find({userId:service})
        service[0].providers.forEach(elm=>
            TypeOfServicer.find({userId:elm._id}).populate('userId').then(service=>{

                res.send(service)
            })
            
            )
    })

},

edit: async(req,res)=>{


const Pid = req.params.Pid;
const service = await Service.findById(req.params.Sid)

let editService = new Provider({

        userName:req.body.userName,
        phone:req.body.phone,
        price:req.body.price,
        profile:req.body.profile,
        userId:req.body.userId
})
if(!service){
    return res.status(404).send()
}
console.log(service)

await service.providers.pull({_id: Pid});
await service.providers.push(editService);
await service.save()
res.status(200).send(service)
console.log(service)

},

remove: async(req, res)=>{

const Pid = req.params.Pid;
const service = await Service.findById(req.params.Sid)

if(!service){
    return res.status(404).send()
}

await service.providers.pull({_id: Pid});
await service.save()
res.status(200).send(service)
console.log(service)
},




signUp:(req,res)=>{

let newPrivider = new ProviderofService({

        fullName:req.body.fullName,
        userName:req.body.userName,
        phone:req.body.phone,
        email:req.body.email,
        image:req.body.image,
        // city:req.body.city,
        // roles:req.body.roles
})

ProviderofService.register(newPrivider, req.body.password,(error,provider)=>{

    if(provider){
        let signedToken = jsonWebToken.sign({

            data:provider._id,
            type:"provider",
            exp:new Date().setDate(new Date().getDate()+1)
        },'Locorbi86');
        
        res.json({
            success:true,
            token:signedToken
        });
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
                type:"provider",
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
                message:"Your passwor or email is not correct. Please try again"  
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

        fullName:req.body.fullName,
        userName:req.body.userName,
        phone:req.body.phone,
        email:req.body.email,
        image:req.body.image,
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