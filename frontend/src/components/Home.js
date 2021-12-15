
 import '../CSS/Home.css'
 import { useNavigate } from "react-router-dom"; 


 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Container ,Row,Image,Button,Col} from 'react-bootstrap';
 


 export default function Home() {
     

    const navigate=useNavigate()


const handelAdmin=()=>{

    navigate('/LoginAdmin')

}

const handelProvider=()=>{
    navigate('/ProviderSignUp')
}
    return (  <>


    <div className="parent"> 

         <div className="subject"> 

        <h1>CALL <span>me</span></h1>

        <div className="homeBTN">

<Button variant="outline-danger" onClick={handelAdmin}>Admin</Button>{' '}<br></br>
<Button variant="outline-danger" onClick={handelProvider}>Service Providor</Button>{' '}

</div>
        </div>
        
        
        <div>
         
        <Image className="image" src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt=''   />
        
        </div>
         
      
    
        
        </div>
    </>);
}

 