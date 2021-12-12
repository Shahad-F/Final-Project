

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";

function AddProviderService({data}) {
    
    const {_id} =useParams();
    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading]=useState(true);


    useEffect(()=>{

        axios.get(`http://localhost:3030/services/${_id}`)
       .then((res)=>{
         console.log(res.data)
        setService(res.data.service)
        setLoading(false)
         
})
},[])

    if(loading){
    return(<p>Loading </p>);
   }
    return ( <>
    
    <h2>Do you want to add something</h2>
    
    
         <div  className="box">
             
         <h2>{service.nameOfService}</h2>  
         
         <img src={service.image} alt='' width={200}/>

         
        
        
           
           
    
        </div>
     
    
    
    </> );
    
}

export default AddProviderService;