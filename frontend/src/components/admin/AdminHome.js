
import './admin.css'
import{useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Card,Button,Col} from 'react-bootstrap';
 


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
    
{/*  */}

<Card className="Parent"> 

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://i.pinimg.com/originals/07/cf/df/07cfdf825b9b50d3413309a14c9e4ed6.jpg" />
  <Card.Body>
    <Card.Title> Add New Admin</Card.Title>
     
    <Button variant="primary" onClick={handelAddNewAdmin}>Click here</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://a-static.besthdwallpaper.com/black-audi-r8-vehicle-on-road-between-trees-during-daytime-wallpaper-1280x1024-26154_32.jpg" />
  <Card.Body>
    <Card.Title> Add New Service</Card.Title>
     
    <Button variant="primary" onClick={handelAddNewService}>Click here</Button>
  </Card.Body>
</Card>
</Card>

{/*  */}


{/* <div className="Parent"> 

    <div className='child-1'>

        <button className='btn' onClick={handelAddNewAdmin} >Add new Admin</button> <br></br>
        <button className='btn' onClick={handelAddNewService}>Add new Service</button>
    </div> */}


{/* <div>

    <img src='https://www.pngkit.com/png/full/1-19431_pngpix-com-blue-ferrari-california-t-car-png.png' alt ='' width={550}/>
</div> */}
    

 
     </> );
}

