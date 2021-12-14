  
  import {useState,useEffect} from 'react'
  import axios from 'axios'
  import '../components/admin/service.css'

  import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Container,Form,CardGroup,Row,Image} from 'react-bootstrap';
 

  export default  function Service () {

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

         if(loading){
            return(<p>Loading</p>)
        }

    return ( <>
    <h1 className="lineTitle">All services</h1>


    <Card className="BigCard">
    {service.map((item ,index)=>{

        return <Card key={index} className="box">
       
       <Image src={item.image} alt='' width={200}/>
       <Card.Body className="title">{item.nameOfService}</Card.Body>
       
        </Card>
    })}
    </Card>
    </> );
}

 