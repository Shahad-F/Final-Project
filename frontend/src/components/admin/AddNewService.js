import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './service.css'


export default function AddNewService () {

    
    const navigate=useNavigate()
    const [service,setService]=useState();
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);
    // i want to display all information in screen 
    useEffect(()=>{ 

   axios.get('http://localhost:3030/services')
   .then((res)=>{
       console.log(res.data)
       setService(res.data)
       setLoading(false)
   })
    },[newService])


    // ................
    if(loading){
    return(<p>Loading</p>)
}

    return ( <>

<div className="bigBox">
    {service.map((item ,index)=>{
        return <div key={index} className="box">
       
       <img src={item.image} alt='' width={290}/>
       <h2>{item.nameOfService}</h2>

        </div>
    })}
</div>

    </> );
}

  
