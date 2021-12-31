const Service = require('../models/Service')
const TypeOfServicer =require('../models/TypeOfServicer')

module.exports ={

    show:(req,res)=>{

        let _id =req.params.uid
        Service.findById(_id)

        .then(service=>{
            TypeOfServicer.find({serviceId:service._id})
            .populate('userId serviceId').then(async tservice=>
               { console.log(tservice)
            res.status(201).send({tservice})}
            )
            // res.json({service})
        })
        .catch(error=>{
    
            res.json({error:error})
        })
    
    },

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
        image:req.body.image,
        description:req.body.description
         
    })
    console.log(newService)

    newService.save((error)=>{
    if(error) 
    res.json({error:error})
    else
    res.json({message:"New service inserted ."})
})
},

///delete a service bi id
delete:(req,res)=>{
    let _id=req.params.uid

    Service.findByIdAndDelete(_id)
    .then(()=>{
        res.json({message:"Service deleted"})
    })
    .catch(error=>{
         res.json({error:error})
    })
},

//update service by id 
update:(req,res)=>{
let _id = req.params.id

let serviceInfo ={ 

    nameOfService:req.body.nameOfService,
    image:req.body.image,
    description:req.body.description

}
Service.findByIdAndUpdate(_id,{$set:serviceInfo})
.then(service=>{
    res.json({message:'service is update .'})

})
.catch(error =>{
    res.json({error:error})
})
}

}