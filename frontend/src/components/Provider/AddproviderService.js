

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import swal from 'sweetalert';
 import './provider.css'
 import { Button,Form } from 'react-bootstrap';

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
    
    <div className="mb-3">

    
<Form>

<Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="UserName" 
     onChange ={e=>setUserName(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Phone number" 
    onChange ={e=>setPhone(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Price" 
      onChange ={e=>setPrice(e.target.value)} />
      
  </Form.Group>

  <Button variant="outline-success" onClick={(e)=>handelAdd(e)}>Add</Button>{' '}

</Form>

    </div>
    

     
         
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