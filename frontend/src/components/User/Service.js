  
  import {useState,useEffect} from 'react'
  import {useParams} from "react-router-dom"
  import axios from 'axios'
  
  import '../admin/service.css'

  import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Container,Form,CardGroup,Row,Image} from 'react-bootstrap';
 

  export default  function Service ({data}) {

    const {_id}=useParams();
    const [service,setService]=useState([]);
    const [tservice,setTService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{ 
 
        axios.get(`http://localhost:3030/services/${_id}`)
        .then((res)=>{
            console.log(res.data)
            setService(res.data.tservice[0].serviceId)
            setTService(res.data.tservice)
            setLoading(false)
        })
         },[])

         if(loading){
            return(<p>Loading</p>)
        }

    return (<>

    <h1 className="lineTitle">{service.nameOfService}</h1>

     
    <Card border ='light' className='BigCard'>

        {tservice.map((item)=>{

        return<Card border='danger' style={{width:'20rem'}} className='smallCard'>

        <Card.Header className='Header'>Name: {item.userId.fullName}</Card.Header>

        <div className='SmBox'> 
        <img src={item.userId.image} className="profile" rounded alt="..." width={80} height={80}/>

        <Card.Text className='textBox'>Phone NO: <span>{item.userId.phone}</span>  <br></br>
        Price: {item.price} SR</Card.Text>
        </div>
        </Card>
        })}

        </Card>
     
    </>
     );
}

 