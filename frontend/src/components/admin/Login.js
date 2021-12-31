
// import {Link} from 'react-router-dom'
import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert'
// import image from '../../img/carLogin.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form} from 'react-bootstrap';
 


export default function Login() {

    const navigate=useNavigate()
    const [Email ,setEmail] =useState()
    const [Password ,setPassword] =useState()

// ................................................

const handelLogin =(e)=>{

    e.preventDefault()

    axios.post('http://localhost:3030/admins/AdSignin',{
        email:Email,password:Password})

         .then((res)=>{
          console.log(res)

            if(res.data.success === true){
               
                const token = res.data.admin;
                
                const adminsign = jwt(token);
                console.log(token)
                console.log(adminsign)
                localStorage.setItem('token',token);

                swal({
                    title:'Welcome .'+Email,
                    icon:'success',
                  })
                    navigate('/AdminHome');
            }
            else{
                swal({
                    title: "Your password or email is incorrect",
                   
                    icon:'error', 
                     button: "Try again ",
                  })  
            }
        })
}


    return (  <>

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
     <h1>Login</h1>
    <Form.Floating >
     
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
  onClick={(e)=>handelLogin(e)}
  >Login</Button>{' '}

</Form>
 
     
 
     
     

    </>);
}

  