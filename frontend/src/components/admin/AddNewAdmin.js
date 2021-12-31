
import{useNavigate ,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import jwt_decode from 'jwt-decode'
import jwt from 'jwt-decode'
import axios from 'axios'
import swal from 'sweetalert';
import './newAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger,Button,Modal,Form,Table,Tooltip} from 'react-bootstrap';
 
function AddNewAdmin() {

// const {_id} =useParams();
const navigate=useNavigate()

const[admin ,setAdmin]=useState([])
const [newAdmin,setNewAdmin]=useState({})
// const [loading,setLoading] = useState(true);


const [Name ,setName]=useState();
const [Email,setEmail]=useState()
const [Password,setPassword]=useState()
const [show,setShow] =useState(false);

  

useEffect(()=>{ 
    axios.get('http://localhost:3030/admins')
    .then((res)=>{
        console.log(res.data)
        setAdmin(res.data)
        // setLoading(false)
    })
},[newAdmin])


// ....................

    const handelBack=()=>{ 
       
        navigate('/AdminHome');

    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handelAdd=(e)=>{ 
    e.preventDefault();

    axios.post('http://localhost:3030/admins/AdSignup', 
    {name:Name,email:Email,password:Password})
     

 .then((res)=>{
     
    console.log(res.data)

if(res.data.errors === 11000 ){
  const token = res.data.admin;
                
  const adminsign = jwt(token);
  console.log(token)
  console.log(adminsign)
  localStorage.setItem('token',token);

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
 
 })

}
// .....................

const handelDelete=(id,name)=>{ 

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Your file has been deleted!", {
          icon: "success",
        });
        axios.delete(`http://localhost:3030/admins/${id}/delete`)
    .then((res)=>{ 

      setNewAdmin(res.data)
    })
      } else {
        swal("Your file is safe!");
      }
    });

}

// if(loading){
//     return(<p>Loading</p>)
// }
    return (
        
     <>
    

    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Back to Homepage !</Tooltip>}>
  <span className="d-inline-block">
  <img  src='https://www.pngkit.com/png/full/0-6443_image-library-library-arrow-clip-art-at-clker.png'
    alt='' width={30} className='back' onClick={handelBack}/>

  </span>
</OverlayTrigger>

     
    

     <br/>
      

     <button className="addbtn" onClick={handleShow} >
      <img src='https://www.pngkit.com/png/full/4-41781_free-download-plus-symbol-png.png'
      alt='' width={20} />
       &nbsp; Add New</button>
     

{/*  */}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='modelTitle'>
        <Modal.Title  >add new admin</Modal.Title>
        </Modal.Header>

         
<Form.Floating className="mb-3">
     
     <Form.Control className="Input"
       id="floatingInputCustom"
       type="text"
       placeholder='Enter name.'
       onChange={e=>setName(e.target.value)}
     />
     <label className='Lable'  htmlFor="floatingInputCustom">Admin name</label>
   
   </Form.Floating>

 <Form.Floating className="mb-3">
     
    <Form.Control className="Input"
      id="floatingInputCustom"
      type="email"
      placeholder="name@gmail.com"
      onChange={e=>setEmail(e.target.value)}
    />
    <label className='Lable' htmlFor="floatingInputCustom">Email address</label>
  
  </Form.Floating>

<Form.Floating className="mb-3">
    <Form.Control  className="Input"
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
      onChange={e=>setPassword(e.target.value)}
    />
    <label className='Lable'  htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}  >
            Close
          </Button>
          <Button variant="outline-danger" onClick={(e)=>handelAdd(e)}>
           add
          </Button>
        </Modal.Footer>
      </Modal>
           
  


<Table striped bordered hover>

<thead> 
 <tr> 
 <th>#</th>
 <th>Name</th>
 <th>Email</th>
 <th> Action</th>
 </tr>
 </thead>

 {admin.map((get,index)=>{

 return( <tbody> 
 <tr> 
 <td>#</td>
 <td>{get.name}</td>
 <td>{get.email}</td>
 <td>
 <Button variant="outline-danger" onClick={()=>handelDelete(get._id,get.name)}>
   Danger</Button>{' '}
   {/* <img  
     src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png' 
     alt=''
     onClick={()=>handelDelete(get._id,get.name)}
     width={25} className="Trashbtn"/> */}
     </td>
</tr>
 </tbody>
 )
 })}
</Table>


     
 
    </> );
}

export default AddNewAdmin;