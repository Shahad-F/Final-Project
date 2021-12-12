import {Link} from 'react-router-dom'
import {useState} from 'react'
import{useNavigate} from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert'


function Login() {
    const navigate=useNavigate()
    const [Email ,setEmail] =useState()
    const [Password ,setPassword] =useState()


const handelLogin=(e)=>{

    e.preventDefault()

    axios.post('http://localhost:3030/providers/login', {
        email:Email,password:Password})

        .then((res)=>{
            console.log(res.data)

            if(res.data.success === true){
                const token = res.data.token;
                const providersign = jwt(token);
                console.log(token)
                console.log(providersign)
                localStorage.setItem('token',token);

                swal({
                    title:'Welcome .'+Email,
                    icon:'success'
                  })
                    navigate('/ServiceHome');
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

    return ( <>
  <form className="loginForm">
        
        <h1>Login</h1>
    
            <input type='email'
            placeholder='Enter your email address.'
            onChange={e=>setEmail(e.target.value)}
            />
    <br/>
    
    <input type='password'
            placeholder='Enter your password.'
            onChange={e=>setPassword(e.target.value)}
            />
    <br/>
    
    <button className='LOGIN'
     onClick={(e)=>handelLogin(e)}> Login</button>
     
        </form>
         
    </> );
}

export default Login;