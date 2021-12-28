import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './service.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Container,Form,CardGroup,Row,Image} from 'react-bootstrap';
import Loading from '../../components/Loading';


export default function AddNewService () {

    
    const navigate=useNavigate()

    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    const [name,setName] = useState();
    const [IMage,setImage]=useState();
    const [Description,setDescription] = useState();

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
        nameOfService:name,image:IMage,description:Description})

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
        {nameOfService:name,image:IMage ,description:Description})
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
    return(<Loading/>)
}

    return ( <>


<Form  style={{
      backgroundImage:
      `url("https://d1p2fuior9l0tb.cloudfront.net/wp-content/uploads/2020/02/26075319/LEDE-1.-Bentley-FS_6.jpg")`, 
      backgroundSize: 'cover',
      width: "100%",
      height: "600px",
        backgroundPosition: 'center',
        opacity: 0.8,
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
       id="floatingInput1Custom"
       type="email"
       placeholder='Enter image of service'
       onChange={ e=>setImage(e.target.value)}
     />
     <label htmlFor="floatingInput1Custom">Enter image of service</label>
   
   </Form.Floating>

   <Form.Floating controlId="floatingTextarea2" label="Comments">
    <Form.Control className="Input"
      as="textarea"
      placeholder="Add Description"
      onChange={ e=>setDescription(e.target.value)}
      style={{ height: '100px' }}
    />
<label htmlFor="floatingTextarea2">Enter Descrption</label>

  </Form.Floating>

   <Button variant="outline-danger" 
onClick={(e)=>handelAddNewService(e)}
  >Add</Button>{' '}
   </Form>

 


<Card className="BigCard">

    {service.map((item ,index)=>{

        return  <Card style={{ width: '18rem' }} className="boxCard">
        <Card.Img variant="top" src={item.image}   className="imgCard"/>
        <Card.Body>
          <Card.Title className="title">{item.nameOfService}</Card.Title>
          <Card.Text className="texterea">{item.description}</Card.Text>
          <div  > 
       <Button variant="outline-warning" className="Cardbtn-1" 
        onClick={()=>handelEditService(item._id)}>Updae</Button>{' '}
       
       <Button variant="outline-danger" className="Cardbtn-1" 
      onClick={()=>handelDeleteService(item._id)}>Delete</Button>{' '}
</div>
        </Card.Body>
      </Card>
        
        
        
        
//         <Card key={index} className="box">
       
//        <Image src={item.image} alt='' width={200} roundedCircle/>
//        <Card.Title className="title">{item.nameOfService} </Card.Title>
//        <Card.Text className="texterea">{item.description}</Card.Text>
// <br></br>

//        <div  > 
//        <Button variant="outline-warning" className="Cardbtn-1" 
//         onClick={()=>handelEditService(item._id)}>Updae</Button>{' '}
       
//        <Button variant="outline-danger" className="Cardbtn-1" 
//       onClick={()=>handelDeleteService(item._id)}>Delete</Button>{' '}
// </div>

//         </Card>
    })}
</Card>

    </> );
}

  
