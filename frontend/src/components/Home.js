
 import '../CSS/Home.css'
 import { useNavigate } from "react-router-dom"; 


 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Form ,Col,Image,Card} from 'react-bootstrap';
 


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

        <div className='carImage'>
        {/* <img src='https://www.pngkit.com/png/full/100-1008399_luxury-car-png-giugiaro-berlina.png' alt='' width={500}/> */}
        {/* <img src='https://www.pngkit.com/png/full/71-716885_free-png-cadillac-png-images-transparent-swift-car.png' alt='' width={530}/> */}
        {/* <img src='https://www.pngkit.com/png/full/956-9566853_las-vegas-exotic-car-rental-2015-ferrari-458.png' alt='' width={530}/> */}
        <img src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt='' width={500}/>
        
         {/* <img src='https://www.pngkit.com/png/full/970-9708324_antique-classic-car-green-vintage-mosaic-clipart-car.png' alt='' width={500}/> */}
         {/* <img src='https://www.pngkit.com/png/full/79-795919_old-car-style-cars-public-domain-vintage-car.png' alt='' width={500}/> */}
 
     </div>
    
        
        </div>
    </>);
}

 