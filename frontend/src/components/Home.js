
 import '../CSS/Home.css';
 import Loading from '../components/Loading';

 import ReactLoading from "react-loading";
 import {useState,useEffect} from 'react'
 import { useNavigate } from "react-router-dom"; 
 import {Link} from 'react-router-dom'
 import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Spinner ,Row,Image,Button,Col,Card} from 'react-bootstrap';
 


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
    return(<Loading/>)
}
    return (  <>

{/* <Loading/> */}
    <div className="parent"> 

         <div className="subject"> 

        <h1>CALL <span>me</span></h1>

        <div className="homeBTN">

<Button variant="outline-danger" onClick={handelAdmin}>Admin</Button>{' '}
<Button variant="outline-secondary" onClick={handelProvider}>Service Providor</Button>{' '}

 
      </div>
 
        </div>
        
        <div className="img-box">

         <img className='back-img' src='https://www.pngkit.com/png/full/108-1083468_road-png-images-highway-road-png-images-hd.png' alt='' />
         <img className="main-img" src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt=''   />

        </div> 
       
    
        
        </div>

 
         
        <div className='middle-header'>

 <div className='one'>
     
    <img src='https://media.istockphoto.com/vectors/girl-calling-carroad-assistance-for-help-burst-wheel-insurance-on-vector-id1158122874?k=20&m=1158122874&s=612x612&w=0&h=KQh_-N38Zci8v3xIbB1vBLAT_EVjAhrONc3B27Ah510=' alt='' width={130}/>
   <h6>Easy To Call</h6>
   <p>you only need a few steps to ordering service</p>
</div>

{/*  */}
   <div className='one'>
     <br></br>
    <img src='https://www.jing.fm/clipimg/full/53-537545_delivery-time-2-01.png' alt='' width={100}/>
    <br></br>
    <br></br>
   <h6>Fastest Delivery</h6>
   <p>Delivery that is always ontime even faster.</p>
  </div>
{/*  */}

      <div className='one'>
        <img src='https://thumbs.dreamstime.com/b/auto-repair-service-wash-vector-illustration-male-female-characters-fixing-washing-automobile-car-wash-auto-mechanic-171635442.jpg' alt='' width={100}/>
    
   <h6>Best Quality</h6>
   <p>Not only fast for us, but the quality is also number one.</p>
     </div>  

{/*  */}

<div className='one'>
        <img src='https://www.revechat.com/wp-content/uploads/2020/12/24x7-customer-support.png' alt='' width={160}/>
    
   <h6>Support Team </h6>
   <p>we have a team that will help you with any issue.</p>
     </div> 
        </div>



    </>);
}

 