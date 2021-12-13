import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import {Link} from 'react-router-dom'
import '../admin/service.css'


function ServiceHome() {

    const navigate=useNavigate()
    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});


    // display all Services
    useEffect(()=>{ 

        axios.get('http://localhost:3030/services')
        .then((res)=>{
            console.log(res.data)
            setService(res.data)
             
        })
         },[newService])

        //  

        
    return ( <>
    
    <h2 className="lineTitle">Service Home</h2>

    {/* <div className="bigBox"> */}
    {service.map((item ,index)=>{
        return 
        // <div key={index} className="box">
       
       <img src={item.image} alt='' width={200}/>
       <h6 className="title">{item.nameOfService}
       
       </h6>
      
<p><Link to={`/AddProviderService/${item._id}`}>See More</Link></p>
       

        // </div>
    })}

{/* </div> */}


    </> );
}

export default ServiceHome;