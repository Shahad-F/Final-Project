
const passport = require('passport');
const jsonWebToken = require('jsonwebtoken');
 
const Provider = require('../models/TypeOfServicer')
const ProviderofService=require('../models/ProvidorS')
const Service = require('../models/Service')
const TypeOfServicer =require('../models/TypeOfServicer')


module.exports ={


    showbyId:(req,res)=>{
    let _id =req.params.uid
    Provider.findById(_id)
    .then(provider=>{
        console.log('i am here')
         TypeOfServicer.find({serviceId:service._id})
        .populate('userId serviceId').then(async tservice=>
         res.status(201).send({provider,tservice}))
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

    // _id is id of [provider].
    ProviderofService.findById({_id:req.body.userId}).then(user=>{
        // console.log("user")
        // if _id is founded print information of provider.
        // console.log(user)
        // create a price in provider we chosie it .
        TypeOfServicer.create({price:req.body.price,userId:user,serviceId:req.params.uid})
        
        .then((Tservice)=>{
            // console.log(Tservice)

            // push object of provider in array of service.
            Service.findByIdAndUpdate(req.params.uid,{$push:{providers:user}})
            .populate('providers').then(async service=>{

                try{
                await Tservice.save()
                await service.save()
                // console.log({service,Tservice})
                 TypeOfServicer.find({serviceId:service._id})
                .populate('userId serviceId').then(async service=>
                 res.status(201).send(service))
            }
            catch(e){
                 
                console.log(e)
            }
         })
        })
    })
    
},
change:async (req,res)=>{

ProviderofService.findById({_id:req.body.userId})
 

.then(async (user)=>{
 

const _id =req.params.eid
const proInfo= {price:req.body.price}

// TypeOfServicer.findById(_id)

 TypeOfServicer.findByIdAndUpdate(_id,{$set:proInfo})

.then(async (Tservice)=>{
 
     res.json(Tservice)
     console.log(Tservice)

})

})
.catch(error =>{
    res.json({error:error})  
})
},

del:async(req, res)=>{

    let _id = req.params.uid;
    TypeOfServicer.findByIdAndDelete(_id)

    .then(async(Tservice)=>{  
    res.json({message:"Type is deleted"})
        // let SId=req.params.sId
        // TypeOfServicer.find({serviceId:SId})
        // console.log(SId)
        // .populate('userId serviceId')
        // .then(async service=>{
        // console.log('service')
        // await Tservice.save()
        // res.status(201).send(service)
 
        // res.status(200).send(Tservice)
    // })

})
.catch(error =>{
    res.json({error:error})
})
},

 show: async (req,res)=>{
    Service.find({_id:req.body.sId})
    .populate('providers')
    .then(service=>{
        console.log(service)
        console.log(service[0].providers)
        // res.send(service)
        // TypeOfServicer.find({userId:service})
        service[0].providers.forEach(elm=>
            TypeOfServicer.find({userId:elm._id})
            .populate('userId').then(service=>{

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