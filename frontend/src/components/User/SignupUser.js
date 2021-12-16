import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import '../Provider/sign.css'
import{useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col ,Row ,FloatingLabel} from 'react-bootstrap';


function SignupUser() {

    const navigate=useNavigate()
    const [user,setUser]=useState([])
    const[newUser,setNewUser]=useState({})

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

axios.post('http://localhost:3030/users/signUp',
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
        setNewUser(res.data)

        swal({
            title: 'Welcome '+ FName,
            icon:'success'
          })
          navigate('/UserHome')
    }
})

}

    return (  <>
    
    <Form  style={{
    backgroundImage:
     `url("https://i.pinimg.com/originals/27/c1/64/27c1644923ceeb2fbcdce1da05cf366a.jpg")`, 
     backgroundSize: 'cover',
     width: "100%",
     height: "1000px",
     backgroundPosition: 'center',
     opacity: 0.8,
        // backgroundAttachment: 'fixed'
        }}>
          

</Form>
{/*  */}
<Form className="signupForm">

<h1>SignUp</h1>
<Row> 
  <Col md> 

<Form.Floating className="mb-3">
<Form.Control type="text"  id="fname" 
placeholder="first name" 
onChange={e=>setFName(e.target.value)}/>

<label htmlFor="fname">First Name</label> 
 </Form.Floating>

 </Col>

 <Col md>
<Form.Floating> 
<Form.Control type="text"  id='lname'
onChange={e=>setLName(e.target.value)} 
placeholder="last name" />
<label htmlFor="lname">Last Name</label>
</Form.Floating>
</Col>
</Row>
<Row> 
<Col md-1> 
<Form.Floating> 
<Form.Control type="text"  id="phone"
onChange={e=>setPhone(e.target.value)}
placeholder="Phone number"  />
<label htmlFor="phone">Phone Number</label>
</Form.Floating>
</Col>
<Col md-1> 
<Form.Floating> 
<Form.Control type="text"  id='city'
onChange={e=>setCity(e.target.value)}
placeholder="Your City" />
<label htmlFor="city">Your City</label>
</Form.Floating>
</Col>
</Row>

<Form.Floating> 
<Form.Control type="text"  id='image'
onChange={e=>setImage(e.target.value)} 
placeholder="fYour image" />
<label htmlFor="image">Image</label>
</Form.Floating>

<Form.Floating> 
<Form.Control type="email" id='email'
onChange={e=>setEmail(e.target.value)}
placeholder="Email address" />
<label htmlFor="email">Email address</label>
</Form.Floating>


<Form.Floating> 
<Form.Control type="password" id='password' 
onChange={e=>setPassword(e.target.value)} 
placeholder="pasword" />

<label htmlFor="password">Password</label>
</Form.Floating>

<Button variant="outline-danger"
 onClick={(e)=>SignUp(e)}>Sign up</Button>
  
<p >I have account <Link to={`/LoginUser`}>Login</Link></p>


</Form>

    </>);
}

export default SignupUser;