
import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from 'axios'

import '../Provider/provider.css'
 

import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import {Card} from "react-bootstrap"
 
function AllProvider({data}) {

const {_id}=useParams();
const[service,setService]=useState([])
const [tservice,setTService]=useState([]);
const[newService,setNewService]=useState({})
const [loading,setLoading]=useState(true)
const[UserName,setUserName]=useState()
const[Phone,setPhone]=useState()
const[Price,setPrice]=useState()


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
    return ( <>

    <br></br>
    <br></br>
    <h1 className='lineTitle'>{service.nameOfService}</h1>


<Card border ='light' className='BigCard'>

{tservice.map((item)=>{

return<Card border='danger' style={{width:'20rem'}} className='smallCard'>

<Card.Header className='Header'>Name Of Provider: {item.userId.fullName}</Card.Header>
<Card.Text className='text'>Phone Number: {item.userId.phone}</Card.Text>
<Card.Text className='text'>Price: {item.price}</Card.Text>
 <img src={item.userId.image} className="profile" rounded alt="..." width={90} height={90}/>
</Card>



})}

</Card>


    </> );
}

export default AllProvider;