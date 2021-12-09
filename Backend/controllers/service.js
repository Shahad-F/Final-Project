const Service = require('../models/Service')

module.exports ={

// show all services in mongoose
index:(req,res)=>{
Service.find({})
.then(service=>{
    res.json(service)
})
.catch(error => {
    res.json({error:error})
})
},

// add new service to mongoose
create:(req,res)=>{
    let newService = new Service({

        nameOfService:req.body.nameOfService,
        image:req.body.image
    })
    console.log(newService)

    newService.save((error)=>{
    if(error) 
    res.json({error:error})
    else
    res.json({message:"New service inserted ."})
})
},

}