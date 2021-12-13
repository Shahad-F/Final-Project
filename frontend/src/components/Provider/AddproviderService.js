

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import jwt_decode from 'jwt-decode' 
 import swal from 'sweetalert';
 import './provider.css'
 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col,Image,Card} from 'react-bootstrap';
 

function AddProviderService({data}) {
    
    const {_id} =useParams();
     
    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading]=useState(true);
    const[UserName,setUserName]=useState();
    const[Phone,setPhone]=useState();
    const[Price,setPrice]=useState();
    // ................................................................................................................................
    
    console.log(data ) 
    
    let decodedData;

    const storedToken = localStorage.getItem("token");
    if(storedToken){
        decodedData = jwt_decode(storedToken ,{payload:true});
    console.log(decodedData);

    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    
    if(expirationDate < current_time){
        localStorage.removeItem("token")
    }
}

const[UserId,setUserId]=useState(decodedData.data);

// display all cards
    useEffect(()=>{


        axios.get(`http://localhost:3030/services/${_id}`)
       .then((res)=>{
         console.log(res.data)
        setService(res.data.service)
     setLoading(false)
         
})

},[])



// add new card
const handelAdd=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:3030/providers/provider/${_id}`,
    { userName:UserName,phone:Phone,price:Price ,userId:UserId})

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
// edit card

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
// delete card
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


    {(function(){

    if(decodedData != undefined){
        console.log("decodedData "+UserId)
        console.log("decodedData "+item.userId)
        if(UserId === item.userId){
            console.log("decodedData")
    return(<>

       <Button variant="outline-warning" onClick={()=>habdeledit(item._id)}>Update</Button>{' '}
       <Button variant="outline-danger" onClick={()=>habdeldelete(item._id)}>Delete</Button>{' '}


    </>)
        }}

    })()}
             </Card>
         })}
     </div>
      
    
    
    </> );
    
}

export default AddProviderService;