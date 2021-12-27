
 import '../CSS/Home.css'
 import {useState,useEffect} from 'react'
 import { useNavigate } from "react-router-dom"; 

 import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Container ,Row,Image,Button,Col,Card} from 'react-bootstrap';
 


 export default function Home() {
     
    const [service,setService]=useState();
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{ 
 
        axios.get('http://localhost:3030/services')
        .then((res)=>{
            console.log(res.data)
            setService(res.data)
            setLoading(false)
        })
         },[newService])

         
    const navigate=useNavigate()


const handelAdmin=()=>{

    navigate('/LoginAdmin')

}

const handelProvider=()=>{
    navigate('/ProviderSignUp')
}
if(loading){
    return(<p>Loading</p>)
}
    return (  <>


    <div className="parent"> 

         <div className="subject"> 

        <h1>CALL <span>me</span></h1>

        <div className="homeBTN">

<Button variant="outline-danger" onClick={handelAdmin}>Admin</Button>{' '}
{/* <Button variant="outline-secondary" onClick={handelProvider}>Service Providor</Button>{' '} */}

 
      </div>
 
        </div>
        
        <div className="img-box">

         <img className='back-img' src='https://www.pngkit.com/png/full/108-1083468_road-png-images-highway-road-png-images-hd.png' alt='' />
         <img className="main-img" src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt=''   />

        </div> 
       
    
        
        </div>

 
        <Card className="BigCard">
    {service.map((item ,index)=>{

        return <Card key={index} className="box">
       
       <Image src={item.image} alt='' width={200}/>
       <Card.Body className="title">{item.nameOfService}</Card.Body>
       
        </Card>
    })}
    </Card>



    </>);
}

 