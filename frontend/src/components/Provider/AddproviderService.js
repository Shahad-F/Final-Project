

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import swal from 'sweetalert';
 import './provider.css'
 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col,Image,Card} from 'react-bootstrap';

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
// functions 

const habdeledit=(id)=>{

    swal({
        title:'Your service is edited ',
        icon:'success'
      })
    axios.put(`http://localhost:3030/providers/provider/${_id}/${id}`,
    { userName:UserName,phone:Phone,price:Price})
    .then((res=>{
        console.log(res.data)
        setService(res.data)

    }))
}
// 
const habdeldelete =(id)=>{

    swal({
        title:'Your service is delete ',
        icon:'error'
      })
    axios.delete(`http://localhost:3030/providers/provider/${_id}/${id}`)
    .then((res=>{
        console.log(res.data)
        setService(res.data)

    }))
}
    if(loading){
    return(<p>Loading </p>);
   }
    return ( <>
    
     
    <h1>{service.nameOfService}</h1>

    <div  >
    
     
             
         
<Form className='ServiceParent'
style={{backgroundImage:`url(${service.image})`,
backgroundRepeat: 'no-repeat',
// width: "100%",
height: "300px",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundAttachment: 'fixed',
 }} >

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

  <Button variant="success" onClick={(e)=>handelAdd(e)}>Add</Button>{' '}
  
  </Form>
</Form>

      
            </div>
     
         
        
     <div className="container">

         {service.providers.map((item)=>{

             return<Card style={{width:"20rem"}}>
                 <Card.Title>Name Of Provider:{item.userName}</Card.Title>
                 
                 <Card.Text>Phone Number:{item.phone}</Card.Text>
                  
                 <Card.Text>Price :{item.price}</Card.Text>

                 <div>
                 <Button variant="outline-warning" onClick={()=>habdeledit(item._id)}>Update</Button>{' '}
                 <Button variant="outline-danger" onClick={()=>habdeldelete(item._id)}>Delete</Button>{' '}

                 </div>
             </Card>
         })}
     </div>
      
    
    
    </> );
    
}

export default AddProviderService;