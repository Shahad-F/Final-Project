import {Link} from 'react-router-dom'
import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col ,Card,Row,FloatingLabel,Button,Form,Image} from 'react-bootstrap';
import '../Provider/sign.css'



function LoginUser() {

    const navigate=useNavigate()
    const [Email ,setEmail] =useState()
    const [Password ,setPassword] =useState()

const handelLogin=(e)=>{

    e.preventDefault()

    axios.post("http://localhost:3030/users/login",
    {email:Email,password:Password})

    .then((res)=>{
        console.log(res.data)

        if(res.data.success === true){
            const token = res.data.token;
            const usersign = jwt(token);
            console.log(usersign)
            localStorage.setItem('token',token)
            swal({
                title:'Welcome .'+Email,
                icon:'success',
                button: "Ok "
              })
                navigate('/UserHome');
        }else{
            swal({
                title: "Your password or email is incorrect",
               
                 icon:'error', 
                 button: "Try again "
              })  
        }
    })

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

  <h1>Login</h1>
  <Form.Floating className="mb-3">
     
     <Form.Control className="Input"
       id="floatingInputCustom"
       type="email"
       placeholder='Enter your email address.'
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

<p >I don't have account <Link to={`/SignupUser`}>SignUp</Link></p>


  </Form>
    
    
    </> );
}

export default LoginUser;