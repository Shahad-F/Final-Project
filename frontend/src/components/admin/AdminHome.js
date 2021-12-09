
import './admin.css'
import{useNavigate} from 'react-router-dom'

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
    

    <h2>Welcome</h2>

    <div className='child-1'>

        <button className='btn' onClick={handelAddNewAdmin} >Add new Admin</button> 
         
        <button className='btn' onClick={handelAddNewService}>Add new Service</button>
    </div>


    

     
    <button className='BACKbtn' onClick={handelBack}>Back</button>
    </> );
}

