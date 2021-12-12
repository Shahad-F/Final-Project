

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
         
        setService(res.data)
        setLoading(false)
         
})
},[])

    if(loading){
    return(<p>Loading </p>);
   }
    return ( <>
    
    <h2>Do you want to add something</h2>
    
    {service.map((item ,index)=>{
        return <div key={index} className="box">
       
       <img src={item.image} alt='' width={200}/>
       {/* <div className="title"> */}
          <h3>{item.nameOfService}</h3>  
           {/* </div> */}
    
        </div>
    })}
    
    
    </> );
    
}

export default AddProviderService;