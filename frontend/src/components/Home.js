
 import '../CSS/Home.css';
 import Loading from '../components/Loading';

 import ReactLoading from "react-loading";
 import {useState,useEffect} from 'react'
 import { useNavigate } from "react-router-dom"; 
 import {Link} from 'react-router-dom'
 import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Carousel ,Row,Image,Button,Col,Card} from 'react-bootstrap';
 


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

         {/* <img className='back-img' src='https://www.pngkit.com/png/full/96-969625_vector-red-circle-hand-hollow-red-circle-png.png' alt='' /> */}
         <img className="main-img" src='https://www.pngkit.com/png/full/89-892591_grey-mercedes-benz-e-class-car-png-image.png' alt=''   />

        </div> 
       
        </div>
<br/>
        <h3 className="title-header">Why we are better than others.</h3>
         
        <div className='middle-header'>

 
 <div className='two'>
     
    <img src='https://www.pngkit.com/png/full/810-8109349_smartphone-png-transparent-icon-mobile-phone.png' alt='' width={50}/>
    <h6>Easy To Call</h6>
    <p>you only need a few steps to ordering service</p>
</div>

{/*  */}
    <div className='one'>
      
    <img  src='https://www.pngkit.com/png/full/41-412413_faster-icon-png-0-copy-angel-tube-station.png' alt='' width={80}/>
    <h6>Fastest Delivery</h6>
    <p>Delivery that is always ontime even faster.</p>
  </div>
{/*  */}

      <div className='two'>
        <img  src='https://www.pngkit.com/png/full/42-423459_icon-for-office-of-quality-safety-and-value.png' alt='' width={60} />
        <h6>Best Quality</h6>
        <p>Not only fast for us, but the quality is also number one.</p>
    
     </div>  

{/*  */}

<div className='one'>
   <img src='https://barbadostoday.bb/wp-content/uploads/2020/04/Phone-_call_contact_us_customer_service_customer_support_helpline-11-512.png' alt='' width={80}/>
   <h6>Support Team </h6>
   <p>we have a team that will help you with any issue.</p>
     </div> 
     {/*  */}

     <div className='one'>
    <img src='https://www.newneuromarketing.com/media/zoo/images/NNM-2015-019-Cost-consciousness-increase-product-sales-with-Price-Primacy_6a73d15598e2d828b0e141642ebb5de3.png' alt='' width={80}/>
   <h6>Best Price </h6>
   <p>We have the best price for all services.</p>
     </div> 
        </div>

{/*  */}

 
  
<div className='Our-customer'>

<div className='partOne'> 
     <p>OUR SERVICE</p>

<h3>Services That Always <br/>
 Make You Feel Satisfied</h3>

<div className='scroll'>

    {service.map((item)=>{
        return ( <>
               <h4>{item.nameOfService}</h4>
                
                 </>)
    })
    }
 
</div>

</div>

<div className='partTwo'>
<h3>What Our Customer Say </h3>
 
</div>

</div>

    </>);
}

 