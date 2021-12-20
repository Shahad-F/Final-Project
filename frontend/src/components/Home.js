
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

<Button variant="danger" onClick={handelAdmin}>Admin</Button>{' '}
<Button variant="secondary" onClick={handelProvider}>Service Providor</Button>{' '}

<div className="social-media">

<a href=''><img src='https://www.pngkit.com/png/full/2-28059_twitter-logo-png-transparent-background-graphic-freeuse-twitter.png' width={30} alt=''/></a>
<a href=''><img src='https://www.pngkit.com/png/full/23-235282_gmail-logo-vector-black-and-white.png' width={30} alt=''/></a>
<a href=''><img src='https://aquilasweb.com.br/wp-content/uploads/2017/07/Aquilas-WEB-Linkedin-Logo.jpg' width={30} alt=''/></a>

</div>
</div>
        </div>
        
        
        <div>
         
        <Image className="image" src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt=''   />
        
        </div>
         
      
    
        
        </div>
    </>);
}

 