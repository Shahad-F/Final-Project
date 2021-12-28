
 import React, { useEffect ,useState} from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "axios";
 import jwt_decode from 'jwt-decode' 
 import swal from 'sweetalert';
 import './provider.css'
 import Loading from '../../components/Loading'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col,Spinner,Card,Img, Container} from 'react-bootstrap';
 

function AddProviderService({data}) {
    
    const {_id} =useParams();
     
    const [service,setService]=useState([]);
    const [tservice,setTService]=useState([]);
    const [newTservice,setNewTService]=useState({});

    const [newService,setNewService]=useState({});
    const [loading,setLoading]=useState(true);
    const [UserName,setUserName]=useState();
    const [Phone,setPhone]=useState();
    const [Price,setPrice]=useState();
    const [Profile,setProfile]=useState();
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

const[UserId,setUserId]=useState(decodedData.id);

// display all cards
    useEffect(()=>{
        axios.get(`http://localhost:3030/services/${_id}`)
       .then((res)=>{
           if(res.data.tservice.length > 0){

           
        console.log(res.data)
        setService(res.data.tservice[0].serviceId)
        setTService(res.data.tservice)
           }
           
        setLoading(false)       
})

},[newTservice])



// add new card
const handelAdd=(e)=>{

    e.preventDefault()

    axios.post(`http://localhost:3030/providers/provider/${_id}`,
    {price:Price ,userId:decodedData.id})

    .then((res)=>{
        console.log(res.data)
        setNewTService(res.data)
        // setService(res.data)
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
    axios.put(`http://localhost:3030/providers/change/${id}`,
    { price:Price ,userId:decodedData.id})
    .then((res=>{
        console.log(res.data)
        setNewTService(res.data)

    }))
}


// delete card
const habdeldelete =(id)=>{

    swal({
        title:'Your service is delete ',
        icon:'error'
      })
    axios.delete(`http://localhost:3030/providers/del/${id}`)
    .then((res=>{
            console.log(res)    
            console.log("delete")

        setNewTService(res.data)
        // setService(res.data)

    }))
}
    if(loading){
    return( <Loading/>);
   }
    return ( <>
    
     <br/>
     
         
       

 {tservice.length>0 ? 

  <Card className="PriceCard" >
  <Card.Img src={service.image}alt="Card image" className="imagePrice" />
  <Card.ImgOverlay>
    <Card.Title> <h1 className="lineTitle">{service.nameOfService}</h1></Card.Title>
    <Card.Text className="des">
    {service.description}
    </Card.Text>
    
    <Card.Body>
     <Form className="BOX"> 
  <Form.Floating className="mb-3" >

      <Form.Control className="INPUT" type="text" placeholder="Price" 
      onChange ={e=>setPrice(e.target.value)} />
     <label htmlFor="floatingInputCustom">Enter your price</label>
  </Form.Floating>
  <Button variant="danger" className="addBTN" onClick={(e)=>handelAdd(e)}>Add</Button>{' '}
  </Form>
  </Card.Body>
  </Card.ImgOverlay>
</Card> : <h1>No Services</h1>}


            <Card border="light" className="BigCard">

         {tservice.map((item)=>{

             return<Card  border="danger"  style={{ width: '20rem' }}className="smallCard">

                 <Card.Header className='Header'>Name: {item.userId.fullName}</Card.Header>
                 
                <div className='SmBox'> 
                <img src={item.userId.image} className="profile" rounded alt="..." width={80} height={80}/>

                 <Card.Text className='textBox'> Phone NO:<span>{item.userId.phone}</span> <br></br>
                  
                 Price :{item.price} SR</Card.Text>
            </div>

    {(function(){

    if(decodedData != undefined){

        console.log("decodedData "+UserId)
        console.log("decodedData "+item.userId._id)
        
        if(UserId === item.userId._id){
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