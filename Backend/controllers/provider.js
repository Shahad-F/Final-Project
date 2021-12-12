

const Provider = require('../models/ProvidorS')
const Service = require('../models/Service')

module.exports ={

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
        price:req.body.price
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
        price:req.body.price
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

}