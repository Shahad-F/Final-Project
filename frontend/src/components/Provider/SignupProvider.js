
import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './sign.css'
import{useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col ,Row} from 'react-bootstrap';
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

<Row className="SignForm">
<h2>SignUp</h2>
<Col md>
<Form.Control type="text" placeholder="first name" 
onChange={e=>setFName(e.target.value)}/>
<Form.Control type="text" placeholder="last name"
onChange={e=>setLName(e.target.value)} />
<Form.Control type="text" placeholder="phone number"
onChange={e=>setPhone(e.target.value)} />
<Form.Control type="text" placeholder="image"
onChange={e=>setImage(e.target.value)} />
<Form.Control type="text" placeholder="your city" 
onChange={e=>setCity(e.target.value)}/>
<Form.Control type="email" placeholder="name@gmail.com" 
onChange={e=>setEmail(e.target.value)}/>
<Form.Control type="password" placeholder="your password"
onChange={e=>setPassword(e.target.value)} />
</Col>
<Button variant="outline-dark"
 onClick={(e)=>SignUp(e)}>Sign up</Button>
<p>I have account <Link to={`/ProviderLogin`}>Login</Link></p>
 
</Row>

     

     

{/* <button onClick={(e)=>SignUp(e)}>Sign Up</button> */}

{/* <p>I have account <Link to={`/ProviderLogin`}>Login</Link></p> */}
     
     

    </> );
}

export default SignUp;