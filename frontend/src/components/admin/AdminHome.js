
import './admin.css'
import{useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Container ,Row,Image,Button,Col} from 'react-bootstrap';
 


export default  function AdminHome () {
    const navigate=useNavigate()



    const handelBack=()=>{ 
       
        navigate('/LoginAdmin');

    }
    const handelAddNewAdmin =()=>{
navigate('/AddNewAdmin')
    }

    const handelAddNewService=()=>{
        navigate('/AddNewService')
    }
    return ( <>
    
    <Button variant="outline-secondary"
    onClick={handelBack}
    >Back to home page</Button>{' '}
    
<div className="Parent"> 

    <div className='child-1'>

        <button className='btn' onClick={handelAddNewAdmin} >Add new Admin</button> <br></br>
        <button className='btn' onClick={handelAddNewService}>Add new Service</button>
    </div>


<div>

    <img src='https://www.pngkit.com/png/full/1-19431_pngpix-com-blue-ferrari-california-t-car-png.png' alt ='' width={550}/>
</div>
    

</div> 
     </> );
}

