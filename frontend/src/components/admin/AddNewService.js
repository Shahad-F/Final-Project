import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './service.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Container,Form,CardGroup,Row} from 'react-bootstrap';
 

export default function AddNewService () {

    
    const navigate=useNavigate()

    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    const [name,setName] = useState();
    const [Image,setImage]=useState();
    // i want to display all information in screen 
    useEffect(()=>{ 

   axios.get('http://localhost:3030/services')
   .then((res)=>{
       console.log(res.data)
       setService(res.data)
       setLoading(false)
   })
    },[newService])

// add new service to
const handelAddNewService =()=>{

    axios.post('http://localhost:3030/services/create', {
        nameOfService:name,image:Image})

        .then((res)=>{
            console.log(res.data)
            setNewService(res.data)
             
        })
        swal({
            title: "New Service is Added .",
            icon:'success', 
             button: "ok "
          }) 
}

// delete service

    const handelDeleteService =(id)=>{
    axios.delete(`http://localhost:3030/services/${id}/delete`)
    .then((res)=>{
        setNewService(res.data)
        swal({
            title:'Service is deleted ',
            icon:'success'
          })
    })
    }
    // ....................................................................
    // edit service

    const handelEditService =(id)=>{
        axios.put(`http://localhost:3030/services/${id}/update`,
        {nameOfService:name,image:Image })
     .then((res)=>{
        console.log(res.data)
        setNewService(res.data)
     })
     swal({
        title: "  Service is updateed .",
        icon:'success', 
         button: "ok "
      }) 

    }
    // ................
    if(loading){
    return(<p>Loading</p>)
}

    return ( <>


<Form  style={{
    backgroundImage:
     `url("https://i.pinimg.com/originals/27/c1/64/27c1644923ceeb2fbcdce1da05cf366a.jpg")`, 
     backgroundSize: 'cover',
      width: "100%",
      height: "600px",
        backgroundPosition: 'center',
        opacity: 0.8,
        // backgroundAttachment: 'fixed'
        }}>

        </Form>

{/*  */}

<Form  className="loginForm"> 
     <h1>Add New Service</h1>

     <Form.Floating className="mb-3">
     
     <Form.Control className="Input"
       id="floatingInputCustom"
       type="text"
       placeholder='Enter name of service'
       onChange={ e=>setName(e.target.value)}
     />
     <label htmlFor="floatingInputCustom">Enter name of service</label>
   
   </Form.Floating>


   <Form.Floating className="mb-3">
     
     <Form.Control className="Input"
       id="floatingInputCustom"
       type="email"
       placeholder='Enter image of service'
       onChange={ e=>setImage(e.target.value)}
     />
     <label htmlFor="floatingInputCustom">Enter image of service</label>
   
   </Form.Floating>

   <Button variant="outline-danger" 
onClick={(e)=>handelAddNewService(e)}
  >Add</Button>{' '}
   </Form>

 


<Card className="bigBox">
    {service.map((item ,index)=>{
        return <Card key={index} className="box">
       
       <img src={item.image} alt='' width={200}/>
       <div className="title">{item.nameOfService}</div>
      
      <div> 
        <button className="editbtn" onClick={()=>handelEditService(item._id)}>Updae</button>
       <button className='deletebtn' onClick={()=>handelDeleteService(item._id)}> Delete</button>
       </div>
        
        </Card>
    })}
</Card>

    </> );
}

  
