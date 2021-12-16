

 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import jwt_decode from 'jwt-decode' 
 import swal from 'sweetalert';
 import './provider.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col,Image,Card, Container} from 'react-bootstrap';
 

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
    { userName:UserName,phone:Phone,price:Price,userId:UserId})
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
    
     <br/>
    <h1 className='lineTitle'>{service.nameOfService}</h1>

             {/*  */}
         
       
<Form className='ServiceParent'>

      <Card className="imageBox"> 

    <Card.Img variant="top" src={service.image}    />
    <Card.Text className='des'> <span>Description:</span> {service.description}</Card.Text>
       
    </Card>

      <Card.Body>

     <Form className="BOX"> 

   <Form.Floating className="mb-3" >
      <Form.Control className="INPUT" type="text" placeholder="UserName" 
     onChange ={e=>setUserName(e.target.value)} />
     <label htmlFor="floatingInputCustom">UserName</label>

  </Form.Floating >


  <Form.Floating className="mb-3" >
      <Form.Control className="INPUT" type="text" placeholder="Phone number" 
    onChange ={e=>setPhone(e.target.value)} />
    <label htmlFor="floatingInputCustom">Enter your phone number</label>

  </Form.Floating>

  <Form.Floating className="mb-3" >

      <Form.Control className="INPUT" type="text" placeholder="Price" 
      onChange ={e=>setPrice(e.target.value)} />
     <label htmlFor="floatingInputCustom">Enter your price</label>

  </Form.Floating>

  <Button variant="outline-danger" className="addBTN" onClick={(e)=>handelAdd(e)}
  >Add</Button>{' '}

  </Form>
  </Card.Body>
   
</Form>
 

     
            {/* </div> */}
     
         
        
            <Card border="light" className="BigCard">

         {service.providers.map((item)=>{

             return<Card  border="danger"  style={{ width: '20rem' }}className="smallCard">

                 <Card.Header className='Header'>Name Of Provider:{item.userName}</Card.Header>
                 
                 <Card.Text className='text'> Phone Number:{item.phone}</Card.Text>
                  
                 <Card.Text className='text'>Price :{item.price}</Card.Text>
                 <Card.Text className='text'>Price :{item.UserId}</Card.Text>


    {(function(){

    if(decodedData != undefined){
        console.log("decodedData "+UserId)
        console.log("decodedData "+item.userId)
        if(UserId === item.userId){
            console.log("decodedData")
    return(<>
<div className="BTN" > 
       <Button  variant="outline-warning" onClick={()=>habdeledit(item._id)}>Update</Button>{' '}
       <Button variant="outline-danger" onClick={()=>habdeldelete(item._id)}>Delete</Button>{' '}
       </div>

    </>)
        }}

    })()}
             </Card>
         })}
     </Card>
      
    
    
    </> );
    
}

export default AddProviderService;