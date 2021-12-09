
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
    

    
<div className="Parent"> 
    <div className='child-1'>

        <button className='btn' onClick={handelAddNewAdmin} >Add new Admin</button> <br></br>
        <button className='btn' onClick={handelAddNewService}>Add new Service</button>
    </div>

<div>

    <img src='https://www.pngkit.com/png/full/1-19431_pngpix-com-blue-ferrari-california-t-car-png.png' alt ='' width={550}/>
</div>
    

</div> 
    <button className='BACKbtn' onClick={handelBack}>Back</button>
    </> );
}

