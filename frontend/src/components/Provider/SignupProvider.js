
import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';

function SignUp() {
    return ( <>
    <form className='Psignup'> 

    <h2>SignUp page</h2>


<p>I have account <Link to={`/ProviderLogin`}>Login</Link></p>
    </form>
     

    </> );
}

export default SignUp;