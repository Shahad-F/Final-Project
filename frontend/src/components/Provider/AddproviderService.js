

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import swal from 'sweetalert';
 import './provider.css'

function AddProviderService({data}) {
    
    const {_id} =useParams();
    console.log(_id+"heee")
    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading]=useState(true);
    const[UserName,setUserName]=useState();
    const[Phone,setPhone]=useState();
    const[Price,setPrice]=useState();


    useEffect(()=>{

        axios.get(`http://localhost:3030/services/${_id}`)
       .then((res)=>{
         console.log(res.data)
        setService(res.data.service)
        setLoading(false)
         
})
},[])
// 
const handelAdd=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:3030/providers/provider/${_id}`,
    { userName:UserName,phone:Phone,price:Price})

    .then((res)=>{
        console.log(res.data)
        setService(res.data)
    })

    swal({
        title: "New Service is Added .",
        icon:'success', 
         button: "ok "
      }) 
}

    if(loading){
    return(<p>Loading </p>);
   }
    return ( <>
    
     
    
    <div className="ServiceParent">
         <form className='serviceForm'>
         <h2>Do you want to add something</h2>
    <input type='text' placeholder='Enter userName..'
    onChange ={e=>setUserName(e.target.value)}/><br></br>

    <input type='text' placeholder='Enter Phone..'
    onChange ={e=>setPhone(e.target.value)} /><br></br>

    <input type='text' placeholder='Enter Price..'
    onChange ={e=>setPrice(e.target.value)} /><br></br>

    <button onClick={(e)=>handelAdd(e)}>Add</button>
         </form>
     {/*  */}
         <div  className="imgBox">
             
             <h2>{service.nameOfService}</h2>  
             
             <img src={service.image} alt='' width={400}/>
    
             
            </div>
     
     </div>
    
         
        
     <div>

         {service.providers.map((item)=>{

             return<div>
                 <p>{item.userName}</p>
                 
                 <p>{item.phone}</p>
                  
                 
                 <p>{item.price}</p>
             </div>
         })}
     </div>
      
    
    
    </> );
    
}

export default AddProviderService;