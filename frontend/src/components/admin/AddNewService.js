import { useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import './service.css'


export default function AddNewService () {

    
    const navigate=useNavigate()

    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    const [name,setName] = useState();
    const [Image,setImage]=useState();
    // i want to display all information in screen 
    useEffect(()=>{ 

   axios.get('http://localhost:3030/services')
   .then((res)=>{
       console.log(res.data)
       setService(res.data)
       setLoading(false)
   })
    },[newService])

// add new service to
const handelAddNewService =()=>{

    axios.post('http://localhost:3030/services/create', {
        nameOfService:name,image:Image})

        .then((res)=>{
            console.log(res.data)
            setNewService(res.data)
             
        })
        swal({
            title: "New Service is Added .",
            icon:'success', 
             button: "ok "
          }) 
}

// delete service

    const handelDeleteService =(id)=>{
    axios.delete(`http://localhost:3030/services/${id}/delete`)
    .then((res)=>{
        setNewService(res.data)
        swal({
            title:'Service is deleted ',
            icon:'success'
          })
    })
    }
    // ....................................................................
    // edit service

    const handelEditService =(id)=>{
        axios.put(`http://localhost:3030/services/${id}/update`,
        {nameOfService:name,image:Image })
     .then((res)=>{
        console.log(res.data)
        setNewService(res.data)
     })
     swal({
        title: "  Service is updateed .",
        icon:'success', 
         button: "ok "
      }) 

    }
    // ................
    if(loading){
    return(<p>Loading</p>)
}

    return ( <>

<form className='NewForm'>

<h1>Add New Service</h1>

<input type='text' name='name'
placeholder='Enter name of service'
onChange={ e=>setName(e.target.value)}/>

<input type='text' name='image'
placeholder='Enter image of service'
onChange={ e=>setImage(e.target.value)}/>

<button className="addbtn" onClick={(e)=>handelAddNewService(e)}>Add</button>
</form>


<div className="bigBox">
    {service.map((item ,index)=>{
        return <div key={index} className="box">
       
       <img src={item.image} alt='' width={200}/>
       <div className="title">{item.nameOfService}</div>
      
      <div> 
        <button className="editbtn" onClick={()=>handelEditService(item._id)}>Updae</button>
       <button className='deletebtn' onClick={()=>handelDeleteService(item._id)}> Delete</button>
       </div>

        </div>
    })}
</div>

    </> );
}

  
