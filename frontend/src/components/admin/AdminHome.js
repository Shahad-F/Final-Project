
import './admin.css'
import{useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Card,Button,Container} from 'react-bootstrap';
 


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
    
    <Button variant="outline-secondary" className='back'
    onClick={handelBack}
    >Back to home page</Button>{' '}
    
{/*  */}

<Card.Body className="Parent"> 

<Card style={{ width: '20rem' }} className="child-1">
  <Card.Img variant="top" src="https://www.totaljobs.com/advice/wp-content/uploads/administrator-job-description-1024x576.jpg" />
  {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9BXk0vX11XIFxR64R4fe0afcHbpMMZQAmg&usqp=CAU */}
  {/* https://www.totaljobs.com/advice/wp-content/uploads/administrator-job-description-1024x576.jpg */}
  <Card.Body>
    <Card.Title className="text"> Add New Admin</Card.Title>
     
    <Button variant="primary" onClick={handelAddNewAdmin}>Click here</Button>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}  className="child-2">
  <Card.Img  variant="top"src="https://previews.123rf.com/images/ayax/ayax1406/ayax140600193/29202216-auto-service-icons.jpg" />
  <Card.Body>
    <Card.Title className="text"> Add New Service</Card.Title>
     
    <Button variant="primary" onClick={handelAddNewService}>Click here</Button>
  </Card.Body>
</Card>
</Card.Body>

{/*  */}

 
    

 
     </> );
}

