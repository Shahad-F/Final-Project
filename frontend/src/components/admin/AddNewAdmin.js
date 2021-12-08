
import{useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import { Button,Form } from 'react-bootstrap';

function AddNewAdmin() {

const navigate=useNavigate()

const[admin ,setAdmin]=useState([])
const [newAdmin,setNewAdmin]=useState({})
// const [loading,setLoading] = useState(true);


const [Name ,setName]=useState();
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()

// ....................

useEffect(()=>{ 
    axios.get('http://localhost:3030/admins')
    .then((res)=>{
        console.log(res.data)
        setAdmin(res.data)
        // setLoading(false)
    })
},[newAdmin])





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
setName('')
setEmail('')
setPassword('')
 })

}
// .....................

const handelDelete=(id)=>{ 
    swal({
        title:'Admin is deleted ',
        icon:'success'
      })
            console.log(id)

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
    
     
    <button className='BACKbtn' onClick={handelBack}>Back</button>

    <form className='NewForm'>
        <h1>New Admin</h1>

        <input type="text" name="name"
        placeholder='Enter name.'
        onChange={e=>setName(e.target.value)}/>
        {/* <br></br> */}

        <input type="email" name="email"
        placeholder='Enter name.'
        onChange={e=>setEmail(e.target.value)}/>
        {/* <br></br> */}
        
        <input type="password" name="password"
         placeholder='Enter Your Password.'
         onChange={e=>setPassword(e.target.value)}/>                         
         {/* <br/> */}
          
         {/* <Button variant="success">Add</Button>{' '} */}
          <button className='addbtn' onClick={(e)=>handelAdd(e)}>Add</button>

    </form>

        <div className='container'>

        {admin.map((get)=>{
        return <div className='card'>

            <h3> Name :<span>{get.name}</span> </h3>
            <h3>Email :<span>{get.email}</span> </h3>

            <button className='deletebtn' onClick={()=>handelDelete(get._id)}> Delete</button>
        </div>
})}

    </div>

    </> );
}

export default AddNewAdmin;