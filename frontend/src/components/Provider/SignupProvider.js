
import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';

function SignUp() {

    const [provider,setProvider]=useState([])
    const[newProvider,setNewProvider]=useState({})

 const [FName ,setFName]=useState();
 const [LName ,setLName]=useState();
 const [Phone ,setPhone]=useState();
 const [Image ,setImage]=useState();
 const [City ,setCity]=useState();
  
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()

// firstName:req.body.firstName,
// lastName:req.body.lastName,
// phone:req.body.phone,
// image:req.body.image,
// city:req.body.city,
// price:req.body.price

    return ( <>
    <form className='Psignup'> 

    <h2>SignUp page</h2>


<p>I have account <Link to={`/ProviderLogin`}>Login</Link></p>
    </form>
     

    </> );
}

export default SignUp;