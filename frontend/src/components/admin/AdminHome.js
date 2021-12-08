
import './admin.css'
import{useNavigate} from 'react-router-dom'

export default  function AdminHome () {
    const navigate=useNavigate()



    const handelBack=()=>{ 
       
        navigate('/LoginAdmin');

    }




    return ( <>
    
    <h2>Welcome</h2>
    <div className='parent'>

    <div className='child-1'>
        <button>Add new Admin</button> 
    </div>


    <div className='child-2'>
        <h2>Add new product</h2>
    </div>

    </div>
    <button className='BACKbtn' onClick={handelBack}>Back</button>
    </> );
}

