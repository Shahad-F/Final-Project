
import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './sign.css'
import{useNavigate} from 'react-router-dom'
function SignUp() {
    const navigate=useNavigate()
    const [provider,setProvider]=useState([])
    const[newProvider,setNewProvider]=useState({})

 const [FName ,setFName]=useState();
 const [LName ,setLName]=useState();
 const [Phone ,setPhone]=useState();
 const [Image ,setImage]=useState();
 const [City ,setCity]=useState();
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()

 
// functions 
// signUp for provider

const SignUp =(e)=>{
    e.preventDefault();

axios.post('http://localhost:3030/providers/signUp',
{firstName:FName ,lastName:LName ,phone:Phone ,image:Image ,city:City ,email:Email,password:Password   })

.then((res)=>{
    console.log(res)

    if(res.data.error === 'Email is taken'){
          
        swal({
            title: "Your password or email is taken",
            icon:'error', 
            button: "Try again "
          })
    }else {
        setNewProvider(res.data)

        swal({
            title: 'Welcome '+ FName,
            icon:'success'
          })
          navigate('/ServiceHome')
    }
})

}

    return ( <>
    <form className='SignForm'> 

    <h2>SignUp</h2>

<input type='text' name='first name'
placeholder='First Name' 
onChange={e=>setFName(e.target.value)}/><br></br>

<input type='text' name='last name'
placeholder='Last Name' 
onChange={e=>setLName(e.target.value)} /><br></br>

<input type='text' name='phone'
placeholder='Phone Number' 
onChange={e=>setPhone(e.target.value)} /><br></br>

<input type='text' name='image'
placeholder='put your image' 
onChange={e=>setImage(e.target.value)}/><br></br>

<input type='text' name='city'
placeholder='your city' 
onChange={e=>setCity(e.target.value)}/><br></br>

<input type='text' name='email'
placeholder='your Email' 
onChange={e=>setEmail(e.target.value)}/><br></br>

<input type='password' name='password'
placeholder='password' 
onChange={e=>setPassword(e.target.value)}/><br></br>

<button onClick={(e)=>SignUp(e)}>Sign Up</button>

<p>I have account <Link to={`/ProviderLogin`}>Login</Link></p>
    </form>
     

    </> );
}

export default SignUp;