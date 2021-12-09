const Service = require('../models/service')

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
Service.push(newService)
.then(service => {
res.json({message:'Add new Service .!'})

})
.catch(error =>{
    res.json({error:error})
})
},

}