
import{useNavigate ,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import jwt_decode from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert';
import './newAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Container,Form,CardGroup,Row} from 'react-bootstrap';
 
function AddNewAdmin() {

// const {_id} =useParams();
const navigate=useNavigate()

const[admin ,setAdmin]=useState([])
const [newAdmin,setNewAdmin]=useState({})
// const [loading,setLoading] = useState(true);


const [Name ,setName]=useState();
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()

// ....................

// let decodedData;

// const storedToken = localStorage.getItem('token');

// if(storedToken){
// decodedData =jwt_decode(storedToken,{payload :true});
// console.log(decodedData);

// let expirationDate = decodedData.exp;
// var current_time = Date.now() / 1000;
// if(expirationDate < current_time){
//     localStorage.removeItem('token');
// }
// }
// ..................

useEffect(()=>{ 
    axios.get('http://localhost:3030/admins')
    .then((res)=>{
        console.log(res.data)
        setAdmin(res.data)
        // setLoading(false)
    })
},[newAdmin])


// ....................

    const handelBack=()=>{ 
       
        navigate('/AdminHome');

    }
    const handelAdd=(e)=>{ 
    e.preventDefault();

    axios.post('http://localhost:3030/admins/create', 
    {name:Name,email:Email,password:Password})
     

 .then((res)=>{
     
    console.log(res)
if(res.data.error=== "Email is taken"){

    swal({

        title: "Your password or email is taken",
        icon:'error', 
         button: "Try again "
      })  
}else{
    setNewAdmin(res.data)
     
    
    swal({
        title: Name+' is admin too now',
        icon:'success'
      })
}
 
 })

}
// .....................

const handelDelete=(id,name)=>{ 

    swal({
        title:'Admin is deleted ',
        icon:'success'
      })
         console.log(name)

    axios.delete(`http://localhost:3030/admins/${id}/delete`)
    .then((res)=>{ 

      setNewAdmin(res.data)
       
    })

}

// if(loading){
//     return(<p>Loading</p>)
// }
    return (
        
     <>
    
    <Button variant="outline-secondary" className='back'
    onClick={handelBack}
    >Back to Homepage</Button>{' '}
     


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

<Form  className="loginForm"> 
     <h1>New Admin</h1>

     <Form.Floating className="mb-3">
     
     <Form.Control className="Input"
       id="floatingInputCustom"
       type="text"
       placeholder='Enter name.'
       onChange={e=>setName(e.target.value)}
     />
     <label htmlFor="floatingInputCustom">Admin name</label>
   
   </Form.Floating>

   <Form.Floating className="mb-3">
     
    <Form.Control className="Input"
      id="floatingInputCustom"
      type="email"
      placeholder="name@gmail.com"
      onChange={e=>setEmail(e.target.value)}
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  
  </Form.Floating>


  <Form.Floating>
    <Form.Control  className="Input"
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
      onChange={e=>setPassword(e.target.value)}
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>

  <Button variant="outline-danger" 
onClick={(e)=>handelAdd(e)}
  >Add</Button>{' '}
     </Form>

     {/*  */}
 
     
        <Card border="light"  className="BigCard"  >

        {admin.map((get,index)=>{
        return <Card key={index} border="danger"  style={{ width: '20rem' }}className="smallCard" >
        <Card.Header className='Header' >Name : {get.name}</Card.Header>
        
        <Card.Body>
      <Card.Title className='text'> {get.email}</Card.Title>
       
      <Button variant="outline-danger" className="Cardbtn" 
       onClick={()=>handelDelete(get._id,get.name)}
       >Delete</Button>{' '}
      </Card.Body>

             </Card>
})}

     
</Card>
 
    </> );
}

export default AddNewAdmin;