
import {Link} from 'react-router-dom'
import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col ,Row,FloatingLabel,Button,Form} from 'react-bootstrap';
 


export default function Login() {

    const navigate=useNavigate()
    const [Email ,setEmail] =useState()
    const [Password ,setPassword] =useState()

// ................................................

const handelLogin =(e)=>{

    e.preventDefault()

    axios.post('http://localhost:3030/admins/login', {
        email:Email,password:Password})

        .then((res)=>{
            console.log(res.data)

            if(res.data.success === true){
                const token = res.data.token;
                const adminsign = jwt(token);
                console.log(token)
                console.log(adminsign)
                localStorage.setItem('token',token);

                swal({
                    title:'Welcome .'+Email,
                    icon:'success'
                  })
                    navigate('/AdminHome');
            }
            else{
                swal({
                    title: "Your password or email is incorrect",
                   
                    icon:'error', 
                     button: "Try again "
                  })  
            }
        })
}


    return (  <>
    <Form  className="loginForm"> 
     <h1>Login</h1>
    <Form.Floating className="mb-3">
     
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@gmail.com"
      onChange={e=>setEmail(e.target.value)}
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
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
    {/* <form className="loginForm">
        
        <input type='email'
        placeholder='Enter your email address.'
        onChange={e=>setEmail(e.target.value)}
        /> */}
{/* <br/>

<input type='password'
        placeholder='Enter your password.'
        onChange={e=>setPassword(e.target.value)}
        /> */}


{/* <button className='LOGIN'
  > Login</button> */}
 
     
     

    </>);
}

  